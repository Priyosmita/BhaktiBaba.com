'use client';

import React from 'react'
// components
import Header from './components/Header';
import customCarousel from './components/customCarousel';

import './globals.css'

const page = () => {
  return (
    <>
    <Header/>
    <customCarousel/>
    {/* <Carousel showThumbs={false} autoPlay>

    </Carousel> */}
    </>
  )
}

export default page