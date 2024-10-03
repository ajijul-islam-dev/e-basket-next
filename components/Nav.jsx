"use client"
import { Button, Navbar } from 'flowbite-react';
import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import logo from '/assets/images/logo/logo.webp'
import { CgMenuLeft } from "react-icons/cg";
import LoginBtn from './LoginBtn';
import { BsMinecartLoaded } from "react-icons/bs";
import SearchBox from './SearchBox';


const navItems = [
    {
        label: "Products",
        path: "/products"
    },
    {
        label: "FAQ",
        path: "/faq"
    },
    {
        label: "Contacts",
        path: "/contacts"
    }
]

const Nav = () => {
    return (
        <Navbar rounded border className='bg-acent md:bg-white'>
            <div className="flex items-center gap-3">
                <span className='text-2xl md:hidden text-white'><CgMenuLeft /></span>
                <div className="flex md:hidden">
                    <LoginBtn />
                </div>

                <Link className='md:flex hidden' href="/">
                    <Image height={120} width={160} alt='logo' src={logo} />
                </Link>
            </div>
            <div className=" hidden items-center  w-[60%] md:grid grid-cols-5 gap-8">
                <div className=" md:col-span-3 lg:col-span-4"><SearchBox /></div>
                <div className="flex items-center gap-4">
                    {
                        navItems.map((item, i) => <Link className='font-semibold hover:text-hover-acent' key={i} href={item.path}>{item.label}</Link>)
                    }
                </div>
            </div>
            <div className=" hidden md:flex md:order-2">
                <LoginBtn />
            </div>
            <div className="flex md:hidden text-2xl text-white"><BsMinecartLoaded /></div>
            <div className="md:hidden w-full mt-5"><SearchBox /></div>
        </Navbar>
    );
};

export default Nav;