import React, { useState } from 'react';
import Navbat from './Navbat';
import Footer from './Footer';

export function Informacion() {
  // Estado para almacenar la enfermedad seleccionada
  const [enfermedadSeleccionada, setEnfermedadSeleccionada] = useState(null);

  // Datos de enfermedades y medicamentos
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
    ],
    2: [
      { id: 3, nombre: 'Antigripal', frecuencia: 'Cada 12 horas', precio: 6000.00 },
      { id: 15, nombre: 'Ventolin', frecuencia: 'Según indicación médica', precio: 7500.00 },
    ],
    3: [
      { id: 5, nombre: 'Ibuprofeno', frecuencia: 'Cada 6 horas', precio: 8000.00 },
      { id: 6, nombre: 'Paracetamol', frecuencia: 'Cada 8 horas', precio: 7000.00 },
    ],
    4: [
      { id: 4, nombre: 'Omeprazol', frecuencia: 'Diariamente', precio: 8000.00 },
      { id: 13, nombre: 'Ranitidina', frecuencia: 'Diariamente', precio: 8500.00 },
    ],
    5: [
      { id: 16, nombre: 'Enalapril', frecuencia: 'Diariamente', precio: 8500.00 },
      { id: 17, nombre: 'Warfarina', frecuencia: 'Diariamente', precio: 10500.00 },
    ],
    6: [
      { id: 6, nombre: 'Insulina', frecuencia: 'Según indicación médica', precio: 15000.00 },
      { id: 14, nombre: 'Metformina', frecuencia: 'Diariamente', precio: 9500.00 },
    ],
    7: [
      { id: 7, nombre: 'Salbutamol', frecuencia: 'Cada 4 horas', precio: 7000.00 },
      { id: 15, nombre: 'Ventolin', frecuencia: 'Según indicación médica', precio: 7500.00 },
    ],
    8: [
      { id: 8, nombre: 'Ibuprofeno', frecuencia: 'Cada 8 horas', precio: 5000.00 },
      { id: 9, nombre: 'Prednisona', frecuencia: 'Diariamente', precio: 9000.00 },
    ],
    9: [
      { id: 10, nombre: 'Cetirizina', frecuencia: 'Diariamente', precio: 6000.00 },
      { id: 12, nombre: 'Loratadina', frecuencia: 'Diariamente', precio: 7000.00 },
    ],
    10: [
      { id: 11, nombre: 'Melatonina', frecuencia: 'Diariamente', precio: 10000.00 },
      { id: 20, nombre: 'Rivotril', frecuencia: 'Según indicación médica', precio: 12000.00 },
    ]
    // Añade más medicamentos según sea necesario
  };

  // Función para manejar el clic en un botón de enfermedad
  const handleClickEnfermedad = (enfermedad) => {
    setEnfermedadSeleccionada(enfermedad);
  };

  return (
    <div>
      <header>
        <nav>
          <Navbat />
        </nav>
      </header>

      <div>
        <h2>Seleccione una enfermedad:</h2>
        {/* Mapeamos las enfermedades para mostrar botones */}
        {enfermedades.map((enfermedad) => (
          <button key={enfermedad.id} onClick={() => handleClickEnfermedad(enfermedad)}>
            {enfermedad.nombre}
          </button>
        ))}
      </div>

      {/* Mostramos los medicamentos si se ha seleccionado una enfermedad */}
      {enfermedadSeleccionada && (
        <div>
          <h2>Medicamentos para {enfermedadSeleccionada.nombre}:</h2>
          <ul>
            {/* Verificamos si hay medicamentos asociados */}
            {medicamentosPorEnfermedad[enfermedadSeleccionada.id] &&
              medicamentosPorEnfermedad[enfermedadSeleccionada.id].map((medicamento) => (
                <li key={medicamento.id}>
                  Nombre: {medicamento.nombre}, Frecuencia: {medicamento.frecuencia}, Precio: {medicamento.precio}
                </li>
              ))}
          </ul>
        </div>
      )}
      <Footer/>
    </div>
  );
}



