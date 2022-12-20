import React, { useRef } from 'react';
import { } from './HomeCategorySlider.css'
import Slider from 'react-slick';
import { FaChevronRight } from "react-icons/fa";


const HomeCategorySlider = () => {
    const catrgorySlider = useRef(null)
    const settings = {
        infinite: true,
        dots: false,
        arrows: false,
        centerMode: false,
        slidesToShow: 7,
        slidesToScroll: 1,
        lazyLoad: true,
        autoplay: false,
        autoplaySpeed: 2000,
        centerPadding: '0',
        responsive: [
            {
                breakpoint: 1100,
                settings: {
                    slidesToShow: 6,
                }
            },
            {
                breakpoint: 950,
                settings: {
                    slidesToShow: 5,
                }
            },
            {
                breakpoint: 768,
                settings: {
                    slidesToShow: 4
                }
            },
            {
                breakpoint: 640,
                settings: {
                    slidesToShow: 3
                }
            },
            {
                breakpoint: 560,
                settings: {
                    slidesToShow: 2
                }
            },
            {
                breakpoint: 430,
                settings: {
                    slidesToShow: 1
                }
            },
        ]
    };
    return (
        <section className='pt-8 pb-6 bg-[#F5F8FE]'>
            <div className="max-width">
                <div className='mx-1.5 md:mx-2.5'>
                    {/* Slider Start*/}
                    <div className='flex items-center justify-between w-10/12 mx-auto sm:w-full'>
                        <div className='mx-auto w-11/12'>
                            <Slider ref={catrgorySlider} {...settings} className='home-category-slider'>
                                <button className='text-lg md:text-xl lg:text-2xl text-[#000000] px-5 md:px-10 py-2 bg-white rounded-md shadow-md max-w-[131px] my-2'>সিরাত</button>
                                <button className='text-lg md:text-xl lg:text-2xl text-[#000000] px-5 md:px-10 py-2 bg-white rounded-md shadow-md max-w-[131px] my-2'>জীবনী</button>
                                <button className='text-lg md:text-xl lg:text-2xl text-[#000000] px-5 md:px-10 py-2 bg-white rounded-md shadow-md max-w-[131px] my-2'>ধর্মতত্ত্ব</button>
                                <button className='text-lg md:text-xl lg:text-2xl text-[#000000] px-5 md:px-10 py-2 bg-white rounded-md shadow-md max-w-[131px] my-2'>প্রবন্ধ</button>
                                <button className='text-lg md:text-xl lg:text-2xl text-[#000000] px-5 md:px-10 py-2 bg-white rounded-md shadow-md max-w-[131px] my-2'>সিরাত</button>
                                <button className='text-lg md:text-xl lg:text-2xl text-[#000000] px-5 md:px-10 py-2 bg-white rounded-md shadow-md max-w-[131px] my-2'>জীবনী</button>
                                <button className='text-lg md:text-xl lg:text-2xl text-[#000000] px-5 md:px-10 py-2 bg-white rounded-md shadow-md max-w-[131px] my-2'>ধর্মতত্ত্ব</button>
                                <button className='text-lg md:text-xl lg:text-2xl text-[#000000] px-5 md:px-10 py-2 bg-white rounded-md shadow-md max-w-[131px] my-2'>প্রবন্ধ</button>
                            </Slider>
                        </div>
                        <div className='w-1/12 flex justify-end'>
                            <button
                                onClick={() => catrgorySlider.current.slickNext()}
                                className='text-lg md:text-xl lg:text-2xl text-[#717C7F] my-2 px-3 py-3 bg-white rounded-md shadow-md hover:text-[#40A4DC]'><FaChevronRight /></button>
                        </div>
                    </div>
                    {/* Slider End*/}
                </div>
            </div>
        </section>
    );
};

export default HomeCategorySlider;