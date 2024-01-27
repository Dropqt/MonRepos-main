import React from 'react'
import { useState } from 'react';
const ZoomIn = ({ image, onClose }) => {
    const [zoomLevel, setZoomLevel] = useState(1);
  
    const handleZoomIn = () => {
      setZoomLevel(zoomLevel + 0.2);
    };
  
    const handleZoomOut = () => {
      setZoomLevel(zoomLevel - 0.2);
    };
  
    return (
      <div className="fixed top-0 left-0 w-full h-full flex items-center justify-center bg-black bg-opacity-75">
        <div className="relative">
          <button onClick={onClose} className="absolute top-4 right-4 text-white cursor-pointer">
            Close
          </button>
          <img
            src={image}
            alt="Enlarged Image"
            className="max-h-full max-w-full transform transition-transform ease-in duration-300"
            style={{ transform: `scale(${zoomLevel})` }}
          />
          <div className="flex space-x-2 absolute bottom-4 right-4">
            <button
              onClick={handleZoomIn}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
            >
              Zoom In
            </button>
            <button
              onClick={handleZoomOut}
              className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200"
            >
              Zoom Out
            </button>
          </div>
        </div>
      </div>
    );
  };

export default ZoomIn