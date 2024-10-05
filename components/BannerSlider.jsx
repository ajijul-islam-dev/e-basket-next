"use client"
import React from 'react';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../assets/images/banner/banner1.png";
import banner2 from "../assets/images/banner/banner2.png";

import Image from 'next/image';
const BannerSlider = () => {
    var settings = {
        dots: true,
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
    };
    return (
    <div className="overflow-hidden pb-8">
            <Slider {...settings} className='' accessibility={true}>
            <div>
                <Image className='w-full h-48 md:h-72' src={banner1} width={700} height={500} alt='Banner image' />
            </div>
            <div className="">
                <Image className='w-full h-48 md:h-72' src={banner2} width={700} height={500} alt='Banner image' />
            </div>
        </Slider>
    </div>
        
    );
};

export default BannerSlider;