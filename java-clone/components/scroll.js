'use client'
// components/scroll.js

import { useEffect } from 'react';

const useSmoothScroll = (scrollSpeed = 10) => {
  useEffect(() => {
    // Smooth scrolling logic
    if (typeof window !== "undefined") {
    const handleWheel = (event) => {
      event.preventDefault();
      let scrollStep = event.deltaY < 0 ? -scrollSpeed : scrollSpeed;
      window.scrollBy({
        top: scrollStep,
        left: 0,
        behavior: 'smooth',
      });
    };

    window.addEventListener('wheel', handleWheel, { passive: false });

    return () => {
      window.removeEventListener('wheel', handleWheel);
    };
  }
  }, [scrollSpeed]);
};

export default useSmoothScroll;

