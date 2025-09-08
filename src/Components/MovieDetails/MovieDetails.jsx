import { useEffect, useState } from "react";
import { Link, Outlet, useParams } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FaArrowLeft } from "react-icons/fa";
const MovieDetails = () => {
  const [posterPath, setPosterPath] = useState();
  const [genres, setGenres] = useState([]);
  const [config, setConfig] = useState(null);
  const { movieId } = useParams();
  const navigation=useNavigate()
  useEffect(() => {
    fetch(
      `https://api.themoviedb.org/3/movie/${movieId}?api_key=e6929b7a198796c685bba2ed737fc948&language=en-US`
    )
      .then((res) => res.json())
      .then((data) => {
        setPosterPath(data);
        setGenres(data.genres);
      })

    fetch(
      `https://api.themoviedb.org/3/configuration?api_key=e6929b7a198796c685bba2ed737fc948`
    )
      .then((res) => res.json())
      .then((data) => setConfig(data.images))
  }, [movieId]);

  if (!posterPath || !config) return <p>Завантаження...</p>;

  return (
    <>
      <button onClick={()=>navigation(-1)} className="buttonBack"> <FaArrowLeft/> Go back</button>
      <div className="Card">
        <img
          src={`${config.base_url}${config.poster_sizes[4]}${posterPath.poster_path}`}
          alt=""
        />
        <div>
          <h2>{posterPath.original_title}</h2>
          <p> User score: {Math.round(posterPath.vote_average * 10)} %</p>
          <h2>Overview</h2>
          <p>{posterPath.overview}</p>
          <h3>Genres</h3>
          <div className="ganres-div">
            {genres.map((genre) => (
              <p>{genre.name}</p>
            ))}
          </div>
        </div>
      </div>
      <div className="options">
        <ul>
        <li>
            <Link to={`cast`}>Cast</Link>
        </li>
        <li>
            <Link to={`Reviews`}>Reviews</Link>
        </li>
        </ul>
      </div>
      <Outlet/>
    </>
  );
};

export default MovieDetails;
