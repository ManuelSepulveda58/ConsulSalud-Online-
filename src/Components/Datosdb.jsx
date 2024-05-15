// Datosdb.jsx

import React, { useState } from 'react';

export function Datosdb() {
  const enfermedadesDB = [
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
      { id: 5, nombre: 'Medicamento E para el dolor de cabeza', frecuencia: 'Según indicación médica', precio: 0.00 },
      { id: 6, nombre: 'Medicamento F para el dolor de cabeza', frecuencia: 'Según indicación médica', precio: 0.00 },
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
    ],
};


  // Estado para almacenar los medicamentos mostrados actualmente
  const [medicamentosMostrados, setMedicamentosMostrados] = useState([]);

  // Función para manejar el clic en los botones de enfermedades
  const handleClickEnfermedad = (idEnfermedad) => {
    // Filtrar los medicamentos correspondientes a la enfermedad seleccionada
    const medicamentos = medicamentosPorEnfermedad[idEnfermedad] || [];
    // Actualizar el estado de los medicamentos mostrados
    setMedicamentosMostrados(medicamentos);
  };

  return (
    <div>
      <h2>Seleccione una enfermedad:</h2>
      <ul>
        {enfermedadesDB.map((enfermedad) => (
          <li key={enfermedad.id}>
            <button onClick={() => handleClickEnfermedad(enfermedad.id)}>{enfermedad.nombre}</button>
          </li>
        ))}
      </ul>
      
      <h2>Medicamentos para la enfermedad seleccionada:</h2>
      <ul>
        {medicamentosMostrados.map((medicamento) => (
          <li key={medicamento.id}>{medicamento.nombre}</li>
        ))}
      </ul>
    </div>
  );
}


