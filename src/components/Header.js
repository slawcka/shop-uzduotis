import React from 'react';
import {  Link } from "react-router-dom";

const Header=()=>{
    return (
    <div className="header">
    <h1 className="logo">slavuta</h1>
        <nav>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
        </nav>
    </div>
)
}

export default Header;