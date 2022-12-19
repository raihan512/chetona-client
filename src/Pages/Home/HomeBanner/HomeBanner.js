import React, { useRef } from 'react';
import Slider from 'react-slick';
import { } from './HomeBanner.css'
import { FaChevronRight, FaChevronLeft } from "react-icons/fa";
import banner from '../../../assets/images/banner.jpg'
const HomeBanner = () => {
    const settings = {
        infinite: true,
        dots: true,
        arrows: false,
        centerMode: true,
        slidesToShow: 1,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
        autoplaySpeed: 2000,
        centerPadding: '0'
    };
    const homeSlider = useRef(null);
    return (
        <section className='relative'>
            <Slider ref={homeSlider} {...settings} className='hero-slider'>
                <img src={banner} className="w-full" alt="" />
                <img src={banner} className="w-full" alt="" />
                <img src={banner} className="w-full" alt="" />
            </Slider>
            <div className='absolute top-1/2 left-0 mx-auto px-5 w-full flex justify-between'>
                <button onClick={() => homeSlider.current.slickPrev()}><FaChevronLeft className='text-2xl text-white' /></button>
                <button onClick={() => homeSlider.current.slickNext()}><FaChevronRight className='text-2xl text-white' /></button>
            </div>
        </section>
    );
};

export default HomeBanner;