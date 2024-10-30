import React from 'react';
import Link from 'next/link';
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
                    className="w-full h-full object-contain"
                />
                
                <div className="absolute inset-0 flex items-center justify-center space-x-4">
                    <div className="flex flex-row items-center space-x-2">
                        <div>
                            <img
                                src="/assets/Mask group 1.png"
                                alt="first img"
                                className="w-[100px] h-[100px] object-cover"
                            />
                        </div>
                        <div>bhakti</div>
                    </div>
                    {/* Add more options here */}
                    <div className="flex flex-row items-center space-x-2">
                        <div>
                            <img
                                src="/assets/Mask group 2.png"
                                alt="second img"
                                className="w-[100px] h-[100px] object-cover"
                            />
                        </div>
                        <div>option 2</div>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <div>
                            <img
                                src="/assets/Mask group 3.png"
                                alt="third img"
                                className="w-[100px] h-[100px] object-cover"
                            />
                        </div>
                        <div>option 3</div>
                    </div>
                    <div className="flex flex-row items-center space-x-2">
                        <div>
                            <img
                                src="/assets/Mask group 4.png"
                                alt="fourth img"
                                className="w-[100px] h-[100px] object-cover"
                            />
                        </div>
                        <div>option 4</div>
                    </div>
                </div>
            </div>
        </>
    );
}

export default LandingPageOptions;
