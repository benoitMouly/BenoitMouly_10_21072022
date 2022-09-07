import React from 'react';
import { NavLink } from "react-router-dom";
import '../styles/components/Navigation.css'

const Navigation = () => {
    return (
<div className="navigation">
    <ul className='navigation-list'>
        <NavLink to="/" className={(nav) =>(nav.isActive ? "nav-active" : "")}>
            <li>accueil</li>
        </NavLink>
        <NavLink to="/about" className={(nav) =>(nav.isActive ? "nav-active" : "")}>
            <li>a propos</li>
        </NavLink>
    </ul>
</div>
    );
};

export default Navigation;