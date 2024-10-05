"use client"
import Link from 'next/link';
import React, { useRef } from 'react';
import { IoBagHandleOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import banner1 from "../assets/images/banner/banner1.png";
import banner2 from "../assets/images/banner/banner2.png";
import Image from 'next/image';
import ProductCard from './ProductCard';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";


const ProductSlider = ({ title, icon, products }) => {
    let sliderRef = useRef(null);
    const next = () => {
        sliderRef.slickNext();
    };
    const previous = () => {
        sliderRef.slickPrev();
    };
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
                    <div className="text-2xl">{icon || <IoBagHandleOutline />}</div>
                    <h2 className='text-2xl font-semibold'>{title || "Offers"}</h2>
                </div>
                <Link className='text-acent' href={"/"}>View All</Link>
            </div>
            <div className="slider-container relative">
                <Slider ref={slider => {
                    sliderRef = slider;
                }} {...settings} className='my-4 overflow-hidden'>
                    <div>
                        <ProductCard />
                    </div>
                    <div>
                        <ProductCard />
                    </div>
                    <div>
                        <ProductCard />
                    </div>
                    <div>
                        <ProductCard />
                    </div>
                    <div>
                        <ProductCard />
                    </div>
                    <div>
                        <ProductCard />
                    </div>
                    <div>
                        <ProductCard />
                    </div>
                    <div>
                        <ProductCard />
                    </div>

                </Slider>
                <div style={{ textAlign: "center" }}>
                    <button className="absolute top-0 bottom-0 my-auto  left-5 button text-3xl bg-white shadow text-hover-acent flex items-center justify-center w-10 h-10 rounded-full" onClick={previous}>
                        <GrFormPrevious />
                    </button>
                    <button className="absolute top-0 bottom-0 my-auto right-5 button text-3xl bg-white shadow text-hover-acent flex items-center justify-center w-10 h-10 rounded-full" onClick={next}>
                        <MdOutlineNavigateNext />
                    </button>
                </div>
            </div>
        </div>
    );
};

export default ProductSlider;

