import React, { useEffect, useState } from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Footer from '../components/Footer';
import { useLocation, useNavigate } from 'react-router-dom';
import Gallery from '../components/Gallery';
import Accordion from '../components/Accordion';
import accordioned from '../utils/accordioned';
import  '../styles/components/Accordion.css';
import '../styles/pages/Fiche.css';
import coloredStar from "../assets/starcolored.svg";
import greyStar from "../assets/star.svg";

const Fiche = () => {
            const logementPassed = useLocation()
            // console.log(logementPassed)
            const [,setData] = useState([]);
            let navigate = useNavigate()
            // let coloredStar = '../assets/starcolored.svg';
            // let greyStar = "../assets/star.svg";
            let stars = [];
            // const { from } = logementPassed.state
            // console.log(logementPassed.state.propsPassed.title)
            useEffect(() => {
                if (!logementPassed.state){
                    return navigate("*");
                    }   
                setData(logementPassed.state)
                console.log(logementPassed.state)
                
                    }, [logementPassed.state, navigate])
                
                    if(logementPassed.state){
                    for(let i = 0; i < 5; i++){
                        if(i < logementPassed.state.propsPassed.rating){
                            stars.push(coloredStar)
                        } else{
                            stars.push(greyStar)
                        }
                    }
                }
if(logementPassed.state){
    let hostname = logementPassed.state.propsPassed.host.name;
    const hostnameCleaned = hostname.replace(/\s/g, '\n') //HimynameisFlavio
    return (
        <div className="home-body fiche-body">
            <div className="home-content fiche-content">
                <div className="header">
                    <Logo/>
                    <Navigation/>
                </div>
                <Gallery props={logementPassed}/>

                <div className="general-infos">
                    <div className="general-infos_logement">
                         <h2 className="logement-title">{logementPassed.state.propsPassed.title}</h2>
                         <p className='logement-location'>{logementPassed.state.propsPassed.location}</p>
                         <ul className="logement-tags">
                            {
                                logementPassed.state.propsPassed.tags
                                .map((tag, index) => (
                                <li key={index} className="logement-tag">
                                    {tag}
                                </li>
                                ))
                            }
                        </ul>
                    </div>
                    <div className="general-infos_locataire">
                        <div className="general-infos_locataire-vignette">
                            <p className='location-nom'>{hostnameCleaned}</p>
                            <img src={logementPassed.state.propsPassed.host.picture} alt={"photo de profil de  " + logementPassed.state.propsPassed.host.name} className="location-image"/>
                        </div>
                        <ul className='location-stars'>
                            {
                                stars
                                .map((star, index) => (
                                    <li key={index} className="logement-star">
                                       <img src={star} alt={"star rating "} className="location__rate"/>
                                    </li>
                                    ))
                            }
                        </ul>
                    </div>
                </div>
                <div className="togglers">
                    <div className="togglers_1">
                    <button onClick={accordioned} className="accordion btn-event"><i className="chevron bottom"></i>Description</button>
                        <Accordion props={logementPassed.state.propsPassed.description}/>
                    </div>
                    <div className="togglers_2">
                    <button onClick={accordioned} className="accordion btn-event"><i className="chevron bottom"></i>Caractéristiques en détails</button>
                        <Accordion props={logementPassed.state.propsPassed.equipments}/>
                    </div>
                </div>

            </div>
            <Footer />
        </div>
    );
};
}

export default Fiche;