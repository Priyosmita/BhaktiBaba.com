'use client';
import 'bootstrap/dist/css/bootstrap.min.css'; // for react bootstrap
import './globals.css';
import React from 'react';
// components
import Header from './components/Header';
import Footer from './components/Footer';
import LandingPageOptions from './components/LandingPageOptions';
import MandalaStrip from './components/MandalaStrip';
import CarouselSlider from './components/CarouselSlider';

const page = () => {
  return (
    <div className='flex flex-col'>
      <Header />

      {/* Sticky wrapper for Carousel */}
      <div style={{ position: 'sticky', top: '0', zIndex: '-1' }}>
        <CarouselSlider />
      </div>

      {/* Following components */}
      <MandalaStrip />
      <LandingPageOptions />
      <Footer />
    </div>
  );
};

export default page;