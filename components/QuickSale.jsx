import Image from 'next/image';
import Link from 'next/link';
import React from 'react';
import flash from "../assets/images/quick-sale/flash.jpg";
import group from "../assets/images/quick-sale/group.jpg";
import history from "../assets/images/quick-sale/history.jpg";
import group2 from "../assets/images/quick-sale/group2.jpg";

const QuickSale = () => {
    return (
        <div className='grid grid-cols-2 md:grid-cols-3 gap-2 md:gap-4 md:grid-rows-1 my-5'>
            <div className="grid grid-rows-2 md:grid-rows-1 gap-3">
                <Link href={"/flash"} className=''>
                    <Image className='rounded-md h-full' src={flash} height={500} width={600} alt='' />
                </Link>
                <Link href={"/history"} className=' block md:hidden'>
                    <Image className='rounded- h-full' src={history} height={500} width={600} alt='' />
                </Link>
            </div>
            <Link href={"/group"} className='hidden md:block'>
                <Image className='rounded-md ' src={group} height={500} width={600} alt='' />
            </Link>
          <div className="md:hidden grid grid-rows-1">
          <Link href={"/group"} className='h-full'>
                <Image className='rounded-md h-full' src={group2} height={500} width={600} alt='' />
            </Link>
          </div>
            <Link href={"/history"} className='row-span-1 hidden md:block'>
                <Image className='rounded-md' src={history} height={500} width={600} alt='' />
            </Link>

        </div>
    );
};

export default QuickSale;