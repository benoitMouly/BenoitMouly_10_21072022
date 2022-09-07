import React from 'react';
import Logo from '../components/Logo';
import Navigation from '../components/Navigation';
import Banner from '../components/Banner';
import CardsGallery from '../components/CardsGallery';
import '../styles/pages/Home.css'
import Footer from '../components/Footer';
// import Card from '../components/Card';

const Home = () => {
    let bannerTitle = 'Chez vous, partout et ailleurs';
    return (
        <div className="home-body">
            <div className="home-content">
                <div className="header">
                    <Logo/>
                    <Navigation/>
                </div>
                <Banner props={bannerTitle}/>
                <CardsGallery/>
            {/* <Card /> */}
            </div>
            <Footer />
        </div>
    );
};

export default Home;