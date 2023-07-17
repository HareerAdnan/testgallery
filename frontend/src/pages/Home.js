import React from 'react';
import '../App.css';
import HeroSection from '../components/HeroSection';
import Footer from '../components/Footer';
import { homeData } from '../Data/Data';
import Cards from '../components/Cards2';

function Home() {
    return (
        <>
            <HeroSection />
            <Cards 
                data = {homeData}
                pageText= ''
            />
            <Footer />
        </>
    );
}

export default Home;
