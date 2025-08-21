import React from "react";
import TrendsItem from "./TrendsItem";
import { useState,useEffect} from "react";
const Trends=()=>{
    const [films,setFilms]=useState([])
    const key="e6929b7a198796c685bba2ed737fc948"
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/trending/all/day?api_key=${key}`)
        .then(response =>response.json())
        .then(data => setFilms(data.results))  
    },[])
    return(
        <>
        <h2>Trending today</h2>
        <ul>
            {
                films.map(film =>(
                    <TrendsItem Title={film.title ||film.name} />
                ))
            }
        </ul>
        </>
    )
}
export default Trends