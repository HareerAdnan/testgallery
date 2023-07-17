import React from 'react'
import './herosection.css';

const Herosection = (props) => {
    const { heroTitle, imgSrc } = props

  return (
    <div className='entryHeroSection'>
        <div className='hero-container1'>
            <div className='heroImage'>
                <img src={imgSrc} alt='Hero Image' />
            </div>
            <div className='HeroContent'>
                <div className='HeroContentContainer'>
                    <h1 className='heroTitle'>{heroTitle}</h1>
                
                    <div className="hero-btns">
                        
                        <button className='btnGetS'>
                            GET Started
                        </button>
                        
                        <button
                            className="btnGetS"
                            
                            onClick={console.log('hey')}
                            >
                            Get yourself Register
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default Herosection