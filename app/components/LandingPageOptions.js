import React from 'react';
import Link from 'next/link';
import "../globals.css";
import MandalaStrip from '../components/MandalaStrip';

const LandingPageOptions = () => {
    return (
        <>
            <MandalaStrip />
            <div className='min-h-[48vh] bg-cover bg-center'>
                <img
                    src="/assets/bg landing.png"
                    alt="bg img"
                />
                <div className=''>
                    <div className='flex flex-row'>
                        <div>
                            <img
                            src="/assets/Mask group 1.png"
                            alt="first img"
                        />
                        </div>
                        <div>bhakti</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPageOptions;