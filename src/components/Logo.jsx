import React from 'react';
import '../styles/components/Logo.css'
import logo from "../assets/logo.jpg";
import { NavLink } from "react-router-dom";


const Logo = () => {
    return (
        <div className='logo logo-header'>
            <NavLink to="/" className={(nav) =>(nav.isActive ? "nav-active" : "")}>
            {/* Les images importées depuis la balise IMG sont accessibles dans 'public' */}
            <img src={logo} alt='logo react'/>
            </NavLink>
        </div>
    );
};

export default Logo;