import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbat from './Navbat';
import Footer from './Footer';
import './Buscar.css';

// Importar imágenes
import Advil from '../assets/AdvilU.jpg'; 
import Acetaminophen from '../assets/acetaminophen.jpg';
import Dolex from '../assets/DolexF.jpg';
import Ibuprofeno from '../assets/Ibuprofeno.jpg';
import Paracetamol from '../assets/Paracetamol.jpg';
import Antigripal from '../assets/Antigripal.jpg';
import Ventolin from '../assets/Ventolin.jpg';
import Omeprazol from '../assets/Omeprazol.jpg';
import Ranitidina from '../assets/Ranitidina.jpg';
import Enalapril from '../assets/Enalapril.jpg';
import Warfarina from '../assets/Warfarina.jpg';
import Insulina from '../assets/Insulina.jpg';
import Metformina from '../assets/Metformina.jpg';
import Salbutamol from '../assets/Salbutamol.jpg';
import Prednisona from '../assets/Prednisona.jpg';
import Cetirizina from '../assets/Cetirizina.jpg';
import Loratadina from '../assets/Loratadina.jpg';
import Melatonina from '../assets/Melatonina.jpg';
import Rivotril from '../assets/Rivotril.jpg';

// Objeto que contiene los medicamentos con imágenes y descripciones
const medicamentos = {
    Acetaminophen: {
      image: Acetaminophen,
      description: 'Dolor general',
    },
    Advil: {
      image: Advil,
      description: 'Para fuertes congestiones',
    },
    Dolex: {
      image: Dolex,
      description: 'Dolores musculares',
    },
    Ibuprofeno: {
      image: Ibuprofeno,
      description: 'Dolor e inflamación',
    },
    Paracetamol: {
      image: Paracetamol,
      description: 'Alivio del dolor y fiebre',
    },
    Antigripal: {
      image: Antigripal,
      description: 'Síntomas de resfriado',
    },
    Ventolin: {
      image: Ventolin,
      description: 'Asma y dificultad respiratoria',
    },
    Omeprazol: {
      image: Omeprazol,
      description: 'Reflujo gástrico',
    },
    Ranitidina: {
      image: Ranitidina,
      description: 'Úlceras y reflujo',
    },
    Enalapril: {
      image: Enalapril,
      description: 'Hipertensión',
    },
    Warfarina: {
      image: Warfarina,
      description: 'Anticoagulante',
    },
    Insulina: {
      image: Insulina,
      description: 'Diabetes',
    },
    Metformina: {
      image: Metformina,
      description: 'Control de glucosa',
    },
    Salbutamol: {
      image: Salbutamol,
      description: 'Asma',
    },
    Prednisona: {
      image: Prednisona,
      description: 'Antiinflamatorio',
    },
    Cetirizina: {
      image: Cetirizina,
      description: 'Alergias',
    },
    Loratadina: {
      image: Loratadina,
      description: 'Alergias',
    },
    Melatonina: {
      image: Melatonina,
      description: 'Sueño',
    },
    Rivotril: {
      image: Rivotril,
      description: 'Ansiedad y epilepsia',
    },
  };

export function Buscar() {
  const [searchTerm, setSearchTerm] = useState('');
  const [suggestions, setSuggestions] = useState([]);
  const [searchResult, setSearchResult] = useState('');
  const [notFound, setNotFound] = useState(false);
  const navigate = useNavigate();

  const handleSearchChange = (e) => {
    const value = e.target.value;
    setSearchTerm(value);

    if (value.length > 0) {
      const filteredSuggestions = Object.keys(medicamentos).filter(medicamento =>
        medicamento.toLowerCase().includes(value.toLowerCase())
      );
      setSuggestions(filteredSuggestions);
    } else {
      setSuggestions([]);
    }
  };

  const handleSearchClick = () => {
    const result = Object.keys(medicamentos).find(medicamento =>
      medicamento.toLowerCase() === searchTerm.toLowerCase()
    );
    if (result) {
      setSearchResult(result);
      setNotFound(false);
    } else {
      setSearchResult('');
      setNotFound(true);
    }
    setSuggestions([]);
  };

  const handleSuggestionClick = (suggestion) => {
    setSearchTerm(suggestion);
    setSuggestions([]);
    setSearchResult(suggestion);
    setNotFound(false);
  };

  const handleBackToCatalog = () => {
    navigate('/Catalogo');
  };

  return (
    <div className="buscar-container">
      <header className="buscar-header">
        <Navbat />
      </header>
      <div className="search-wrapper">
        <input
          type="text"
          placeholder="Buscar medicamento..."
          value={searchTerm}
          onChange={handleSearchChange}
          className="search-input"
        />
        <button onClick={handleSearchClick} className="search-button">Buscar</button>
        {suggestions.length > 0 && (
          <ul className="search-results">
            {suggestions.map((medicamento, index) => (
              <li key={index} onClick={() => handleSuggestionClick(medicamento)}>
                {medicamento}
              </li>
            ))}
          </ul>
        )}
        {searchResult && (
          <div className="search-result">
            <img src={medicamentos[searchResult].image} alt={searchResult} className="product-image" />
            <p>{medicamentos[searchResult].description}</p>
          </div>
        )}
        {notFound && (
          <div className="search-result">
            <p>No se encuentra este producto en el catálogo.</p>
          </div>
        )}
      </div>
      <button onClick={handleBackToCatalog} className="back-button">Regresar al Catálogo</button>
      <footer className="footer">
        <Footer />
      </footer>
    </div>
  );
}
