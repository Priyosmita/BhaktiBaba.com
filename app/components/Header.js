'use client';

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const Header = () => {
  return (
    <div className='bg-white shadow-lg w-full top-0 z-10'>
      <div className='flex flex-row items-center justify-between pt-3 pb-3'>
      
        <Link className='relative flex flex-row cursor-pointer transform duration-300 hover:scale-110 pl-5' href="/">
          <div className='relative'>
          <Image
            src="/assets/logo.png"
            alt="BhaktiBaba logo"
            width={60}
            height={70}
          />
          <p className='absolute inset-0 whitespace-nowrap text-[#f8604f] transform duration-200 hover:text-[#fcaa05] font-bold text-xl pt-6 z-20 top-1.5 left-3.5'>Bhaktibaba</p>
          </div>
        </Link>

        {/* options in header */}
        <div className='flex flex-row'>
          <Link href='/' legacyBehavior>
            <a className='flex items-center text-black text-xl pr-10'>
              Puja Services
            </a>
          </Link>
          <Link href='/' legacyBehavior>
            <a className='flex items-center text-black text-xl pr-10'>
              Shop
            </a>
          </Link>
          <Link href='/' legacyBehavior>
            <a className='flex items-center text-black text-xl pr-10'>
              Goodies
            </a>
          </Link>

          {/* user account */}
          <Link href='/' legacyBehavior>
            <a className='flex items-center text-black text-xl pr-10'>
              Acc
            </a>
          </Link>

        </div>
      </div>
    </div>
  )
}

export default Header