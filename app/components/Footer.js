import React from 'react'
import Image from 'next/image'

const Footer = () => {
    return (
        <div className='w-full bottom-0'>
            <div className="relative w-full h-[70vh]"> 
                <Image
                    src="/assets/32.png"
                    alt="Footer Mandala"
                    layout="fill" // Makes the image responsive
                    objectFit="cover" // Ensures the image covers the entire div
                />
            </div>
        </div>
    )
}

export default Footer
