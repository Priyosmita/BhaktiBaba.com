import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import "../globals.css";

const Footer = () => {

  // Function to scroll to the top
  const scrollToTop = () => {
    console.log('Logo clicked, scrolling to top');
    window.scrollTo({
      top: 0,
      behavior: 'smooth', // This will animate the scroll
    });
  };

  return (
    <footer className='relative w-full h-[58vh] bg-cover bg-center bg-no-repeat' style={{ backgroundImage: 'url(/assets/32.png)' }}>
      {/* Black overlay */}
      <div className="absolute inset-0 bg-black" style={{ opacity: 0.6, zIndex: 2 }}></div>

      {/* icon for mobile view */}
      <Link href="/" className='pl-3 pt-5 flex justify-center items-center'>
        <img
          src="/assets/biglogo.png"
          alt="logo"
          className='w-97 cursor-default biglogo-img logohidden'
        />
      </Link>

      {/* Logo in footer */}
      <div className="absolute inset-0 flex justify-center items-center z-10 logomonitor-img">
        <div className='flex flex-col items-center'>
          <Link href="/" className='pl-3 pt-5 flex justify-center items-center'>
            <img
              src="/assets/logo.png"
              alt="logo"
              className='w-64 transition duration-300 hover:scale-110 cursor-pointer'
              onClick={scrollToTop}
            />
          </Link>
          <img
            src="/assets/biglogo name.png"
            alt="logo"
            className='w-97 cursor-default'
          />
        </div>
      </div>

      {/* Left options */}
      <div className='absolute flex flex-col gap-y-14 pl-36 pt-16 text-2xl options-left'>
        <Link href="/" className='text-shadow text-white z-10 transition duration-150 hover:scale-110 hover:text-[#ff7f2a] w-40'>Privacy Policy</Link>
        <Link href="/" className='text-shadow text-white z-10 transition duration-150 hover:scale-110 hover:text-[#ff7f2a]'>Terms & Conditions</Link>
        <Link href="/" className='text-shadow text-white z-10 transition duration-150 hover:scale-110 hover:text-[#ff7f2a] w-28'>About Us</Link>
        <div className='text-shadow text-white z-10 cursor-default transition duration-150 hover:scale-110 hover:text-[#ff7f2a] w-20 fontforphonemail'>Phone:</div>
        <div className='text-shadow text-white z-10 cursor-default transition duration-150 hover:scale-110 hover:text-[#ff7f2a] w-16 fontforphonemail'>Mail:</div>
      </div>

      {/* Right options */}
      <div className='absolute flex flex-col gap-y-16 pt-24 right-0 z-10 pr-36 text-2xl options-right'>
        <Link href="/" className='text-shadow text-white transition duration-150 hover:scale-110 hover:text-[#ff7f2a]'>Instagram</Link>
        <Link href="/" className='text-shadow text-white transition duration-150 hover:scale-110 hover:text-[#ff7f2a]'>Facebook</Link>
        <Link href="/" className='text-shadow text-white transition duration-150 hover:scale-125 hover:text-[#ff7f2a] w-4'>X</Link>
        <Link href="/" className='text-shadow text-white transition duration-150 hover:scale-110 hover:text-[#ff7f2a] w-6'>LinkedIn</Link>
      </div>

      {/* Media Queries */}
      <style jsx>{`
                .logohidden {
                    display:none;
                }
                @media (max-width: 768px) {
                    footer {
                        height: auto;
                    }
                    .options-left {
                        position: relative;
                        padding-left: 0;
                        padding-top: 15px;  
                        display: flex;
                        align-items: center; 
                        justify-content: center; 
                        flex-direction: column;                     
                        gap: 25px;
                        padding-bottom: 25px;
                        font-size: 1rem;
                    }
                    .fontforphonemail {
                        font-size: 1rem;
                    }
                    .options-right {
                        display: none;
                    }
                    .logomonitor-img {
                        display:none;
                    }
                    .biglogo-img {
                        display: flex; /* Show the biglogo on mobile */
                        justify-content: center;
                        padding-right: 10px;
                        width: 300px;
                        height: auto;
                        z-index: 10;
                    }
                    .text-shadow {
                        font-size: 1.5rem;
                    }
                }
            `}</style>
    </footer>
  );
}

export default Footer;