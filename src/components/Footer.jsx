import React from 'react';
import '../styles/components/Footer.css';
import logoWhite from "../assets/logo-white.png";


const Footer = () => {
    return (
        <div className='footer-block'>
                <img src={logoWhite} alt='logo white Kasa' className='footer-logo'/>
                <p className='footer-copyrights'>© 2020 Kasa. All rights reserved</p>
        </div>
    );
};

export default Footer;