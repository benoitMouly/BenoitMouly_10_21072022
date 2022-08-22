import React, { useEffect, useState } from 'react';

const Accordion = ({props}) => {
    // console.log(props)
    const [data, setData] = useState([]);
    
    //     // Le useEffect se joue lorsque le composant est monté
    //     useEffect(() => {
    //         setData(props)
    //         // console.log(logementList)
            
    //             }, [])

//     let acc = document.getElementsByClassName("accordion");
// let i;

// for (i = 0; i < acc.length; i++) {
//   acc[i].addEventListener("click", function() {
//     // console.log('TRIGGEEERR')
//     this.classList.toggle("active");
//     this.querySelector('.learn_more-accordion-icon').removeAttribute('fa-caret-right')
//     this.querySelector('.learn_more-accordion-icon').setAttribute('class', 'learn_more-accordion-icon fas fa-caret-up')
//     let panel = this.nextElementSibling;
//         if (panel.style.maxHeight) {
//         panel.style.maxHeight = null;
//         this.querySelector('.learn_more-accordion-icon').removeAttribute('fa-caret-up')
//         this.querySelector('.learn_more-accordion-icon').setAttribute('class', 'learn_more-accordion-icon fas fa-caret-right')
//         } else {
//         this.querySelector('.learn_more-accordion-icon').setAttribute('class', 'learn_more-accordion-icon fas fa-caret-up')
//         panel.style.maxHeight = panel.scrollHeight + "px";
//         } 
//   });
// }


    

    if(props instanceof Array){
        console.log(props)
        let table = []
        table = props
        console.log(props)
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