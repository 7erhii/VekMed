import React, { ReactNode } from 'react';
import type { StaticImageData } from 'next/image';

interface ImageBlockProps {
  src: StaticImageData;
  alt: string;
}

interface OverlayBlockProps extends ImageBlockProps {
  children: ReactNode;
}

const ImageBlock: React.FC<ImageBlockProps> = ({ src, alt }) => {
  return (
    <div
      className="relative w-full max-w-[1920px] h-[780px] bg-cover bg-center"
      style={{ backgroundImage: `url(${src.src})` }}
      aria-label={alt}
    >
    </div>
  );
};

const OverlayBlock: React.FC<OverlayBlockProps> = ({ src, alt, children }) => {
  return (
    <div
      className="relative w-full max-w-[1920px] h-[780px] bg-cover bg-center"
      style={{ backgroundImage: `url(${src.src})` }}
      aria-label={alt}
    >
      {children}
    </div>
  );
};

export { ImageBlock, OverlayBlock };
