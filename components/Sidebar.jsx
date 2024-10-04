"use client"
import React from 'react';
import { Sidebar as Side, Menu, MenuItem, SubMenu } from 'react-pro-sidebar';
import { MdOutlineLocalOffer } from "react-icons/md";

import { FaTag, FaFire, FaFileAlt, FaHistory, FaShoppingCart, FaFish, FaDrumstickBite, FaUtensils, FaBaby, FaBeer, FaHome, FaHeart, FaDog, FaIceCream, FaBriefcase, FaPuzzlePiece } from 'react-icons/fa'; // FontAwesome icons
import { FaBasketShopping } from "react-icons/fa6";







const categories = [
  {
    name: "Offers",
    icon: <FaTag className='text-acent' />,
    subCategories: []
  },
  {
    name: "Hot Sales",
    icon: <FaFire className='text-acent' />,
    subCategories: []
  },
  {
    name: "eBasket Special",
    icon: <FaBasketShopping className='text-acent' />,
    subCategories: []
  },
  {
    name: "My Products",
    icon: <FaFileAlt className='text-acent' />,
    subCategories: []
  },
  {
    name: "Order History",
    icon: <FaHistory className='text-acent' />,
    subCategories: []
  },
  {
    name: "Grocerys",
    icon: <FaShoppingCart className='text-acent' />,
    subCategories: [
      "Rice",
      "Oil"
    ]
  },
  {
    name: "Fish",
    icon: <FaFish className='text-acent' />,
    subCategories: [
      "Fresh Fish",
      "Frozen Fish"
    ]
  },
  {
    name: "Meat",
    icon: <FaDrumstickBite className='text-acent' />,
    subCategories: [
      "Chicken",
      "Beef"
    ]
  },
  {
    name: "Food",
    icon: <FaUtensils className='text-acent' />,
    subCategories: [
      "Snacks",
      "Grains"
    ]
  },
  {
    name: "Baby Care",
    icon: <FaBaby className='text-acent' />,
    subCategories: [
      "Diapers",
      "Baby Food"
    ]
  },
  {
    name: "Beverages",
    icon: <FaBeer className='text-acent' />,
    subCategories: [
      "Juice",
      "Soft Drinks"
    ]
  },
  {
    name: "Household & Cleaning",
    icon: <FaHome className='text-acent' />,
    subCategories: [
      "Detergents",
      "Cleaning Tools"
    ]
  },
  {
    name: "Beauty & Health",
    icon: <FaHeart className='text-acent' />,
    subCategories: [
      "Skincare",
      "Vitamins"
    ]
  },
  {
    name: "Pet Care",
    icon: <FaDog className='text-acent' />,
    subCategories: [
      "Pet Food",
      "Pet Toys"
    ]
  },
  {
    name: "Frozen Foods",
    icon: <FaIceCream className='text-acent' />,
    subCategories: [
      "Frozen Vegetables",
      "Frozen Meat"
    ]
  },
  {
    name: "Office Products",
    icon: <FaBriefcase className='text-acent' />,
    subCategories: [
      "Stationery",
      "Printers"
    ]
  },
  {
    name: "Toys & Games",
    icon: <FaPuzzlePiece className='text-acent' />,
    subCategories: [
      "Puzzles",
      "Action Figures"
    ]
  }
];


const Sidebar = () => {
  return (
    <Side>
      <Menu>
        {
          categories.filter((category) => category.subCategories.length < 1).map((category, i) => <MenuItem key={i} icon={category.icon}> {category.name} </MenuItem>)
        }
        {
          categories.filter((category) => category.subCategories.length > 0).map((category, i) => <SubMenu label={category.name} key={i} icon={category.icon}> {category.subCategories.map((sub, i) => <MenuItem key={i}>{sub}</MenuItem>)} </SubMenu>)

        }
      </Menu>
    </Side>
  );
};

export default Sidebar;