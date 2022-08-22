import React, { useEffect, useState } from 'react';
import Card from './Card';
import { logementList } from '../datas/logements';
import '../styles/components/CardsGallery.css'

const CardsGallery = () => {
    const [data, setData] = useState([]);

    // Le useEffect se joue lorsque le composant est monté
    useEffect(() => {
setData(logementList)
// console.log(logementList)

    }, [])

    return (
        <div className='cardsGallery'>
            
            <ul className="cards_gallery-grid">
                {
                    data
                    .map((logement) => (
                    <Card key={logement.id} propsPassed={logement}/>
                    ))
                }
                </ul>
        </div>
    );
};

export default CardsGallery;