import React from 'react'
import Link from 'next/link';
import "../globals.css";

const LandingPageOptions = () => {
    return (
        <div className='min-h-80 -z-40'>
            <img
                src="/assets/bg landing.png"
                alt="bg image"
                layout="fill" // Makes the image span its container
                objectFit="cover"
            />
        </div>
    )
}

export default LandingPageOptions