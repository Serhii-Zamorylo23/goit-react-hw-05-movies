import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"

const Casts = ()=>{
    const {movieId}=useParams()
    const [casts,setCasts]=useState([])
    const [config,setConfig]=useState(null)
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/credits?api_key=e6929b7a198796c685bba2ed737fc948&language=en-US`)
        .then(respose=> respose.json())
        .then(data => setCasts(data.cast || []))
        fetch(
            `https://api.themoviedb.org/3/configuration?api_key=e6929b7a198796c685bba2ed737fc948`
          )
            .then((res) => res.json())
            .then((data) => setConfig(data.images))
            .catch((err) => console.error(err));
    },[movieId])
    if (!casts.length || !config) {
        return <p>Завантаження...</p>;
      }
    return(
        <>
            {
                casts.map(cast =>(
                    <li className="AuthorItem">
                        <img src={`${config.base_url}${config.poster_sizes[4]}${cast.profile_path}`} alt="" className="PhotoAuthor"/>
                        <h5 className="NameAuthor">  {cast.name}</h5>
                    </li>
                ))
            }
        </>
    )
}
export default Casts