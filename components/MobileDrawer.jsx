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

const MobileDrawer = ({ openMobileDrawer, setOpenMobileDrawer }) => {


    const handleClose = () => setOpenMobileDrawer(false);
    return (
        <>
            {/* <div className="flex min-h-[50vh] items-center justify-center">
                <Button onClick={() => setIsOpen(true)}>Show navigation</Button>
            </div> */}
            <Drawer backdrop={true} open={openMobileDrawer} onClose={handleClose}>
                <Drawer.Header title="MENU" titleIcon={() => <></>} />
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