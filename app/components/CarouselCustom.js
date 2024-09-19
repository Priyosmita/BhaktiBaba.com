import React, { useState, useEffect } from 'react';
import { Carousel } from 'react-responsive-carousel';
import 'react-responsive-carousel/lib/styles/carousel.min.css';
import { VscTriangleLeft, VscTriangleRight } from 'react-icons/vsc';

const slides = [
  { type: 'video', src: '/assets/carousel1.mp4' },
  { type: 'image', src: '/assets/IMG_20240325_101844.jpg' },
  { type: 'image', src: '/assets/IMG_20240325_101844.jpg' },
];

// Function for custom slider arrow
const CarouselCustom = () => {
  const [isHoveredPrev, setIsHoveredPrev] = useState(false);
  const [isHoveredNext, setIsHoveredNext] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0); // Track the current slide index
  const totalSlides = slides.length;

  const customArrowStyles = (isHovered, side) => ({
    position: 'absolute',
    top: '50%',
    transform: `translateY(-50%) ${isHovered ? 'scale(1.8)' : 'scale(1.3)'}`, 
    zIndex: 2,
    color: '#fff',
    border: 'none',
    padding: '10px',
    cursor: 'pointer',
    fontSize: '26px',
    transition: 'transform 0.3s ease',
    [side]: '10px', 
  });

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % totalSlides); // Move to the next slide
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? totalSlides - 1 : prevIndex - 1
    ); // Move to the previous slide
  };

  const renderArrowPrev = () => (
    <button
      type="button"
      onClick={handlePrev}
      onMouseEnter={() => setIsHoveredPrev(true)}
      onMouseLeave={() => setIsHoveredPrev(false)}
      style={customArrowStyles(isHoveredPrev, 'left')}
    >
      <VscTriangleLeft />
    </button>
  );

  const renderArrowNext = () => (
    <button
      type="button"
      onClick={handleNext}
      onMouseEnter={() => setIsHoveredNext(true)}
      onMouseLeave={() => setIsHoveredNext(false)}
      style={customArrowStyles(isHoveredNext, 'right')}
    >
      <VscTriangleRight />
    </button>
  );

  return (
    <div style={{ position: 'relative', height: '50px' }}>
      <div className="carousel-wrapper" style={{ position: 'relative' }}>
        <div
          className="carousel-slides"
          style={{
            display: 'flex',
            transition: 'transform 0.5s ease-in-out',
            transform: `translateX(-${currentIndex * 100}%)`, // Slide based on the currentIndex
          }}
        >
          {slides.map((slide, index) => (
            <div key={index} style={{ minWidth: '100%', height: '50%' }}>
              {slide.type === 'video' ? (
                <video
                  src={slide.src}
                  autoPlay
                  loop
                  muted
                  playsInline
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              ) : (
                <img
                  src={slide.src}
                  alt={`Slide ${index + 1}`}
                  style={{ width: '100%', height: '100%', objectFit: 'cover' }}
                />
              )}
            </div>
          ))}
        </div>
        {renderArrowPrev()}
        {renderArrowNext()}
      </div>
    </div>
  );
};

export default CarouselCustom;