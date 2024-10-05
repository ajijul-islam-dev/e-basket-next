"use client"
import React, { useState } from 'react';

const AddCartBtn = () => {
    const [cartCount, setCartCount] = useState(0);
    return (
        <div className={`${cartCount >0 && "grid grid-cols-3 w-24 border border-acent"}`}>
            {cartCount > 0 && <> <button onClick={() => cartCount > 0 && setCartCount(cartCount - 1)} className='text-white px-3 py-1 bg-acent hover:bg-hover-acent'>-</button>
                <input onChange={(e) => setCartCount(parseInt(e.target.value))} className='outline-none border-none px-0 py-0.5 text-center' type="number" value={cartCount} /></>}
            <button onClick={() => setCartCount(cartCount + 1)} className='text-white px-3 py-1 bg-acent hover:bg-hover-acent '>+</button>
        </div>
    );
};

export default AddCartBtn;