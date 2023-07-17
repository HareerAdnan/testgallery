import React from 'react';
//import '../App.css';
import { Button } from './button';
import './HerosectionEntry.css';

function HeroSection2() {
    return (
        <div className='entryHeroSection'>
            <div className="hero-container1">
                <h1>ENTRYTEST</h1>
              
                <div className="hero-btns">
                    
                        <button className='btns'>
                            GET Started
                        </button>
                    
                    <button
                        className="btns"
                        
                        onClick={console.log('hey')}
                        >
                        Get yourself Register
                    </button>
                </div>
            </div>
        </div>
        );
    }

export default HeroSection2;