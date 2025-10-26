import React, { useState, useEffect, useRef, useCallback } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface ImageCarouselProps {
  images: string[];
  autoScrollInterval?: number; // in milliseconds
  className?: string;
  mobileHeight?: string; // e.g., "h-32"
  laptopHeight?: string; // e.g., "h-48"
  onImageClick?: (imageIndex: number, featureTitle?: string) => void;
  featureTitle?: string;
}

const ImageCarousel: React.FC<ImageCarouselProps> = ({
  images,
  autoScrollInterval = 3000,
  className = '',
  mobileHeight = 'h-32',
  laptopHeight = 'h-[16rem]',
  onImageClick,
  featureTitle
}) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [isFullscreen, setIsFullscreen] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);

  const goToNext = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  }, [images.length]);

  const goToPrevious = useCallback(() => {
    setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length);
  }, [images.length]);

  const goToSlide = (index: number) => {
    setCurrentIndex(index);
  };

  // Auto-play functionality
  useEffect(() => {
    if (isAutoPlaying && images.length > 1) {
      autoPlayRef.current = setInterval(goToNext, autoScrollInterval);
    }

    return () => {
      if (autoPlayRef.current) {
        clearInterval(autoPlayRef.current);
      }
    };
  }, [isAutoPlaying, goToNext, autoScrollInterval, images.length]);

  // Pause/Resume auto-play on hover
  const handleMouseEnter = () => {
    setIsAutoPlaying(false);
  };

  const handleMouseLeave = () => {
    setIsAutoPlaying(true);
  };

  // Handle individual image clicks for fullscreen modal opening
  const handleImageClick = (index: number) => {
    setIsFullscreen(true);
    setCurrentIndex(index);
    setIsAutoPlaying(false);
  };

  const closeFullscreen = () => {
    setIsFullscreen(false);
    setIsAutoPlaying(true);
  };



  // Keyboard navigation - Fixed to work properly
  const handleKeyDown = useCallback((e: KeyboardEvent) => {
    if (e.key === 'ArrowLeft') {
      e.preventDefault();
      goToPrevious();
      setIsAutoPlaying(false);
    } else if (e.key === 'ArrowRight') {
      e.preventDefault();
      goToNext();
      setIsAutoPlaying(false);
    }
  }, [goToNext, goToPrevious]);

  // Add global keyboard listener when carousel is focused
  useEffect(() => {
    const carousel = carouselRef.current;
    if (!carousel) return;

    const handleFocus = () => {
      document.addEventListener('keydown', handleKeyDown);
    };

    const handleBlur = () => {
      document.removeEventListener('keydown', handleKeyDown);
    };

    carousel.addEventListener('focus', handleFocus);
    carousel.addEventListener('blur', handleBlur);

    return () => {
      carousel.removeEventListener('focus', handleFocus);
      carousel.removeEventListener('blur', handleBlur);
      document.removeEventListener('keydown', handleKeyDown);
    };
  }, [handleKeyDown]);




  if (images.length === 0) {
    return (
      <div className="bg-red-500 text-white p-4 rounded-lg">
        No images provided to carousel
      </div>
    );
  }

  const hasMultipleImages = images.length > 1;

  return (
    <div className={`${className} relative z-10 mb-8 md:mb-48 lg:mb-64`}>
      <div className="relative flex items-center justify-center">
        {/* Left Navigation Arrow - Completely outside image container */}
        {hasMultipleImages && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrevious();
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToPrevious();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[100] bg-black/80 hover:bg-black/90 active:bg-black/95 active:scale-95 text-white p-3 rounded-full opacity-100 transition-all duration-200 hover:scale-110 focus:opacity-100 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl cursor-pointer touch-manipulation"
            aria-label="Previous image"
            type="button"
          >
            <ChevronLeft className="h-5 w-5" />
          </button>
        )}

        <div
          ref={carouselRef}
          className="relative group flex items-center justify-center mx-auto"
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
          tabIndex={0}
          role="region"
          aria-label="Image carousel - Use arrow keys for navigation"
          style={{ outline: '2px solid transparent' }}
          onFocus={(e) => { e.currentTarget.style.outline = '2px solid #3b82f6'; }}
          onBlur={(e) => { e.currentTarget.style.outline = '2px solid transparent'; }}
        >
          {/* Main Image Container - Fixed aspect ratio and height, centered */}
          <div className={`relative overflow-hidden rounded-lg ${mobileHeight} md:${laptopHeight} xl:h-[32rem] w-full max-w-full mx-8 md:mx-8 lg:mx-10`}>
            <div
              className="flex transition-transform duration-500 ease-in-out h-full"
              style={{
                width: `${images.length * 100}%`,
                transform: `translateX(-${currentIndex * (100 / images.length)}%)`
              }}
            >
              {images.map((image, index) => (
                <div
                  key={index}
                  className="flex-shrink-0 relative h-full"
                  style={{ width: `${100 / images.length}%`, zIndex: 30, pointerEvents: 'auto' }}
                >
                  <img
                    src={image}
                    alt={`Feature screenshot ${index + 1} - Click to view full screen`}
                    className="w-full h-full object-cover rounded-lg transition-all duration-200 cursor-pointer hover:brightness-110 hover:scale-[1.02] active:scale-[0.98]"
                    style={{ zIndex: 40 }}
                    loading={index === 0 ? "eager" : "lazy"}
                    onClick={(e) => {
                      console.log('Image clicked:', index);
                      handleImageClick(index);
                    }}
                    onKeyDown={(e) => {
                      console.log('Image key down:', e.key);
                      if (e.key === 'Enter') {
                        handleImageClick(index);
                      }
                    }}
                    tabIndex={0}
                    role="button"
                    aria-label={`View full screen image ${index + 1}`}
                  />

                  {/* Image overlay with fade effect - positioned below image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/10 via-transparent to-black/5 rounded-lg pointer-events-none" style={{ zIndex: 25 }} />
                </div>
              ))}
            </div>

            {/* Current position indicator */}
            {hasMultipleImages && (
              <div className="absolute bottom-2 right-2 z-10 bg-black/60 text-white text-xs px-2 py-1 rounded-full">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>

        {/* Right Navigation Arrow - Completely outside image container */}
        {hasMultipleImages && (
          <button
            onClick={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            onMouseDown={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            onTouchStart={(e) => {
              e.preventDefault();
              e.stopPropagation();
              goToNext();
            }}
            onTouchEnd={(e) => {
              e.preventDefault();
              e.stopPropagation();
            }}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[100] bg-black/80 hover:bg-black/90 active:bg-black/95 active:scale-95 text-white p-3 rounded-full opacity-100 transition-all duration-200 hover:scale-110 focus:opacity-100 focus:scale-110 focus:outline-none focus:ring-2 focus:ring-white/50 shadow-xl cursor-pointer touch-manipulation"
            aria-label="Next image"
            type="button"
          >
            <ChevronRight className="h-5 w-5" />
          </button>
        )}
      </div>

      {/* Dot Indicators - positioned below the entire carousel */}
      {hasMultipleImages && (
        <div className="flex justify-center space-x-2 mt-4 mb-2">
          {images.map((_, index) => (
            <button
              key={index}
              onClick={() => goToSlide(index)}
              className={`w-2 h-2 rounded-full transition-all duration-300 ${
                currentIndex === index
                  ? 'bg-slate-600 scale-125'
                  : 'bg-slate-400 hover:bg-slate-500'
              }`}
              aria-label={`Go to image ${index + 1}`}
            />
          ))}
        </div>
      )}

      {/* Fullscreen Modal */}
      {isFullscreen && (
        <div className="fixed inset-0 bg-black/90 z-[1000] flex items-center justify-center" onClick={closeFullscreen}>
          <div className="relative max-w-[90vw] max-h-[90vh]" onClick={e => e.stopPropagation()}>
            <img
              src={images[currentIndex]}
              alt={`Fullscreen view`}
              className="max-h-[90vh] max-w-[90vw] object-contain"
            />
            <button
              className="absolute top-4 right-4 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
              onClick={closeFullscreen}
            >
              <X size={24} />
            </button>

            {/* Fullscreen navigation arrows */}
            {hasMultipleImages && (
              <>
                <button
                  className="absolute left-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  onClick={goToPrevious}
                >
                  <ChevronLeft size={24} />
                </button>
                <button
                  className="absolute right-4 top-1/2 -translate-y-1/2 p-2 bg-black/50 text-white rounded-full hover:bg-black/70 transition-colors"
                  onClick={goToNext}
                >
                  <ChevronRight size={24} />
                </button>
              </>
            )}

            {/* Fullscreen image counter */}
            {hasMultipleImages && (
              <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/60 text-white px-4 py-2 rounded-full font-medium">
                {currentIndex + 1} / {images.length}
              </div>
            )}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageCarousel;
