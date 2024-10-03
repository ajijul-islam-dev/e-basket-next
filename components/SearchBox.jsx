import { TextInput } from 'flowbite-react';
import React from 'react';
import { IoIosSearch } from "react-icons/io";

const SearchBox = () => {
    return (
        <TextInput className='w-full' type="text" icon={IoIosSearch} placeholder="Search Product" />
    );
};

export default SearchBox;