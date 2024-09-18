'use client';

import React from 'react'
// components
import Header from './components/Header';
import CarouselCustom from './components/CarouselCustom'
import Footer from './components/Footer';

import './globals.css'

const page = () => {
  return (
    <div div className='flex flex-col min-h-screen'>
      <Header />
      <Footer />
    </div>
  )
}

export default page