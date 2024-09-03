'use client';

import React, {useEffect,useState} from 'react'
import Image from "next/image";
import Link from "next/link";

const Header = () => {
  return (
    <div className='bg-white shadow-lg w-full top-0 z-10'>
        <div className='flex flex-row justify-start text-black pt-5 pb-5 text-xl'>
            Bhaktibaba
        </div>
    </div>
  )
}

export default Header