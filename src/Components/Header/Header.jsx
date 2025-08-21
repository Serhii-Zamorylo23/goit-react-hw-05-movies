import React from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";

const StyledLink=styled(NavLink)`
    text-decoration: none;
    color: black;
    font-weight: 500;
    &:hover{
        text-decoration: underline;
    }
    &.active {
        color: #c558aa;
    }
`
const Header=()=>{
    return(
        <header className="Header">
            <div className="Header_wrapper">
                <StyledLink to="/" end>Home</StyledLink>
                <StyledLink to="/movies" end>Movies</StyledLink>
            </div>
        </header>
    )
}

export default Header