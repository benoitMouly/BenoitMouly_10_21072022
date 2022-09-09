import React from 'react';
import '../styles/components/Banner.css';
import bannerHome from "../assets/banner-img.png";
import bannerAbout from "../assets/banner-about.png";

const Banner = ({props}) => {
    if(props){
    return (
        <div className='banner-decorate' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${bannerHome})`}}>
                <h2>{props}</h2>
        </div>
    );
}
    else{
         return (
        <div className='banner-decorate' style={{backgroundImage: `linear-gradient(to bottom, rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)) , url(${bannerAbout})`}}>
        </div>
    );
    }
}

export default Banner;