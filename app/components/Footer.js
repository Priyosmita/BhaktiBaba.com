import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='relative w-full h-[52vh]'>
            {/* Image */}
            <Image
                src="/assets/32.png"
                alt="Footer Mandala"
                layout="fill" // Makes the image span its container
                objectFit="cover" // Ensures the image covers the entire div
            />
            {/* Black overlay */}
            <div className="absolute inset-0 bg-black" style={{ opacity: 0.15 }}></div>
        </div>
    )
}

export default Footer
