'use client';

import React from 'react'
// components
import Header from './components/Header';
import CarouselCustom from './components/CarouselCustom'
import Footer from './components/Footer';
import LandingPageOptions from './components/LandingPageOptions';
import MandalaStrip from './components/MandalaStrip';


import './globals.css'

const page = () => {
  return (
    <div div className='flex flex-col min-h-screen'>
      <Header />
      {/* <CarouselCustom /> */}
      <MandalaStrip />
      {/* <LandingPageOptions/> */}
      <Footer />
    </div>
  )
}

export default page