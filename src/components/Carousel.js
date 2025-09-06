import React, { useState, useEffect, useRef } from 'react';
import assets from '../assets/assets';

const Carousel = ({ projects }) => {
  const [currentSlide, setCurrentSlide] = useState(0);
  const trackRef = useRef(null);
  const slidesRef = useRef([]);

  // Initialize carousel
  useEffect(() => {
    arrangeSlides();
    hideShowArrows(currentSlide);
  }, [projects]); // Add projects as dependency

  // Update carousel when currentSlide changes
  useEffect(() => {
    moveToSlide(currentSlide);
    hideShowArrows(currentSlide);
  }, [currentSlide]);

  const arrangeSlides = () => {
    if (trackRef.current && slidesRef.current.length > 0) {
      const slideWidth = slidesRef.current[0].getBoundingClientRect().width;
      slidesRef.current.forEach((slide, index) => {
        if (slide) {
          slide.style.left = `${slideWidth * index}px`;
        }
      });
    }
  };

  const moveToSlide = (targetIndex) => {
    if (targetIndex < 0 || targetIndex >= projects.length) return;
    
    const targetSlide = slidesRef.current[targetIndex];
    if (trackRef.current && targetSlide && targetSlide.style.left) {
      trackRef.current.style.transform = `translateX(-${targetSlide.style.left})`;
    }
  };

  const hideShowArrows = (targetIndex) => {
    const prevButton = document.querySelector('.carousel_button_left');
    const nextButton = document.querySelector('.carousel_button_right');
    
    if (prevButton) {
      prevButton.classList.toggle('is-hidden', targetIndex === 0);
    }
    if (nextButton) {
      nextButton.classList.toggle('is-hidden', targetIndex === projects.length - 1);
    }
  };

  const handleNext = () => {
    if (currentSlide < projects.length - 1) {
      setCurrentSlide(currentSlide + 1);
    }
  };

  const handlePrev = () => {
    if (currentSlide > 0) {
      setCurrentSlide(currentSlide - 1);
    }
  };

  const handleDotClick = (index) => {
    if (index !== currentSlide) {
      setCurrentSlide(index);
    }
  };

  return (
    <div className="carousel">
      {/* Navigation Buttons */}
      <button 
        className="carousel_button carousel_button_left is-hidden"
        onClick={handlePrev}
        aria-label="Previous slide"
      >
        <img src={assets.leftArrow} alt="left" width="30px" />
      </button>
      
      <button 
        className="carousel_button carousel_button_right"
        onClick={handleNext}
        aria-label="Next slide"
      >
        <img src={assets.rightArrow} alt="right" width="30px" />
      </button>

      {/* Carousel Track Container */}
      <div className="carousel_track-container">
        <ul className="carousel_track" ref={trackRef}>
          {projects.map((project, index) => (
            <li
              key={project.id}
              ref={el => slidesRef.current[index] = el}
              className={`carousel_slide ${currentSlide === index ? 'current-slide' : ''}`}
            >
              {project.content}
            </li>
          ))}
        </ul>
      </div>

      {/* Dots Navigation */}
      <div className="carousel_nav">
        {projects.map((_, index) => (
          <button
            key={index}
            className={`carousel_indicator ${currentSlide === index ? 'current-slide' : ''}`}
            onClick={() => handleDotClick(index)}
            aria-label={`Go to slide ${index + 1}`}
          />
        ))}
      </div>
    </div>
  );
};

export default Carousel;