import React, { useState } from 'react';
import Navbat from './Navbat';
import Footer from './Footer';
import './Informacion.css'; 

export function Informacion() {
  const [enfermedadSeleccionada, setEnfermedadSeleccionada] = useState(null);
  const [currentMedicamentoIndex, setCurrentMedicamentoIndex] = useState(0);

  const enfermedades = [
    { id: 1, nombre: 'Resfriado común' },
    { id: 2, nombre: 'Gripe' },
    { id: 3, nombre: 'Dolor de cabeza' },
    { id: 4, nombre: 'Gastritis' },
    { id: 5, nombre: 'Hipertensión' },
    { id: 6, nombre: 'Diabetes' },
    { id: 7, nombre: 'Asma' },
    { id: 8, nombre: 'Artritis' },
    { id: 9, nombre: 'Eczema' },
    { id: 10, nombre: 'Insomnio' }
  ];

  const medicamentosPorEnfermedad = {
    1: [
      { id: 1, nombre: 'Ibuprofeno', frecuencia: 'Cada 6 horas', precio: 5000.00 },
      { id: 2, nombre: 'Paracetamol', frecuencia: 'Cada 8 horas', precio: 4000.00 },
      { id: 21, nombre: 'Aspirina', frecuencia: 'Cada 4 horas', precio: 4500.00 },
      { id: 22, nombre: 'Descongestionante', frecuencia: 'Cada 12 horas', precio: 6000.00 },
    ],
    2: [
      { id: 3, nombre: 'Antigripal', frecuencia: 'Cada 12 horas', precio: 6000.00 },
      { id: 15, nombre: 'Ventolin', frecuencia: 'Según indicación médica', precio: 7500.00 },
      { id: 23, nombre: 'Guaifenesina', frecuencia: 'Cada 4 horas', precio: 5500.00 },
      { id: 24, nombre: 'Zanamivir', frecuencia: 'Diariamente', precio: 10000.00 },
    ],
    3: [
      { id: 5, nombre: 'Ibuprofeno', frecuencia: 'Cada 6 horas', precio: 8000.00 },
      { id: 6, nombre: 'Paracetamol', frecuencia: 'Cada 8 horas', precio: 7000.00 },
      { id: 25, nombre: 'Aspirina', frecuencia: 'Cada 4 horas', precio: 6000.00 },
      { id: 26, nombre: 'Naproxeno', frecuencia: 'Cada 12 horas', precio: 9000.00 },
    ],
    4: [
      { id: 4, nombre: 'Omeprazol', frecuencia: 'Diariamente', precio: 8000.00 },
      { id: 13, nombre: 'Ranitidina', frecuencia: 'Diariamente', precio: 8500.00 },
      { id: 27, nombre: 'Esomeprazol', frecuencia: 'Diariamente', precio: 9000.00 },
      { id: 28, nombre: 'Pantoprazol', frecuencia: 'Diariamente', precio: 9500.00 },
    ],
    5: [
      { id: 16, nombre: 'Enalapril', frecuencia: 'Diariamente', precio: 8500.00 },
      { id: 17, nombre: 'Warfarina', frecuencia: 'Diariamente', precio: 10500.00 },
      { id: 29, nombre: 'Amlodipino', frecuencia: 'Diariamente', precio: 8000.00 },
      { id: 30, nombre: 'Lisinopril', frecuencia: 'Diariamente', precio: 9500.00 },
    ],
    6: [
      { id: 6, nombre: 'Insulina', frecuencia: 'Según indicación médica', precio: 15000.00 },
      { id: 14, nombre: 'Metformina', frecuencia: 'Diariamente', precio: 9500.00 },
      { id: 31, nombre: 'Glipizida', frecuencia: 'Diariamente', precio: 9000.00 },
      { id: 32, nombre: 'Sitagliptina', frecuencia: 'Diariamente', precio: 11000.00 },
    ],
    7: [
      { id: 7, nombre: 'Salbutamol', frecuencia: 'Cada 4 horas', precio: 7000.00 },
      { id: 15, nombre: 'Ventolin', frecuencia: 'Según indicación médica', precio: 7500.00 },
      { id: 33, nombre: 'Montelukast', frecuencia: 'Diariamente', precio: 12000.00 },
      { id: 34, nombre: 'Fluticasona', frecuencia: 'Diariamente', precio: 10000.00 },
    ],
    8: [
      { id: 8, nombre: 'Ibuprofeno', frecuencia: 'Cada 8 horas', precio: 5000.00 },
      { id: 9, nombre: 'Prednisona', frecuencia: 'Diariamente', precio: 9000.00 },
      { id: 35, nombre: 'Diclofenaco', frecuencia: 'Cada 12 horas', precio: 8500.00 },
      { id: 36, nombre: 'Metotrexato', frecuencia: 'Semanalmente', precio: 15000.00 },
    ],
    9: [
      { id: 10, nombre: 'Cetirizina', frecuencia: 'Diariamente', precio: 6000.00 },
      { id: 12, nombre: 'Loratadina', frecuencia: 'Diariamente', precio: 7000.00 },
      { id: 37, nombre: 'Hidrocortisona', frecuencia: 'Diariamente', precio: 8000.00 },
      { id: 38, nombre: 'Betametasona', frecuencia: 'Diariamente', precio: 9000.00 },
    ],
    10: [
      { id: 11, nombre: 'Melatonina', frecuencia: 'Diariamente', precio: 10000.00 },
      { id: 20, nombre: 'Rivotril', frecuencia: 'Según indicación médica', precio: 12000.00 },
      { id: 39, nombre: 'Diazepam', frecuencia: 'Según indicación médica', precio: 9500.00 },
      { id: 40, nombre: 'Zolpidem', frecuencia: 'Diariamente', precio: 13000.00 },
    ]
  };

  const handleClickEnfermedad = (enfermedad) => {
    setEnfermedadSeleccionada(enfermedad);
    setCurrentMedicamentoIndex(0); 
  };

  const handleNext = () => {
    const medicamentosPerPage = 2; 
    const totalMedicamentos = medicamentosPorEnfermedad[enfermedadSeleccionada.id].length;
    const currentPageIndex = Math.floor(currentMedicamentoIndex / medicamentosPerPage);
    const totalPages = Math.ceil(totalMedicamentos / medicamentosPerPage);
    
    if (currentPageIndex < totalPages - 1) {
      setCurrentMedicamentoIndex(currentMedicamentoIndex + medicamentosPerPage);
      const containerWidth = document.querySelector('.medicamentos-list').offsetWidth;
      const medicamentoWidth = containerWidth / medicamentosPerPage;
      const newPosition = currentPageIndex * containerWidth + medicamentoWidth;
      document.querySelector('.medicamentos-list').scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  const handlePrev = () => {
    const medicamentosPerPage = 2; 
    const currentPageIndex = Math.floor(currentMedicamentoIndex / medicamentosPerPage);
    
    if (currentPageIndex > 0) {
      setCurrentMedicamentoIndex(currentMedicamentoIndex - medicamentosPerPage);
      const containerWidth = document.querySelector('.medicamentos-list').offsetWidth;
      const newPosition = (currentPageIndex - 1) * containerWidth;
      document.querySelector('.medicamentos-list').scrollTo({
        left: newPosition,
        behavior: 'smooth'
      });
    }
  };

  return (
    <div id="informacion-container">
      <header>
        <nav>
          <Navbat />
        </nav>
      </header>

      <div>
        <h2>ENFERMEDADES COMUNES</h2>
        <div className="enfermedades-container">
          {enfermedades.map((enfermedad) => (
            <button key={enfermedad.id} onClick={() => handleClickEnfermedad(enfermedad)} className="enfermedad-button">
              {enfermedad.nombre}
            </button>
          ))}
        </div>
      </div>

      {enfermedadSeleccionada && (
        <div className="medicamentos-container">
          <h2>Medicamentos para {enfermedadSeleccionada.nombre}:</h2>
          <div className="medicamentos-list">
            <ul>
              {medicamentosPorEnfermedad[enfermedadSeleccionada.id].slice(currentMedicamentoIndex, currentMedicamentoIndex + 2).map((medicamento) => (
                <li key={medicamento.id}>
                  <div className="medicamento-nombre">Nombre: {medicamento.nombre}</div>
                  <div className="medicamento-frecuencia">Frecuencia: {medicamento.frecuencia}</div>
                  <div className="medicamento-precio">Precio: {medicamento.precio}</div>
                </li>
              ))}
            </ul>
          </div>
          <div className="buttons-container">
            <button onClick={handlePrev}>Anterior</button>
            <button onClick={handleNext}>Siguiente</button>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
}
