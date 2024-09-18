import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full bottom-0'>
            <div className="relative w-full h-[60vh]"> 
                <Image
                    src="/assets/32.png"
                    alt="Footer Mandala"
                    layout="fill" // Makes the image responsive
                    objectFit="cover" // Ensures the image covers the entire div
                />
            </div>
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black opacity-10"></div>
        </div>
    )
}

export default Footer
