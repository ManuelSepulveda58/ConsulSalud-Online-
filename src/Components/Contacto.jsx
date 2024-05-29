import React from 'react';
import Navbat from './Navbat';
import Footer from './Footer';
import './Contacto.css';

export function Contacto() {
  return (
    <div id="contacto-container">
      <header>
        <nav>
          <Navbat />
        </nav>
      </header>

      <div id="mision-vision">
        <h2>Misión</h2>
        <p><strong>
          En Consusalud Online, nos comprometemos a proporcionar información confiable, actualizada y accesible sobre medicamentos y las enfermedades que pueden tratar. Nuestro objetivo es empoderar a los usuarios con el conocimiento necesario para tomar decisiones informadas sobre su salud y bienestar, promoviendo una mejor calidad de vida a través del acceso a recursos de salud verificables y comprensibles.
        </strong></p>

        <h2>Visión</h2>
        <p><strong>
          Ser la fuente de referencia líder en información sobre medicamentos y enfermedades, reconocida por nuestra precisión, integridad y dedicación a la salud de la comunidad. Aspiramos a innovar continuamente en la entrega de contenidos médicos y educativos, contribuyendo a un mundo donde cada persona tenga la información necesaria para gestionar su salud de manera efectiva y segura.
        </strong></p>
      </div>

      <div id="contacto-info">
        <h2>Contacto</h2>
        <p><strong>Teléfono fijo:</strong> +123 456 7890</p>
        <p><strong>WhatsApp:</strong> +123 456 7890</p>
      </div>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
