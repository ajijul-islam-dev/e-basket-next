"use client";
import React from 'react';

import { Button, Drawer, TextInput } from "flowbite-react";
import { useState } from "react";
import {
    HiChartPie,
    HiClipboard,
    HiCollection,
    HiInformationCircle,
    HiLogin,
    HiPencil,
    HiSearch,
    HiShoppingBag,
    HiUsers,
} from "react-icons/hi";
import Sidebar from './Sidebar';
import logo from '/assets/images/logo/logo.webp'
import Image from 'next/image';
import Link from 'next/link';

const MobileDrawer = ({ openMobileDrawer, setOpenMobileDrawer }) => {


    const handleClose = () => setOpenMobileDrawer(false);
    return (
        <>
            <Drawer backdrop={true} open={openMobileDrawer} onClose={handleClose}>
                <Drawer.Header title={<Link href={"/"}><Image height={100} width={100} alt='logo' src={logo} /></Link>} titleIcon={() => <></>} />
                <Drawer.Items>
                    <Sidebar
                        aria-label="Sidebar with multi-level dropdown example"
                        className="[&>div]:bg-transparent [&>div]:p-0"
                    >
                        <div className="flex h-full flex-col justify-between py-2">
                            <div>
                                <form className="pb-3 md:hidden">
                                    <TextInput icon={HiSearch} type="search" placeholder="Search" required size={32} />
                                </form>
                                <Sidebar/>
                            </div>
                        </div>
                    </Sidebar>
                </Drawer.Items>
            </Drawer>
        </>
    );
};

export default MobileDrawer;