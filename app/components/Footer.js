import React from 'react';
import Image from 'next/image';
import Link from 'next/link';

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
        <footer className='relative w-full h-[52vh]'>
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
            {/* Logo */}
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
        </footer>
    );
}

export default Footer;