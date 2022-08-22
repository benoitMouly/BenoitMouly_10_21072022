import React, { useEffect, useState } from 'react';
import '../styles/components/Gallery.css';
import BtnSlider from './BtnSlider';

const Gallery = ({props}) => {
    const [data, setData] = useState([]);
        // Le useEffect se joue lorsque le composant est monté
        useEffect(() => {
            setData(props.state.propsPassed.pictures)
        }, [setData])

        const dataSlider = props.state.propsPassed.pictures
        const [slideIndex, setSlideIndex] = useState(1)

        const nextSlide = () => {
            if(slideIndex !== dataSlider.length){
                setSlideIndex(slideIndex + 1)
            } 
            else if (slideIndex === dataSlider.length){
                setSlideIndex(1)
            }
        }
    
        const prevSlide = () => {
            if(slideIndex !== 1){
                setSlideIndex(slideIndex - 1)
            }
            else if (slideIndex === 1){
                setSlideIndex(dataSlider.length)
            }
        }
    
        // const moveDot = index => {
        //     setSlideIndex(index)
        // }
    
        return (
            <div className="container-slider">
                {dataSlider.map((obj, index) => {
                    return (
                        <div
                        key={index}
                        className={slideIndex === index + 1 ? "slide active-anim" : "slide"}
                        >
                            <img key={index}
                            src={obj} 
                            />
                        </div>
                    )
                })}
                {dataSlider.length > 1 && <div>
                    <BtnSlider moveSlide={nextSlide} direction={"next"} />
                    <BtnSlider moveSlide={prevSlide} direction={"prev"}/>
                    </div>
                }
    
                <div className="container-number">
                    {/* {Array.from({length: 5}).map((item, index) => (
                        <div key={index}
                        onClick={() => moveDot(index + 1)}
                        className={slideIndex === index + 1 ? "dot active" : "dot"}
                        ></div>
                    ))} */}
                    {slideIndex + '/' + dataSlider.length}
                </div>
            </div>
)};

export default Gallery;