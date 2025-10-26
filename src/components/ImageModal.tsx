import React, { useEffect, useState } from 'react';
import { X, ChevronLeft, ChevronRight } from 'lucide-react';

interface ImageModalProps {
  images: string[];
  currentIndex: number;
  isOpen: boolean;
  onClose: () => void;
  featureTitle?: string;
}

const ImageModal: React.FC<ImageModalProps> = ({
  images,
  currentIndex,
  isOpen,
  onClose,
  featureTitle = 'Feature Images'
}) => {
  // Internal navigation state
  const [currentImageIndex, setCurrentImageIndex] = useState(currentIndex);
  const [touchStart, setTouchStart] = useState<number | null>(null);

  // Update internal state when external currentIndex changes
  useEffect(() => {
    setCurrentImageIndex(currentIndex);
  }, [currentIndex]);

  // Navigation functions
  const navigateNext = () => {
    setCurrentImageIndex((prev) => (prev + 1) % images.length);
  };

  const navigatePrevious = () => {
    setCurrentImageIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  // Enhanced keyboard navigation
  useEffect(() => {
    if (!isOpen) return;

    const handleKeyDown = (e: KeyboardEvent) => {
      switch (e.key) {
        case 'Escape':
          onClose();
          break;
        case 'ArrowLeft':
          e.preventDefault();
          navigatePrevious();
          break;
        case 'ArrowRight':
          e.preventDefault();
          navigateNext();
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isOpen, onClose, navigatePrevious, navigateNext]);

  // Touch/Swipe support for mobile
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchStart(e.targetTouches[0].clientX);
  };

  const handleTouchEnd = (e: React.TouchEvent) => {
    if (!touchStart) return;

    const touchEnd = e.changedTouches[0].clientX;
    const diff = touchStart - touchEnd;

    // Minimum swipe distance to trigger navigation
    if (Math.abs(diff) > 50) {
      if (diff > 0) {
        navigateNext(); // Swipe left - next image
      } else {
        navigatePrevious(); // Swipe right - previous image
      }
    }

    setTouchStart(null);
  };

  // Simple backdrop click to close
  const handleBackdropClick = (e: React.MouseEvent) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  if (!isOpen) return null;

  return (
    <div
      className="fixed inset-0 z-[9999] flex items-center justify-center p-4 bg-black/80"
      onClick={handleBackdropClick}
    >
      {/* Close button */}
      <button
        onClick={onClose}
        className="absolute top-4 right-4 z-[10000] text-white hover:text-gray-300 transition-colors duration-200"
      >
        <X className="h-8 w-8" />
      </button>

      {/* Feature title */}
      {featureTitle && (
        <div className="absolute top-4 left-4 z-[10000] bg-black/60 rounded-lg px-4 py-2">
          <span className="text-white text-base font-medium">
            {featureTitle}
          </span>
        </div>
      )}

      {/* Main image container */}
      <div className="relative w-full max-w-6xl mx-auto">
        {/* Previous Button */}
        {images.length > 1 && (
          <button
            onClick={navigatePrevious}
            className="absolute left-4 top-1/2 -translate-y-1/2 z-[10001] bg-black/80 hover:bg-black/90 text-white p-3 rounded-full hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Previous image"
          >
            <ChevronLeft className="h-6 w-6" />
          </button>
        )}

        {/* Next Button */}
        {images.length > 1 && (
          <button
            onClick={navigateNext}
            className="absolute right-4 top-1/2 -translate-y-1/2 z-[10001] bg-black/80 hover:bg-black/90 text-white p-3 rounded-full hover:scale-110 transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-white/50"
            aria-label="Next image"
          >
            <ChevronRight className="h-6 w-6" />
          </button>
        )}

        <div className="relative bg-white rounded-lg overflow-hidden">
          <div
            className="relative aspect-[16/9] md:aspect-[21/9]"
            onTouchStart={handleTouchStart}
            onTouchEnd={handleTouchEnd}
          >
            <img
              key={currentImageIndex} // Force re-render on index change
              src={images[currentImageIndex]}
              alt={`Feature screenshot ${currentImageIndex + 1}`}
              className="w-full h-full object-contain transition-all duration-300 ease-in-out"
              loading="eager"
            />
          </div>
        </div>

        {/* Enhanced Image counter */}
        <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-black/80 text-white text-sm px-4 py-2 rounded-full font-medium">
          {currentImageIndex + 1} / {images.length}
        </div>
      </div>
    </div>
  );
};

export default ImageModal;
