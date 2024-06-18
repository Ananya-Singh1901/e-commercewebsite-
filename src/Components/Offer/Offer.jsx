import React from 'react';
import './Offer.css';

const Offer = () => {
    return (
        <div className="offer-container">
            <h2 className="offer-title">Special Offer!</h2>
            <p className="offer-description">
                Get 20% off on your first purchase! Use code <strong>FIRST20</strong> at checkout.
            </p>
            <button className="offer-button">Shop Now</button>
        </div>
    );
};

export default Offer;
