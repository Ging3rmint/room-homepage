import React, {useState} from "react";

import Banner from '../Banner/Banner';
import Tab from '../Tab/Tab';

const Carousel= (props) => {
    const[current, setCurrent] = useState(0);
    const banners = props.banners;
    const length = banners.length;

    const nextSlide = () => {
        setCurrent(current === length - 1? 0: current + 1);
    }

    const prevSlide = () => {
        setCurrent(current === 0? length - 1: current - 1);
    }

    if (!Array.isArray(banners) || length < 0)
    {
        return null;
    }

    const createBanner = ((item, i) => (
        <Banner 
            isActive = {i === current? true: false}
            key={item.id}
            imageUrl={item.imageUrl}
            imageUrlMobile={item.imageUrlMobile}
            imageAlt ={item.imageAlt}
            title={item.title}
            text={item.text}
            btnText={item.btnText}
            btnLink={item.btnLink}
        />
    ));
    return(
        <div className="container-lg">
            <div className="Carousel">
                {banners.length > 0 && banners.map(createBanner)}
                <Tab prevSlide={prevSlide} nextSlide={nextSlide}/>
            </div>
        </div>
    );
}

export default Carousel;
