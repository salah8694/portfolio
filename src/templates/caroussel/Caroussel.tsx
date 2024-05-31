import React, { useState, useEffect } from 'react';
import './Caroussel.css';

const Caroussel = ({ images }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to go to the next image
  const nextImage = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  // Use useEffect to start the interval when the component mounts
  useEffect(() => {
    const interval = setInterval(nextImage, 3000); // Change image every 3 seconds

    // Clear the interval when the component unmounts
    return () => clearInterval(interval);
  }, []);

  return (
    <div className="caroussel">
      <div className='containe'>
      <button onClick={() => setCurrentIndex((prevIndex) => (prevIndex - 1 + images.length) % images.length)}>Précédent</button>
      <img src={images[currentIndex]} alt={`Image ${currentIndex + 1}`} />
      <button onClick={nextImage}>Suivant</button>
      </div>
    </div>

  );
};

export default Caroussel;


