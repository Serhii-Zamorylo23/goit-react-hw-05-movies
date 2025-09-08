import React from "react";
import { Link } from "react-router-dom";
import MovieDetails from "../MovieDetails/MovieDetails";
const HomeItem=({Title,FilmId})=>{

    return(
        <li onClick={()=><MovieDetails/>}>
            <Link to={`/movies/${FilmId}`}>{Title}</Link>
        </li>
    )
}
export default HomeItem 