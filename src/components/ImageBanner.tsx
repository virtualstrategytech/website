import React, { useState, useEffect } from 'react';

interface ImageBannerProps {
  className?: string;
}

export const ImageBanner: React.FC<ImageBannerProps> = ({ className = '' }) => {
  const [images, setImages] = useState<string[]>([]);
  const [loadedImages, setLoadedImages] = useState<Set<string>>(new Set());
  const [errorImages, setErrorImages] = useState<Set<string>>(new Set());

  useEffect(() => {
    // Define the image files from the public/Images directory
    const imageFiles = [
      'CIBCimage2vector.svg',
      'Enbridgeimage2vector.svg',
      'EnvironmentCanadaimage2vector.svg',
      'Hort Renfrewimage2vector.svg',
      'Searsimage2vector.svg',
      'TTSimage2vector.svg',
      'WSIBimage2vector.svg'
    ];

    // Sort alphabetically and create correct paths (remove 'public/' prefix for Vite)
    const sortedImages = imageFiles
      .sort()
      .map(filename => `/Images/${filename}`);

    setImages(sortedImages);

    // Preload images for better performance
    sortedImages.forEach(src => {
      const img = new Image();
      img.onload = () => {
        setLoadedImages(prev => new Set([...prev, src]));
      };
      img.onerror = () => {
        setErrorImages(prev => new Set([...prev, src]));
        console.warn(`Failed to load image: ${src}`);
      };
      img.src = src;
    });
  }, []);

  const handleImageError = (src: string) => {
    setErrorImages(prev => new Set([...prev, src]));
    console.warn(`Image failed to load: ${src}`);
  };

  const handleImageLoad = (src: string) => {
    setLoadedImages(prev => new Set([...prev, src]));
  };

  // Filter out error images and get display-ready images
  const validImages = images.filter(src => !errorImages.has(src));

  // Duplicate images for seamless infinite scroll
  const duplicatedImages = [...validImages, ...validImages];

  if (validImages.length === 0) {
    return (
      <div className={`logo-banner-container ${className}`}>
        <div className="flex items-center justify-center h-24 text-gray-500">
          <span>Loading company logos...</span>
        </div>
      </div>
    );
  }

  return (
    <div className={`logo-banner-container ${className}`}>
      <div className="logo-banner">
        {duplicatedImages.map((src, index) => {
          const filename = src.split('/').pop()?.replace(/\.(svg|png|jpg|jpeg|gif|webp)$/i, '') || '';
          const companyName = filename
            .replace(/image2vector$/i, '')
            .replace(/-/g, ' ')
            .replace(/\s+/g, ' ')
            .trim();

          return (
            <div key={`${src}-${index}`} className="logo-item">
              <img
                src={src}
                alt={`${companyName} company logo`}
                className={`logo-image ${loadedImages.has(src) ? 'opacity-100' : 'opacity-0'}`}
                onLoad={() => handleImageLoad(src)}
                onError={() => handleImageError(src)}
                loading="lazy"
                style={{
                  transition: 'opacity 0.3s ease-in-out',
                }}
              />
            </div>
          );
        })}
      </div>
    </div>
  );
};