'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { LuUserCircle2 } from 'react-icons/lu';
import { HiMenu, HiX } from 'react-icons/hi'; // Import hamburger and close icons
import '../globals.css';

const Header = () => {
  const [isVisible, setIsVisible] = useState(true); // To control header visibility
  const [lastScrollPos, setLastScrollPos] = useState(0);
  const [isMenuOpen, setIsMenuOpen] = useState(false); // To control menu visibility

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
    <header
      className={`${
        isVisible ? 'top-0' : '-top-20'
      } fixed bg-transparent w-full z-10 transition-all duration-300`}
    >
      <div className='flex justify-between items-center pt-3 pb-1'>
        <Link
          className='flex flex-row cursor-pointer transform duration-150 hover:scale-105 ml-5'
          href='/'
        >
          <Image
            src='/assets/biglogo.png'
            alt='BhaktiBaba logo'
            width={240}
            height={70}
          />
        </Link>

        {/* Hamburger Icon */}
        <div className='block lg:hidden ml-5'>
          <button
            onClick={() => setIsMenuOpen(!isMenuOpen)}
            className='text-white text-3xl transform duration-150 hover:scale-105'
          >
            {isMenuOpen ? <HiX /> : <HiMenu />}
          </button>
        </div>

        {/* Menu Links for Desktop */}
        <div className='hidden lg:flex space-x-36'>
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
        </div>

        {/* User Account */}
        <Link
          href='/'
          className='ml-48 mr-5 flex items-center text-white text-4xl transform duration-150 hover:scale-105 hover:text-[#ff7f2a]'
        >
          <LuUserCircle2 />
        </Link>
      </div>

      {/* Mobile Menu */}
      <div
        className={`lg:hidden fixed top-0 right-0 h-full w-3/4 bg-black text-white transition-transform transform ${
          isMenuOpen ? 'translate-x-0' : 'translate-x-full'
        }`}
        style={{ transition: 'transform 0.3s ease-in-out' }}
      >
        <div className='flex flex-col items-center mt-20'>
          <Link
            href='/'
            className='py-4 text-2xl transform duration-150 hover:scale-105'
            onClick={() => setIsMenuOpen(false)}
          >
            Bookings
          </Link>
          <Link
            href='/'
            className='py-4 text-2xl transform duration-150 hover:scale-105'
            onClick={() => setIsMenuOpen(false)}
          >
            Dates
          </Link>
          <Link
            href='/'
            className='py-4 text-2xl transform duration-150 hover:scale-105'
            onClick={() => setIsMenuOpen(false)}
          >
            Shop
          </Link>
          <Link
            href='/'
            className='py-4 text-2xl transform duration-150 hover:scale-105'
            onClick={() => setIsMenuOpen(false)}
          >
            Goodies
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;