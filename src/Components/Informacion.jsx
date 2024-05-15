import React, { useState, useEffect } from 'react';
import Navbat from './Navbat';

export function Informacion() {
  // Estado para almacenar las enfermedades obtenidas de la consulta SQL
  const [enfermedades, setEnfermedades] = useState([]);

  // Función para manejar el clic en un botón de enfermedad
  const handleClickEnfermedad = (idEnfermedad) => {
    // Aquí podrías implementar la lógica para mostrar los medicamentos asociados a la enfermedad
    console.log('Se hizo clic en la enfermedad con ID:', idEnfermedad);
  };

  // Simular el efecto de montaje para cargar las enfermedades cuando el componente se monta
  useEffect(() => {
    // Aquí realizarías la lógica para obtener las enfermedades desde tu consulta SQL
    // Por ahora, usaremos datos de ejemplo
    const enfermedadesEjemplo = [
      { idEnfermedad: 1, nombreEnfermedad: 'Resfriado común' },
      { idEnfermedad: 2, nombreEnfermedad: 'Gripe' },
      { idEnfermedad: 3, nombreEnfermedad: 'Dolor de cabeza' },
      // Agrega más enfermedades según sea necesario
    ];

    // Establecer las enfermedades en el estado
    setEnfermedades(enfermedadesEjemplo);
  }, []); // El efecto de montaje se ejecutará solo una vez al montar el componente

  return (
    <div>
      <header>
        <nav>
          <Navbat />
        </nav>
      </header>

      <div>
        <h2>Seleccione una enfermedad:</h2>
        <ul>
          {/* Mapear las enfermedades y mostrarlas como botones */}
          {enfermedades.map((enfermedad) => (
            <li key={enfermedad.idEnfermedad}>
              <button onClick={() => handleClickEnfermedad(enfermedad.idEnfermedad)}>
                {enfermedad.nombreEnfermedad}
              </button>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}
