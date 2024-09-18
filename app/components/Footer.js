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
        <footer className='relative w-full h-[58vh]'>
            {/* Background image */}
            <Image
                src="/assets/32.png"
                alt="Footer Mandala"
                layout="fill" // Makes the image span its container
                objectFit="cover" // Ensures the image covers the entire div
                className="absolute inset-0"
                style={{ zIndex: 1 }} // Ensure it's behind the overlay and logo
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black" style={{ opacity: 0.5, zIndex: 2 }}></div>

            {/* Logo in footer */}
            <div className="absolute inset-0 flex justify-center items-center z-10">
                <div className='flex flex-col'>
                    <Link href="/" className='pl-3 flex justify-center'>
                        <Image
                            src="/assets/logo.png"
                            alt="logo"
                            width={250}
                            height={250}
                            className='transition duration-300 hover:scale-110 cursor-pointer'
                            onClick={scrollToTop}
                        />
                    </Link>
                    <Image
                        src="/assets/biglogo name.png"
                        alt="logo"
                        width={500}
                        height={500}
                        className='cursor-default'
                    />
                </div>
            </div>

            {/* Left options */}
            <div className='absolute flex flex-col gap-y-14 pl-36 pt-12'>
                <Link href="/" className='text-shadow text-white text-2xl z-10 transition duration-150 hover:scale-105 hover:text-[#ff7f2a]'>Privacy Policy</Link>
                <Link href="/" className='text-shadow text-white text-2xl z-10 transition duration-150 hover:scale-105 hover:text-[#ff7f2a]'>Terms & Conditions</Link>
                <Link href="/" className='text-shadow text-white text-2xl z-10 transition duration-150 hover:scale-105 hover:text-[#ff7f2a]'>About Us</Link>
                <div className='text-shadow text-white text-2xl z-10 cursor-default transition duration-150 hover:scale-105 hover:text-[#ff7f2a]'>Phone:</div>
                <div className='text-shadow text-white text-2xl z-10 cursor-default transition duration-150 hover:scale-105 hover:text-[#ff7f2a]'>Mail:</div>
            </div>

            {/* Right options */}
            <div className='absolute flex flex-col gap-y-16 pt-20 right-0 pr-36'>
                <Link href="/" className='text-shadow text-white text-2xl z-10 transition duration-150 hover:scale-105 hover:text-[#ff7f2a]'>Instagram</Link>
                <Link href="/" className='text-shadow text-white text-2xl z-10 transition duration-150 hover:scale-105 hover:text-[#ff7f2a]'>Facebook</Link>
                <Link href="/" className='text-shadow text-white text-2xl z-10 transition duration-150 hover:scale-105 hover:text-[#ff7f2a]'>X</Link>
                <Link href="/" className='text-shadow text-white text-2xl z-10 transition duration-150 hover:scale-105 hover:text-[#ff7f2a]'>LinkedIn</Link>
            </div>
        </footer>
    );
}

export default Footer;