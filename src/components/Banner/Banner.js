import React from "react";

import Button from '../Button/Button';

const Banner = (props) => {
    return (
        <div className={props.isActive? "Banner is-active": "Banner"} id={props.id}> 
            <div className="Banner__image">
                <img className="desktop-only" src={props.imageUrl} alt={props.imageAlt}/>
                <img className="mobile-only" src={props.imageUrlMobile} alt={props.imageAlt}/>
            </div>
            <div className="Banner__text">
                <h2>{props.title}</h2>
                <p>{props.text}</p>
                <Button text={props.btnText} link={props.btnLink}></Button>
            </div>
        </div>
    );
}

export default Banner;