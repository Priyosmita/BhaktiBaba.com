"use client";
import React from 'react';
import "../globals.css";
import MandalaStrip from '../components/MandalaStrip';

const LandingPageOptions = () => {
    return (
        <>
            <MandalaStrip />
            <div className="relative min-h-[48vh] bg-cover bg-center overflow-hidden">
                <img
                    src="/assets/bg landing.png"
                    alt="bg img"
                    layout="fill" // Makes the background image fill the container
                    objectFit="contain" // Ensures the whole image is visible
                    priority // Ensures the background image loads immediately
                />

                <div className="absolute inset-0 flex flex-col items-center justify-center space-y-44">

                    <div className='flex flex-row space-x-97'>
                        <span className='transform transition duration-300 hover:scale-110'>
                            <img src="/assets/o 1.png/" alt="Online Booking" className="h-80 w-80 mx-auto rounded-full hover:shadow-2xl transition duration-500" />
                        </span>
                        <span>
                        <h3 className="text-3xl text-white whitespace-normal break-words w-56 px-4 cursor-default">Online Booking</h3>
                        </span>
                    </div>

                    <div className='flex flex-row space-x-97'>
                    <span>
                        <h3 className="text-3xl text-white whitespace-normal break-words w-56 px-4 cursor-default">Auspicious Dates</h3>
                        </span>
                        <span className='transform transition duration-300 hover:scale-110'>
                            <img src="/assets/o 2.jpg/" alt="Auspicious dates" className="h-80 w-80 mx-auto  hover:shadow-2xl rounded-full transition duration-500" />
                        </span>
                    </div>

                    <div className='flex flex-row space-x-97'>
                        <span className='transform transition duration-300 hover:scale-110'>
                            <img src="/assets/o 3.png/" alt="Blogs" className="h-80 w-80 mx-auto rounded-full hover:shadow-2xl transition duration-500" />
                        </span>
                        <span>
                        <h3 className="text-3xl text-white whitespace-normal break-words w-56 px-4 cursor-default">Blogs</h3>
                        </span>
                    </div>

                    <div className='flex flex-row space-x-97'>
                    <span>
                        <h3 className="text-3xl text-white whitespace-normal break-words w-56 px-4 cursor-default">Bhajans</h3>
                        </span>
                        <span className='transform transition duration-300 hover:scale-110'>
                            <img src="/assets/o 4.png/" alt="Bhajans" className="h-80 w-80 mx-auto rounded-full hover:shadow-2xl transition duration-500" />
                        </span>
                    </div>
                </div>
            </div>
        </>
    );
}


export default LandingPageOptions;