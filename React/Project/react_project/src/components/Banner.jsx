import React, { useState, useEffect } from 'react';
import banner from '../assets/images/banner.jpg';
import banner1 from '../assets/images/banner2.jpg';
import banner2 from '../assets/images/banner3.jpg';
import Card from './Card';

const Banner = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const images = [banner, banner1, banner2];
  
 
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000); 
    
    return () => clearInterval(interval);
  }, [images.length]);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  const goToPrevSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const goToNextSlide = () => {
    setCurrentIndex((prevIndex) => 
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <>
    <div className="relative  overflow-hidden rounded-xl shadow-2xl mt-24 mx-auto max-w-7xl">
      
      <div className="relative h-96 md:h-120 w-full overflow-hidden">
        
        <div 
          className="flex transition-transform duration-700 ease-in-out h-full"
          style={{ transform: `translateX(-${currentIndex * 100}%)` }}
        >
          {images.map((img, index) => (
            <div 
              key={index} 
              className="min-w-full h-full relative"
            >
              <img 
                src={img} 
                className="w-full h-full object-cover"
                alt={`Banner ${index + 1}`}
              />
              
              <div className="absolute inset-0 bg-linear-to-r from-black/10 to-transparent"></div>
            </div>
          ))}
        </div>
       
        <button 
          onClick={goToPrevSlide}
          className="absolute left-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Previous slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
          </svg>
        </button>
        
        <button 
          onClick={goToNextSlide}
          className="absolute right-4 top-1/2 transform -translate-y-1/2 bg-white/80 hover:bg-white p-3 rounded-full shadow-lg transition-all duration-300 hover:scale-110"
          aria-label="Next slide"
        >
          <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 text-gray-800" fill="none" viewBox="0 0 24 24" stroke="currentColor">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
          </svg>
        </button>
        
        
        <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 flex space-x-3">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-3 h-3 rounded-full transition-all duration-300 ${
                index === currentIndex 
                  ? 'bg-white scale-125' 
                  : 'bg-white/60 hover:bg-white'
              }`}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
      
      
      <div className="h-1.5 w-full bg-gray-200">
        <div 
          className="h-full bg-linear-to-r from-blue-500 to-purple-600 transition-all duration-1000 ease-out"
          style={{ width: `${((currentIndex + 1) / images.length) * 100}%` }}
        ></div>
      </div>
    </div>
     <Card/>
     </>
  );
};

export default Banner;