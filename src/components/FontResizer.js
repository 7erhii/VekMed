"use client"

import { useEffect } from 'react';

const FontSizeManager = () => {
  useEffect(() => {
    const updateFontSize = () => {
      const maxWidth = 1440;
      const maxFontSize = 16;
      const width = window.innerWidth;
      const fontSize = Math.min(maxFontSize, (width / maxWidth) * maxFontSize);
      document.body.style.fontSize = `${fontSize}px`;
    };

    updateFontSize();

    window.addEventListener('resize', updateFontSize);
    return () => window.removeEventListener('resize', updateFontSize);
  }, []);

  return null;
};

export default FontSizeManager;
