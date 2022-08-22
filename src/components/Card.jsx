import React from 'react';
import '../styles/components/Card.css'
import { NavLink } from "react-router-dom";

const Card = ({propsPassed }) => {
    return (
       <li className='card cards_gallery-el'>
        <NavLink to={`/logement/${propsPassed.id}/`} state={{ propsPassed }}
            className={(nav) =>(nav.isActive ? "nav-active" : "")} >

        <img src={propsPassed.cover} alt={"photo de l'appartement " + propsPassed.title} className="card__image"/>
            <span className='card__title'>{propsPassed.title}</span>

            </NavLink>
       </li>
    );
};

export default Card;