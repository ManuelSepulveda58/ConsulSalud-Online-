import React, { useEffect, useState } from 'react';
import { obtenerDatos } from './Server'; 
import Navbat from './Navbat';

export function Informacion() {
  const [medicamentos, setMedicamentos] = useState([]);
  const [enfermedades, setEnfermedades] = useState([]);

  useEffect(() => {
    async function fetchData() {
      try {
        const { medicamentos, enfermedades } = await obtenerDatos();
        setMedicamentos(medicamentos);
        setEnfermedades(enfermedades);
      } catch (error) {
        console.error('Error al obtener los datos:', error);
      }
    }

    fetchData();
  }, []);

  return (
    <div>
      <header>
        <nav>
          <Navbat/>
        </nav>
      </header>

      <div>
        <h2>Medicamentos</h2>
        <ul>
          {medicamentos.map(medicamento => (
            <li key={medicamento.ID_Medicamento}>{medicamento.Nombre_Medicamento}</li>
          ))}
        </ul>
      </div>

      <div>
        <h2>Enfermedades</h2>
        <ul>
          {enfermedades.map(enfermedad => (
            <li key={enfermedad.ID_Enfermedad}>{enfermedad.Nombre_Enfermedad}</li>
          ))}
        </ul>
      </div>
    </div>
  );
}
