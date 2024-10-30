'use client';
import 'bootstrap/dist/css/bootstrap.min.css'; // for react bootstrap
import './globals.css'
import React from 'react'
// components
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPageOptions from './components/LandingPageOptions';
import MandalaStrip from './components/MandalaStrip';
import CarouselSlider from './components/CarouselSlider';



const page = () => {
  return (
    <div div className='flex flex-col'>
      <Header />
      <CarouselSlider/>
      <MandalaStrip />
      <LandingPageOptions/>
      <Footer />
    </div>
  )
}

export default page