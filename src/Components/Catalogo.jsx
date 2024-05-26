import React, { useState } from 'react';
import './Catalogo.css'; 
import Navbat from './Navbat'; 
import Footer from './Footer'; 

import image from '../assets/Acetaminofen.png';
import image2 from '../assets/Advil.jpg';
import image3 from '../assets/dolex.jpg';
import ibuprofeno from '../assets/Ibuprofeno.jpg';
import paracetamol from '../assets/Paracetamol.jpg';
import antigripal from '../assets/Antigripal.jpg';
import ventolin from '../assets/Ventolin.jpg';
import omeprazol from '../assets/Omeprazol.jpg';
import ranitidina from '../assets/Ranitidina.jpg';
import enalapril from '../assets/Enalapril.jpg';
import warfarina from '../assets/Warfarina.jpg';
import insulina from '../assets/Insulina.jpg';
import metformina from '../assets/Metformina.jpg';
import salbutamol from '../assets/Salbutamol.jpg';
import prednisona from '../assets/Prednisona.jpg';
import cetirizina from '../assets/Cetirizina.jpg';
import loratadina from '../assets/Loratadina.jpg';
import melatonina from '../assets/Melatonina.jpg';
import rivotril from '../assets/Rivotril.jpg';

export function Catalogo() {
  const images = [
    { src: image, alt: '', caption: 'Acetaminofén', description: 'Dolor general' },
    { src: image2, alt: ' ', caption: 'Advil', description: 'Para Fuertes congestiones' },
    { src: image3, alt: '', caption: 'Dolex', description: 'Dolores musculares' },
    { src: ibuprofeno, alt: '', caption: 'Ibuprofeno', description: 'Dolor e inflamación' },
    { src: paracetamol, alt: '', caption: 'Paracetamol', description: 'Alivio del dolor y fiebre' },
    { src: antigripal, alt: '', caption: 'Antigripal', description: 'Síntomas de resfriado' },
    { src: ventolin, alt: '', caption: 'Ventolin', description: 'Asma y dificultad respiratoria' },
    { src: omeprazol, alt: '', caption: 'Omeprazol', description: 'Reflujo gástrico' },
    { src: ranitidina, alt: '', caption: 'Ranitidina', description: 'Úlceras y reflujo' },
    { src: enalapril, alt: '', caption: 'Enalapril', description: 'Hipertensión' },
    { src: warfarina, alt: '', caption: 'Warfarina', description: 'Anticoagulante' },
    { src: insulina, alt: '', caption: 'Insulina', description: 'Diabetes' },
    { src: metformina, alt: '', caption: 'Metformina', description: 'Control de glucosa' },
    { src: salbutamol, alt: '', caption: 'Salbutamol', description: 'Asma' },
    { src: prednisona, alt: '', caption: 'Prednisona', description: 'Antiinflamatorio' },
    { src: cetirizina, alt: '', caption: 'Cetirizina', description: 'Alergias' },
    { src: loratadina, alt: '', caption: 'Loratadina', description: 'Alergias' },
    { src: melatonina, alt: '', caption: 'Melatonina', description: 'Sueño' },
    { src: rivotril, alt: '', caption: 'Rivotril', description: 'Ansiedad y epilepsia' },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex(prevIndex => (prevIndex === 0 ? images.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex(prevIndex => (prevIndex === images.length - 1 ? 0 : prevIndex + 1));
  };

  return (
    <div className="catalogo-container">
      <header className="catalog-header">
        <Navbat /> {}
      </header>
      <div className="catalog-wrapper">
        <div className="catalog-buttons-container">
          <button onClick={handlePrev} className="prev-button">Anterior</button>
          <button onClick={handleNext} className="next-button">Siguiente</button>
        </div>
        <div className="image-container">
          <div className="image-wrapper" style={{ transform: `translateX(-${currentIndex * 100}%)` }}>
            {images.map((image, index) => (
              <div key={index} className="image-item">
                <img src={image.src} alt={image.alt} className="image" />
                <div className="description-container">
                  <h5>{image.caption}</h5>
                  <p>{image.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
      <footer className="footer">
        <Footer /> {}
      </footer>
    </div>
  );
}
