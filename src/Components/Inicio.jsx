import React, { useState, useEffect } from 'react';
import image1 from '../assets/Catalogo.jpg';
import image2 from '../assets/Informacion.jpg';
import image3 from '../assets/Contactos.jpg';
import Navbat from './Navbat';
import Footer from './Footer';
import './Inicio.css'; 

export function Inicio() {
  const images = [
    { src: image1, alt: 'Catalogo' },
    { src: image2, alt: 'Informacion' },
    { src: image3, alt: 'Contactos' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const intervalId = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
    }, 5000); 

    return () => clearInterval(intervalId); a
  }, [images.length]); 

  return (
    <div id="inicio-container">
      <header>
        <nav>
          <Navbat />
        </nav>
      </header>

      <div className="image-container">
        <img src={images[currentIndex].src} alt={images[currentIndex].alt} className="image" />
      </div>

      <Footer />
    </div>
  );
}
