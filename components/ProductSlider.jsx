"use client"
import Link from 'next/link';
import React from 'react';
import { IoBagHandleOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../assets/images/banner/banner1.png";
import banner2 from "../assets/images/banner/banner2.png";
import Image from 'next/image';
import ProductCard from './ProductCard';


const ProductSlider = () => {
    var settings = {
        dots: false,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1,
        initialSlide: 0,
        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 1,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 2,
                    slidesToScroll: 2
                }
            }
        ]

    };
    return (
        <div>
            <div className="flex items-center justify-between border-b pb-3 mx-3">
                <div className="flex items-center gap-2">
                    <IoBagHandleOutline className='text-2xl' />
                    <h2 className='text-2xl font-semibold'>Offers</h2>
                </div>
                <Link className='text-acent' href={"/"}>View All</Link>
            </div>
            <div className="slider-container">
                <Slider {...settings} className='my-4 overflow-hidden'>
                    <div>
                        <ProductCard/>
                    </div>
                    <div>
                        <ProductCard/>
                    </div>
                    <div>
                        <ProductCard/>
                    </div>
                  
                </Slider>
            </div>
        </div>
    );
};

export default ProductSlider;