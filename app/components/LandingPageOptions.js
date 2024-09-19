import React from 'react'
import Image from 'next/image';
import Link from 'next/link';
import "../globals.css";

const LandingPageOptions = () => {
    return (
        <div className='min-h-screen overflow-hidden'>
            <Image
                src="/assets/bg landing.png"
                alt="bg image"
                layout="fill" // Makes the image span its container
                objectFit="cover"
            />
        </div>
    )
}

export default LandingPageOptions