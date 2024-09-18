'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuUserCircle2 } from 'react-icons/lu';
import '../globals.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // To control header visibility
  const [lastScrollPos, setLastScrollPos] = useState(0);

  useEffect(() => {
    const handleScroll = () => {
      const currentScrollPos = window.pageYOffset;

      // If we are scrolling up, show the header, else hide it
      if (currentScrollPos < lastScrollPos || currentScrollPos <= 0) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }

      setLastScrollPos(currentScrollPos);
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, [lastScrollPos]);

  return (
    <div
      className={`${isVisible ? 'top-0' : '-top-20'
        } fixed bg-transparent w-full z-10 transition-all duration-300`}
    >
      <div className='flex justify-between items-center pt-1 pb-1'>
        <Link
          className='flex flex-row cursor-pointer transform duration-150 hover:scale-105 pl-5'
          href='/'
        >
          <Image
            src='/assets/biglogo.png'
            alt='BhaktiBaba logo'
            width={240}
            height={70}
          />
        </Link>

        {/* options in header */}
        <div className='flex space-x-36'>
          <Link
            href='/'
            className='flex items-center text-[#ffffff] transform duration-150 hover:scale-105 hover:text-[#ff7f2a] font-semibold text-shadow text-xl'
          >
            Bookings
          </Link>
          <Link
            href='/'
            className='flex items-center text-[#ffffff] transform duration-150 hover:scale-105 hover:text-[#ff7f2a] font-semibold text-shadow text-xl'
          >
            Dates
          </Link>
          <Link
            href='/'
            className='flex items-center text-[#ffffff] transform duration-150 hover:scale-105 hover:text-[#ff7f2a] font-bold text-shadow text-xl'
          >
            Shop
          </Link>
          <Link
            href='/'
            className='flex items-center text-[#ffffff] transform duration-150 hover:scale-105 hover:text-[#ff7f2a] font-semibold text-shadow text-xl'
          >
            Goodies
          </Link>

          {/* user account */}
          <Link
            href='/'
            className='pl-72 pr-5 flex items-center text-white text-4xl transform duration-150 hover:scale-105 hover:text-[#ff7f2a]'
          >
            <LuUserCircle2 />
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Header;