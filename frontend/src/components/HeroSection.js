import React from 'react';
import './HeroSection.css';
import  TypewriterClass  from 'typewriter-effect';
import { useNavigate } from 'react-router-dom';

function HeroSection() {
    const navigate = useNavigate();

    const handleGetStarted = () => {
        navigate('/login');
    };

    const handleRegister = () => {
        navigate('/login');
    };
  return (
    <div className="hero-container">
      <video
        className="bannerVideo"
        src="/videos/vid12.mp4"
        autoPlay
        loop
        muted
      />
      <div className="hero-content">
            <div className='hero-content-container'>
                <h1>WE POWER YOU TO SUCCEED!</h1>
                <div className='type-writer'>
                    <TypewriterClass
                            options={{ autoStart: true, loop: true }}
                            onInit={(typewriter) => {
                                typewriter
                                .typeString("Pakistan's most innovative learning platform")
                                .pauseFor(2000)
                                .deleteAll()
                                .typeString('Gallery of National and International tests')
                                .pauseFor(3000)
                                .deleteAll()
                                .typeString('ETEA, MDCAT, IELTS, SAT, TOEFL')
                                .start();
                            }}
                        />
                </div>
                
                <div className="hero-btns">
                    <button className="btns" onClick={handleGetStarted}>GET STARTED</button>
                    <button className="btns" onClick={handleRegister}>REGISTER</button>
                </div>
            </div>
      </div>
    </div>
  );
}
      

export default HeroSection;