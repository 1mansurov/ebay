import React from 'react';
import './Banner.css'; 
import banner from '../../images/banner.png';
import mother from '../../images/mother.png';

const Banner = () => {
  return (
    <div className="banner m-auto ">
      <div className="banner-left">
        <h3 className="featured">Featured</h3>
        <h1 className="brand">eBay</h1>
        <p className="tagline">Deals made easy all year long.</p>
        <p className="subtext">Free shipping. Best prices.</p>
        <button className="cta-button">Get your thing ➜</button>
      </div>
      <div className="banner-middle">
        <img src={banner} alt="Sneaker" className="product-image  " />
      </div>
      <div className="banner-right">
        <p className="right-text">To best care for your loved one,</p>
        <img src={mother} alt="Mother" className="right-image max-w-[300px] h-[250px] w-full  " />
      </div>
    </div>
  );
}

export default Banner;
