import React from 'react';
import DarkChairImage from '../../assets/images/image-about-dark.jpg';
import WhiteChairImage from '../../assets/images/image-about-light.jpg';

const AboutBanner = () => {
    return(
        <div className="container-lg">
            <div className="AboutBanner">
                <div className="AboutBanner__image-1">
                    <img src={DarkChairImage} alt="Dark Chair"/>
                </div>
                <div className="AboutBanner__text">
                    <h3>About our furniture</h3>
                    <p>Our multifunctional collection blends design and function to suit your individual taste. Make each room unique, or pick a cohesive theme that best express your interests and what inspires you. Find the furniture pieces you need, from traditional to contemporary styles or anything in between. Product specialists are available to help you create your dream space.</p>
                </div>
                <div className="AboutBanner__image-2">
                    <img src={WhiteChairImage} alt="Light Chair"/>
                </div>
            </div>
        </div>
    );
}

export default AboutBanner;