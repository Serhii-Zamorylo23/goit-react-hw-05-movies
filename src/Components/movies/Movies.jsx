import React from "react";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";
import MovieDetails from "../MovieDetails/MovieDetails";
const StyledInput=styled.input`
  &:focus {
    border-color: #2020dc;
    outline: none; 
  }
`
const Movies = () => {
  const [value, setValue] = useState();
  const [FilteredFilms, SetFilteredFilms] = useState([]);
  const valueInput = (e) => {
    e.preventDefault();
    setValue(e.target.elements.nameFilmInput.value);
  };
  useEffect(() => {
    if (!value) return;
    fetch(
      `https://api.themoviedb.org/3/search/movie?query=${value}&api_key=e6929b7a198796c685bba2ed737fc948`
    )
      .then((resp) => resp.json())
      .then((data) => SetFilteredFilms(data.results));
  }, [value]);
  return (
    <>
      <form onSubmit={valueInput}>
        <StyledInput name="nameFilmInput" type="text" />
        <button type="submit">Search</button>
      </form>

      <ul>
        {
            FilteredFilms.map((FilteredFilm)=>(
                <li onClick={()=><MovieDetails/>}>
                    <Link to={`/movies/${FilteredFilm.id}`}>{FilteredFilm.title || FilteredFilm.name}</Link>
                </li>
            ))
        }
      </ul>
    </>
  );
};
export default Movies;
