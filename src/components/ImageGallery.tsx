
import { useState } from 'react';
import { ChevronLeft, ChevronRight, X } from 'lucide-react';

interface Image {
  src: string;
  alt: string;
}

interface ImageGalleryProps {
  images: Image[];
}

const ImageGallery = ({ images }: ImageGalleryProps) => {
  const [activeIndex, setActiveIndex] = useState(0);
  const [lightboxOpen, setLightboxOpen] = useState(false);

  const handlePrevious = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === 0 ? images.length - 1 : prev - 1));
  };

  const handleNext = (e: React.MouseEvent) => {
    e.stopPropagation();
    setActiveIndex((prev) => (prev === images.length - 1 ? 0 : prev + 1));
  };

  const openLightbox = (index: number) => {
    setActiveIndex(index);
    setLightboxOpen(true);
    document.body.style.overflow = 'hidden';
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    document.body.style.overflow = '';
  };

  // For thumbanails/grid view
  return (
    <div className="space-y-4">
      {/* Main large image */}
      <div 
        className="aspect-w-16 aspect-h-9 overflow-hidden rounded-lg cursor-pointer"
        onClick={() => openLightbox(activeIndex)}
      >
        <img 
          src={images[activeIndex].src} 
          alt={images[activeIndex].alt}
          className="w-full h-full object-cover transition-all duration-500 ease-apple hover:scale-105"
        />
      </div>
      
      {/* Thumbnails */}
      <div className="grid grid-cols-4 gap-2">
        {images.map((image, index) => (
          <div 
            key={index}
            className={`aspect-w-1 aspect-h-1 overflow-hidden rounded-md cursor-pointer transition-all duration-300 ease-apple
              ${activeIndex === index ? 'ring-2 ring-hms-medium-green' : 'opacity-70 hover:opacity-100'}`}
            onClick={() => setActiveIndex(index)}
          >
            <img 
              src={image.src} 
              alt={image.alt} 
              className="w-full h-full object-cover"
            />
          </div>
        ))}
      </div>

      {/* Lightbox */}
      {lightboxOpen && (
        <div 
          className="fixed inset-0 z-50 bg-black bg-opacity-90 flex items-center justify-center"
          onClick={closeLightbox}
        >
          <button
            className="absolute top-4 right-4 text-white p-2 z-10"
            onClick={closeLightbox}
          >
            <X size={24} />
          </button>
          
          <button
            className="absolute left-4 text-white p-2 rounded-full bg-black bg-opacity-50"
            onClick={handlePrevious}
          >
            <ChevronLeft size={28} />
          </button>
          
          <img 
            src={images[activeIndex].src} 
            alt={images[activeIndex].alt}
            className="max-h-[85vh] max-w-[85vw] object-contain"
          />
          
          <button
            className="absolute right-4 text-white p-2 rounded-full bg-black bg-opacity-50"
            onClick={handleNext}
          >
            <ChevronRight size={28} />
          </button>
          
          <div className="absolute bottom-4 left-0 right-0 flex justify-center gap-2">
            {images.map((_, index) => (
              <button
                key={index}
                className={`w-2 h-2 rounded-full transition-all duration-300 ease-apple
                  ${activeIndex === index ? 'bg-white' : 'bg-gray-500'}`}
                onClick={(e) => {
                  e.stopPropagation();
                  setActiveIndex(index);
                }}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
};

export default ImageGallery;
