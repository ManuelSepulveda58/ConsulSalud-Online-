import React, { useState } from 'react';
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
import Navbat from './Navbat';
import Footer from './Footer';

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
    <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', justifyContent: 'center', minHeight: '100vh', paddingTop: '20px', boxSizing: 'border-box' }}>
      <header style={{ width: '100%' }}>
        <nav>
          <Navbat />
        </nav>
      </header>
      <div style={{ display: 'flex', justifyContent: 'center', width: '100%', maxWidth: '800px', marginTop: '20px' }}>
        <div style={{ position: 'relative', width: '100%' }}>
          <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '10px' }}>
            <button onClick={handlePrev} style={{ marginRight: '10px' }} aria-label="Anterior">Anterior</button>
            <button onClick={handleNext} aria-label="Siguiente">Siguiente</button>
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
      <Footer /> 
    </div>
  );
}
