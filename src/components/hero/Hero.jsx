import React from 'react';
import './Hero.css';
import hero1 from '../../images/hero1.png';
import hero2 from '../../images/hero2.png';
import hero3 from '../../images/hero3.png';

const Hero = () => {
   
//   fetch('https://api.escuelajs.co/api/v1/products')
// .then(res => res.json())
// .then(console.log);

  return (
    <div className="hero">
      <div className="hero__content">
        <div className="hero__text">
          <h2>Super savings at the Brand Outlet</h2>
          <p>Up to 60% off the brands you love.</p>
          <button className="hero__button">Shop now →</button>
        </div>
        <div className="hero__products">
          <div className="hero__product">
            
            <img src={hero1} alt="Callaway Product" />
          </div>
          <div className="hero__product">
            
            <img src={hero2}  alt="Merrell Product" />
          </div>
          <div className="hero__product">
            
            <img src={hero3} alt="Specialized Product" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;
