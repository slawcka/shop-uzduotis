import React from 'react';
import {  Link } from "react-router-dom";

const Header=()=>{
    return (
    <div className="header">
    <h1 className="logo">shop<span>till</span>drop</h1>
        <nav>
            <Link to="/">Pagrindinis</Link>
            <Link to="/admin">Administratorius</Link>
        </nav>
    </div>
)
}

export default Header;