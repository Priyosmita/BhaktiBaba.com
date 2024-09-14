import React, { useState } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';

// Function for custom slider arrow
const CarouselCustom = () => {
  const [isHoveredPrev, setIsHoveredPrev] = useState(false);
  const [isHoveredNext, setIsHoveredNext] = useState(false);

  const customArrowStyles = (isHovered, side) => ({
    position: 'absolute',
    top: '50%',
    transform: `translateY(-50%) ${isHovered ? 'scale(1.8)' : 'scale(1.3)'}`, // Adjust positioning based on side
    zIndex: 2,
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '26px', // Adjust the size of the icons
    transition: 'transform 0.3s ease', // Smooth transition
    [side]: '10px', // Position on left or right side
  });

  const renderArrowPrev = (onClickHandler, hasPrev, label) =>
    hasPrev && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        onMouseEnter={() => setIsHoveredPrev(true)}
        onMouseLeave={() => setIsHoveredPrev(false)}
        style={customArrowStyles(isHoveredPrev, 'left')}
      >
        <VscTriangleLeft />
      </button>
    );

  const renderArrowNext = (onClickHandler, hasNext, label) =>
    hasNext && (
      <button
        type="button"
        onClick={onClickHandler}
        title={label}
        onMouseEnter={() => setIsHoveredNext(true)}
        onMouseLeave={() => setIsHoveredNext(false)}
        style={customArrowStyles(isHoveredNext, 'right')}
      >
        <VscTriangleRight />
      </button>
    );

  return (
    <div style={{ position: 'relative', height: '400px' }}> {/* Ensure parent has relative positioning */}
      <Carousel
        showThumbs={false}
        autoPlay
        infiniteLoop
        showArrows={true}
        renderArrowPrev={renderArrowPrev}
        renderArrowNext={renderArrowNext}
        showIndicators={true}
        interval={3000}
      >
        <div style={{ height: '100%' }}>
          <video src="\assets\carousel1.mp4" autoPlay loop muted playsInline style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ height: '100%' }}>
          <img src="\assets\IMG_20240325_101844.jpg" alt="Slide 2" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
        <div style={{ height: '100%' }}>
          <img src="\assets\IMG_20240325_101844.jpg" alt="Slide 3" style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
        </div>
      </Carousel>
    </div>
  );
}

export default CarouselCustom;