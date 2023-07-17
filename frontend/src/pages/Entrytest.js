import React from 'react';
import '../App.css';
import Cards from '../components/Cards2';
import Footer from '../components/Footer';
import { EntryText, entrytestData } from '../Data/Data';
import Herosection from '../components/Herosection/Herosection';
import EntryHero  from '../components/img/b16.jpg'

function Entrytest() {
    return(
        <>
       <Herosection 
            heroTitle = 'Entry Test'
            imgSrc ={EntryHero}
       />
        <Cards
            data = { entrytestData }
            pageText = {EntryText}
        />
        <Footer/>
        </>
    );


    


}

export default Entrytest;