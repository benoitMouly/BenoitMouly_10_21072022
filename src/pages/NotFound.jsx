import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { NavLink } from "react-router-dom";
import '../styles/pages/NotFound.css'


const NotFound = () => {
    return (
        <div className="home-body">
            <div className="home-content">
                <div className="header">
                    <Logo/>
                    <Navigation/>
                </div>
            <div className="notfound-content">
            <div className='notfound'>
                   <span className='number'>404</span>
                   <p>Oups! La page que vous demandez n'existe pas.</p>
            </div>
            <div className="linkToHome">
            <NavLink to="/" className={(nav) =>(nav.isActive ? "nav-active" : "")}>
            <p>Retourner sur la page d'accueil</p>
            </NavLink>
            </div>
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default NotFound;