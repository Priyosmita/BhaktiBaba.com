'use client';

import React, { useEffect, useState } from 'react'
import Image from "next/image";
import Link from "next/link";
import "../globals.css";

const Header = () => {
  return (
    <div className='bg-white shadow-lg w-full top-0 z-10'>
      <div className='flex flex-row items-center justify-between pt-5 pb-5'>
        
        <Link href='/' legacyBehavior>
          <a className='flex items-center text-black text-xl pl-5'>
            BhaktibabaLogo
          </a>
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

        </div>
      </div>
    </div>
  )
}

export default Header