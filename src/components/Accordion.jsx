// import React, { useEffect, useState } from 'react';

const Accordion = ({props}) => {

    if(props instanceof Array){ // Vérification si j'obtiens un ARRAY
        // console.log(props)
        let table = []
        table = props
        // console.log(props)
            return (
                <div className='panel'>
                    <ul className="panel-list">
                    {
                        table
                        .map((prop, index) => (
                        <li key={index} className='test'>
                            {prop}
                            </li>
                        ))
                    }
                    </ul>
                </div>
            );
    }

else {
    return (
        <div className='panel'>
            <p className='panel-txt'>{props}</p>
        </div>
    );
            }
};

export default Accordion;