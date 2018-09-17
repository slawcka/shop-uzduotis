import React from 'react';
import {  Link } from "react-router-dom";

const Header=()=>{
    return (
    <div className="header">
        <nav>
            <h1 className="logo">slavuta</h1>
            <Link to="/">Home</Link>
            <Link to="/admin">Admin</Link>
        </nav>
        
    </div>
)
}

export default Header;