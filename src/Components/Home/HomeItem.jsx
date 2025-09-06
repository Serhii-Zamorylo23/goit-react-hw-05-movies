import React from "react";
import { Link } from "react-router-dom";
const HomeItem=({Title})=>{

    return(
        <li><Link>{Title}   </Link></li>
    )
}
export default HomeItem 