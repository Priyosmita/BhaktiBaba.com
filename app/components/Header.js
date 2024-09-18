'use client';

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import { LuUserCircle2 } from "react-icons/lu";
import "../globals.css";

const Header = () => {
  return (
    <div className='bg-transparent w-full top-0 z-10'>
      <div className='flex justify-between items-center pt-1 pb-1'>
        <Link className='flex flex-row cursor-pointer transform duration-150 hover:scale-105 pl-5' href="/">
          <Image
            src="/assets/biglogo.png"
            alt="BhaktiBaba logo"
            width={240}
            height={70}
          />
        </Link>

        {/* options in header */}
        <div className='flex space-x-20'>
          <Link href='/' className='flex items-center text-[#ffffff] transform duration-150 hover:scale-105 hover:text-[#ff7f2a] font-semiboldbold text-xl pr-10'>
            Bookings
          </Link>
          <Link href='/' className='flex items-center text-[#ffffff] transform duration-150 hover:scale-105 hover:text-[#ff7f2a] font-semiboldbold text-xl pr-10'>
            Dates
          </Link>
          <Link href='/' className='flex items-center text-[#ffffff] transform duration-150 hover:scale-105 hover:text-[#ff7f2a] font-semiboldbold text-xl pr-10'>
            Shop
          </Link>
          <Link href='/' className='flex items-center text-[#ffffff] transform duration-150 hover:scale-105 hover:text-[#ff7f2a] font-semiboldbold text-xl pr-10'>
            Goodies
          </Link>

          {/* user account */}
          <Link href='/' className='pl-72 pr-5 flex items-center text-white text-4xl transform duration-150 hover:scale-105 hover:text-[#ff7f2a]'>
            <LuUserCircle2 />
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Header