import React,{Fragment} from 'react';

import Nav from "./components/Nav/Nav"; 
import Carousel from "./components/Carousel/Carousel";
import AboutBanner from "./components/AboutBanner/AboutBanner";

import desktopHomeImage1 from "./assets/images/desktop-image-hero-1.jpg";
import desktopHomeImage2 from "./assets/images/desktop-image-hero-2.jpg";
import desktopHomeImage3 from "./assets/images/desktop-image-hero-3.jpg";
import mobileHomeImage1 from "./assets/images/mobile-image-hero-1.jpg";
import mobileHomeImage2 from "./assets/images/mobile-image-hero-2.jpg";
import mobileHomeImage3 from "./assets/images/mobile-image-hero-3.jpg";

import './App.scss';

const App = () => {
  const banners = [
    {
      id: 'bannerImage1',
      imageUrl: desktopHomeImage1,
      imageUrlMobile: mobileHomeImage1,
      imageAlt: "Image 1",
      title: "Discover innovative ways to decorate",
      text: "We provide unmatched quality, comfort, and style for property owners across the country. Our experts combine form and function in bringing your vision to life. Create a room in your own style with out collection and make your property a reflection of you and what you love.",
      btnLink: "#",
      btnText: "Shop Now"
    },
    {
      id: 'bannerImage2',
      imageUrl: desktopHomeImage2,
      imageUrlMobile: mobileHomeImage2,
      imageAlt: "Image 1",
      title: "Shop now ",
      text: "We are available all across the globe With stores all over the world, it's easy for you to find furniture for your home or place of business. Locally, we’re in most major cities throughout the country. Find the branch nearest you using our store locator.",
      btnLink: "#",
      btnText: "Shop Now"
    },
    {
      id: 'bannerImage3',
      imageUrl: desktopHomeImage3,
      imageUrlMobile: mobileHomeImage3,
      imageAlt: "Image 1",
      title: "Any questions?",
      text: "Don't hesitate to contact us today. Shop now Manufactured with the best materials Our modern furniture store provide a high level of quality. Our company has invested in advanced technology to ensure that every product is made as perfect and as consistent as possible. With three decades of experience in this industry, we understand what customers want for their home and office.",
      btnLink: "#",
      btnText: "Shop Now"
    }
  ];

  return (
    <Fragment>
      <header><Nav/></header>
      <main>
        <Carousel banners= {banners}/>
        <AboutBanner/>
      </main>
    </Fragment>
  );
}

export default App;
