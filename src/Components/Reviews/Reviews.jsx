import { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
const Reviews = () =>{
    const {movieId}=useParams()
    const [revies,setRevies]=useState([])
    useEffect(()=>{
        fetch(`https://api.themoviedb.org/3/movie/${movieId}/reviews?api_key=e6929b7a198796c685bba2ed737fc948`)
        .then(response => response.json())
        .then(data => setRevies(data.results))
    },[movieId])
    return(
        <>
            <ul>
            {revies.map((revie)=>(
                <li className="CommentItem">
                    <h4>{revie.author}</h4>
                    <p>{revie.content}</p>
                </li>
            ))}
            </ul>
        </>
    )
}
export default Reviews