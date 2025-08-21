import React from "react";
import { Link } from "react-router-dom";
const TrendsItem=({Title})=>{

    return(
        <li><Link>{Title}   </Link></li>
    )
}
export default TrendsItem 