import React from 'react';
import Link from 'next/link';
import "../globals.css";

const LandingPageOptions = () => {
    return (
        <>
            <div className='min-h-[48vh] bg-cover bg-center'>
                {/* className='min-h-[215vh] bg-cover bg-center' // Adjusted height using Tailwind-style classes
                style={{
                    backgroundImage: 'url("/assets/bg landing.png")', // Correct path for background image
                    backgroundSize: 'cover', // Makes the image cover the container
                    backgroundPosition: 'center', // Centers the image within the div
                    backgroundRepeat: 'no-repeat', // Prevents repeating the image
                }}
            >
                You can add other elements/content here */}

                <img
                    src="/assets/bg landing.png"
                    alt="bg img"
                />

            </div>
        </>
    );
}

export default LandingPageOptions;