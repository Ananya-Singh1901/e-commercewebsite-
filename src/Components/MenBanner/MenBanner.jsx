import React from 'react';
import manStylish from '../Assets/man_stylish.png'; 
import './MenBanner.css';

const MenBanner = () => {
  return (
    <div className="men-banner">
      <div className="banner-content">
        <h1>Get Up to 50% Exclusive Discounts</h1>
        <button className="shop-now-btn">Shop Now</button>
      </div>
      <div className="image-container">
        <img src={manStylish} alt="Stylish Man" className="banner-image" />
      </div>
    </div>
  );
};

export default MenBanner;
