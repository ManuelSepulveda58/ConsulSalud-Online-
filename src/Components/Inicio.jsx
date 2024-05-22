import React, { useState } from 'react';
import Navbat from './Navbat';

export function Inicio() {
  const images = [
    { src: 'imagen1.jpg', alt: 'Primera imagen', caption: 'Primera imagen', description: 'Descripción de la primera imagen.' },
    { src: 'imagen2.jpg', alt: 'Segunda imagen', caption: 'Segunda imagen', description: 'Descripción de la segunda imagen.' },
    { src: 'imagen3.jpg', alt: 'Tercera imagen', caption: 'Tercera imagen', description: 'Descripción de la tercera imagen.' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', paddingTop: '20px', boxSizing: 'border-box' }}>
      <header style={{ width: '100%' }}>
        <nav>
          <Navbat />
        </nav>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '800px', marginTop: '20px' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <button onClick={handlePrev} style={{ marginRight: '10px' }}>Prev</button>
            <button onClick={handleNext}>Next</button>
          </div>
          <div style={{ overflow: 'hidden', position: 'relative', height: '400px', display: 'flex', justifyContent: 'center' }}>
            <div style={{ display: 'flex', transform: `translateX(-${currentIndex * 100}%)`, transition: 'transform 0.5s ease-in-out', width: '100%' }}>
              {images.map((image, index) => (
                <div key={index} style={{ minWidth: '100%', height: '100%', position: 'relative' }}>
                  <img src={image.src} alt={image.alt} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
                  <div style={{ position: 'absolute', bottom: '0', backgroundColor: 'rgba(0, 0, 0, 0.5)', color: 'white', padding: '10px', width: '100%' }}>
                    <h5>{image.caption}</h5>
                    <p>{image.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
