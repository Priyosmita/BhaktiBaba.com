import React from 'react'
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';

// function for custom slider arrow
const customArrowStyles = {
  position: 'absolute',
  top: '50%',
  transform: 'translateY(-50%)',
  zIndex: 2,
  // backgroundColor: 'rgba(0, 0, 0, 0.5)',
  color: '#fff',
  border: 'none',
  padding: '10px',
  cursor: 'pointer',
  fontSize: '24px', // Adjust the size of the icons
};

const renderArrowPrev = (onClickHandler, hasPrev, label) =>
  hasPrev && (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      style={{ ...customArrowStyles, left: 15 }}>
      <VscTriangleLeft /> 
    </button>
  );

const renderArrowNext = (onClickHandler, hasNext, label) =>
  hasNext && (
    <button
      type="button"
      onClick={onClickHandler}
      title={label}
      style={{ ...customArrowStyles, right: 15 }}>
      <VscTriangleRight /> 
    </button>
  );

const CarouselCustom = () => {
  return (
    <Carousel
      showThumbs={false}
      autoPlay
      infiniteLoop
      showArrows={true}
      renderArrowPrev={renderArrowPrev}
      renderArrowNext={renderArrowNext}
      showIndicators={true}
      interval={3000}>
      <div className='h-1/3'>
        <video src="\assets\carousel1.mp4" autoPlay loop muted playsInline alt="Slide 1" />
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

export default CarouselCustom