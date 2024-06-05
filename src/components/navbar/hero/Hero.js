import React from 'react'
import './HeroStyles.css'
import SportConsultancyImage from '../../../assets/footbal.avif';

function Hero() {
  return (
    <div className="hero-container">
      <img src={SportConsultancyImage} alt="Sport Consultancy" className="full-screen-image" />
        <div className='overlay'>
        <div className='content'>
            <h1>We are Innovating the Game, Developing Web Applications for Football Excellence</h1>
            
        </div>
        </div>
    </div>
  );
}

export default Hero;