"use client"
import Link from 'next/link';
import React, { useRef } from 'react';
import { IoBagHandleOutline } from "react-icons/io5";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";
import Image from 'next/image';
import ProductCard from './ProductCard';
import { MdOutlineNavigateNext } from "react-icons/md";
import { GrFormPrevious } from "react-icons/gr";
import { BiCategory } from "react-icons/bi";

import grocery from "../assets/images/categories/grocery.png";
import fish from "../assets/images/categories/fish.jpg";
import baby from "../assets/images/categories/baby.jpg";
import food from "../assets/images/categories/food.jpg";
import meat from "../assets/images/categories/meat.jpg";
import bevareg from "../assets/images/categories/bevareg.jpg";
import house from "../assets/images/categories/household.jpg";
import beauty from "../assets/images/categories/beauty.jpg";
import pet from "../assets/images/categories/pet.jpg";
import frozen from "../assets/images/categories/frozen.jpg";



const CategorySlider = () => {
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
        slidesToShow: 10,
        slidesToScroll: 3,
        initialSlide: 0,

        responsive: [
            {
                breakpoint: 1024,
                settings: {
                    slidesToShow: 7,
                    slidesToScroll: 3,
                    infinite: true,
                    dots: true
                }
            },
            {
                breakpoint: 600,
                settings: {
                    slidesToShow: 6,
                    slidesToScroll: 2,
                    initialSlide: 2
                }
            },
            {
                breakpoint: 480,
                settings: {
                    slidesToShow: 4,
                    slidesToScroll: 1
                }
            }
        ]

    };
    return (
        <div>
            <div className="flex items-center justify-between border-b pb-3 mx-3">
                <div className="flex items-center gap-2">
                    <BiCategory className='text-2xl' />
                    <h2 className='text-2xl font-semibold'>Category</h2>
                </div>
                <Link className='text-acent' href={"/"}>View All</Link>
            </div>
            <div className="slider-container relative">
                <Slider ref={slider => {
                    sliderRef = slider;
                }} {...settings} className='my-4 overflow-hidden'>
                    <Link href={"/"} className='flex items-center flex-col justify-center gap-4'>
                        <Image src={grocery} alt='grocery' height={70} width={70} />
                        <h2>Grocerys</h2>
                    </Link>
                    <Link href={"/"} className='flex items-center flex-col justify-center gap-4'>
                        <Image src={fish} alt='grocery' height={70} width={70} />
                        <h2>Fish</h2>
                    </Link>
                    <Link href={"/"} className='flex items-center flex-col justify-center gap-4'>
                        <Image src={meat} alt='grocery' height={70} width={70} />
                        <h2>Meat</h2>
                    </Link>
                    <Link href={"/"} className='flex items-center flex-col justify-center gap-4'>
                        <Image src={food} alt='grocery' height={70} width={70} />
                        <h2>Foods</h2>
                    </Link>
                    <Link href={"/"} className='flex items-center flex-col justify-center gap-4'>
                        <Image src={baby} alt='grocery' height={70} width={70} />
                        <h2>Baby</h2>
                    </Link>
                    <Link href={"/"} className='flex items-center flex-col justify-center gap-4'>
                        <Image src={house} alt='grocery' height={70} width={70} />
                        <h2>House Hold</h2>
                    </Link>
                    <Link href={"/"} className='flex items-center flex-col justify-center gap-4'>
                        <Image src={beauty} alt='grocery' height={70} width={70} />
                        <h2>Beauty</h2>
                    </Link>
                    <Link href={"/"} className='flex items-center flex-col justify-center gap-4'>
                        <Image src={pet} alt='grocery' height={70} width={70} />
                        <h2>Pet Care</h2>
                    </Link>
                    <Link href={"/"} className='flex items-center flex-col justify-center gap-4'>
                        <Image src={frozen} alt='grocery' height={70} width={70} />
                        <h2>Frozen</h2>
                    </Link>
                    <Link href={"/"} className='flex items-center flex-col justify-center gap-4'>
                        <Image src={grocery} alt='grocery' height={70} width={70} />
                        <h2>Grocerys</h2>
                    </Link>

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

export default CategorySlider;

