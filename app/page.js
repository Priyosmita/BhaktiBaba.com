'use client';

import React from 'react'
// components
import Header from './components/Header';
import CustomCarousel from './components/CustomCarousel';

import './globals.css'

const page = () => {
  return (
    <>
    <Header/>
    <CustomCarousel/>
    {/* <Carousel showThumbs={false} autoPlay>

    </Carousel> */}
    </>
  )
}

export default page