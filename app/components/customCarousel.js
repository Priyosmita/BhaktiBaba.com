import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';

const customCarousel = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showArrows={false}
      showIndicators={false}
      interval={3000}>
      <div>
        <img src="\assets\carousel1.mp4" alt="Slide 1" />
      </div>
      <div>
        <img src="\assets\IMG_20240325_101844.jpg" alt="Slide 2" />
      </div>
      <div>
        <img src="\assets\IMG_20240325_101844.jpg" alt="Slide 3" />
      </div>
    </Carousel>
  )
}

export default customCarousel