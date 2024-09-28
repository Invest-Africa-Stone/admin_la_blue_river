import { FC, useState } from 'react';

interface ImageType {
    images: { order: number, fileDir: string; filename: string }[]
}

export const Carousel:FC<ImageType> = ({
    images
}) => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const handlePrevSlide = () => {
    setCurrentSlide((prev) =>
      prev === 0 ? images.length - 1 : prev - 1
    );
  };

  const handleNextSlide = () => {
    setCurrentSlide((prev) =>
      prev === images.length - 1 ? 0 : prev + 1
    );
  };

  return (
    <div className="relative mb-4">
      {/* Carousel content */}
      <div className="carousel w-full">
        {images.map((image, index) => (
          <div
            key={index}
            className={`carousel-item w-full ${
              index === currentSlide ? 'block' : 'hidden'
            }`}
          >
            <img
              src={image.fileDir}
              alt={image.filename}
              className="w-full h-80 object-cover"
            />
          </div>
        ))}
      </div>

      {/* Previous and Next buttons */}
      <button
        className="absolute left-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
        onClick={handlePrevSlide}
      >
        &#10094;
      </button>
      <button
        className="absolute right-0 top-1/2 transform -translate-y-1/2 bg-black bg-opacity-50 p-2 rounded-full text-white"
        onClick={handleNextSlide}
      >
        &#10095;
      </button>

      {/* Dots for navigation */}
      <div className="absolute bottom-4 left-1/2 transform -translate-x-1/2 flex space-x-2">
        {images.map((_, index) => (
          <button
            key={index}
            className={`w-3 h-3 rounded-full ${
              index === currentSlide ? 'bg-blue-500' : 'bg-gray-300'
            }`}
            onClick={() => setCurrentSlide(index)}
          />
        ))}
      </div>
    </div>
  );
};
