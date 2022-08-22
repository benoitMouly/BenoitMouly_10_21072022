import React, { useEffect, useState } from 'react';
import Accordion from '../components/Accordion';
import accordioned from '../utils/accordioned';
import  '../styles/components/Accordion.css';
import  '../styles/pages/About.css';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import Footer from '../components/Footer';

const About = () => {

    // const fiabilite = '';
    // const respect = '';
    // const service = '';
    // const securite = '';

    const faq = [
        {title : 'Fiabilité', text: 'Les annonces postées sur Kasa garantissent une fiabilité totale. Les photos sont conformes aux logements, et toutes les informations sont régulièrement vérifiées  par nos équipes.'},
        {title : 'Respect', text: 'La bienveillance fait partie des valeurs fondatrices de Kasa. Tout comportement discriminatoire ou de perturbation du voisinage entraînera une exclusion de notre plateforme.'},
        {title : 'Service', text: 'Nos équipes se tiennent à votre disposition pour vous fournir une expérience parfaite. N\'hésitez pas à nous contacter si vous avez la moindre question.'},
        {title : 'Sécurité', text: 'La sécurité est la priorité de Kasa. Aussi bien pour nos hôtes que pour les voyageurs, chaque logement correspond aux critères de sécurité établis par nos services. En laissant une note aussi bien à l\'hôte qu\'au locataire, cela permet à nos équipes de vérifier que les standards sont bien respectés. Nous organisons également des ateliers sur la sécurité domestique pour nos hôtes.'}
    ]

    const [data, setData] = useState([]);

    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
        setData(faq)
    }, [])


    return (
        <div className='home-body'>
            <div className="home-content">
            <div className="header">
                <Logo />
                <Navigation />
            </div>
            <Banner />
            <div className="faq-accordions">
            {
                data
                .map((accord, index) => (
                    <li key={index} className="accordion-list">
                                    <button onClick={accordioned} className="accordion btn-event"><i className="chevron bottom"></i>{accord.title}</button>
                                    <Accordion props={accord.text}/>
                    </li>
                    ))
            }
            </div>
            </div>
            <Footer />
        </div>
    );
};

export default About;