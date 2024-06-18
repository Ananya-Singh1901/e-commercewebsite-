import React from 'react'
import './Hero.css'
import rightImage from '../Assets/rightImage.png';
import { Link } from 'react-router-dom';
const Hero = () => {
  return (
    <div className="banner-container">
            <div className="banner-content">
                <h1>New Collections for Everyone</h1>
                <button><Link to ='/latestcollection'>Latest Collection →</Link></button>
            </div>
            <div className="banner-image">
                <img src={rightImage} alt="New Collection" />
            </div>
        </div>
  );
}

export default Hero
