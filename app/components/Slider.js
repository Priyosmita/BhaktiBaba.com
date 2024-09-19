"use client"

import React, { useState, useEffect } from 'react';

// Sample data structure for images and videos
const mediaItems = [
  { type: 'image', src: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', alt: 'Image 1' },
  { type: 'image', src: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', alt: 'Video 1' },
  { type: 'image', src: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', alt: 'Image 2' },
  { type: 'image', src: 'https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg', alt: 'Video 2' },
];

const Carousel = ({ items, interval = 5000 }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Automatically change slides at the set interval
  useEffect(() => {
    const autoTransition = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % items.length);
    }, interval);
    return () => clearInterval(autoTransition); // Cleanup on unmount
  }, [items.length, interval]);

  const goToNext = () => {
    setCurrentIndex((currentIndex + 1) % items.length);
  };

  const goToPrevious = () => {
    setCurrentIndex((currentIndex - 1 + items.length) % items.length);
  };

  return (
    <div className="relative max-w-3xl mx-auto overflow-hidden">
      {/* Carousel Items */}
      <div className="flex transition-transform duration-500 ease-in-out">
        {items.map((item, index) => (
          <div
            key={index}
            className={`min-w-full transition-opacity duration-1000 ${
              index === currentIndex ? 'opacity-100' : 'opacity-0'
            }`}
          >
            {item.type === 'image' ? (
              <img
                src={item.src}
                alt={item.alt}
                className="w-full h-auto object-cover"
              />
            ) : (
              <video
                controls
                className="w-full h-auto object-cover"
              >
                <source src={item.src} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            )}
          </div>
        ))}
      </div>

      {/* Carousel Controls */}
      <button
        onClick={goToPrevious}
        className="absolute left-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity"
      >
        Prev
      </button>
      <button
        onClick={goToNext}
        className="absolute right-2 top-1/2 transform -translate-y-1/2 bg-gray-800 text-white rounded-full p-2 opacity-75 hover:opacity-100 transition-opacity"
      >
        Next
      </button>
    </div>
  );
};

// Usage Example
const Slider = () => {
  return <Carousel items={mediaItems} interval={5000} />;
};

export default Slider;