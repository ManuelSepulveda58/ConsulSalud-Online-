import React from 'react';
import Navbat from './Navbat';

// Estilos en línea para el componente Inicio
const styles = {
  inicioContainer: {
    display: 'flex',
    flexDirection: 'column',
    alignItems: 'center',
  },
  carouselContainer: {
    width: '80%',
    marginTop: '20px',
  },
  carousel: {
    width: '100%',
  },
  carouselItemImg: {
    margin: 'auto',
  },
  carouselCaption: {
    width: '80%',
    margin: 'auto',
  },
};

export function Inicio() {
  return (
    <div style={styles.inicioContainer}>
      <header>
        <nav>
          <Navbat />
        </nav>
      </header>
      <div style={styles.carouselContainer}>
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
            <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
          </div>
          <div className="carousel-inner">
            {/* Sección 1 */}
            <div className="carousel-item active">
              <img src="imagen1.jpg" className="d-block w-100" alt="Primera imagen" style={styles.carouselItemImg} />
              <div className="carousel-caption d-none d-md-block" style={styles.carouselCaption}>
                <h5>Primera imagen</h5>
                <p>Descripción de la primera imagen.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="imagen2.jpg" className="d-block w-100" alt="Segunda imagen" style={styles.carouselItemImg} />
              <div className="carousel-caption d-none d-md-block" style={styles.carouselCaption}>
                <h5>Segunda imagen</h5>
                <p>Descripción de la segunda imagen.</p>
              </div>
            </div>
            <div className="carousel-item">
              <img src="imagen3.jpg" className="d-block w-100" alt="Tercera imagen" style={styles.carouselItemImg} />
              <div className="carousel-caption d-none d-md-block" style={styles.carouselCaption}>
                <h5>Tercera imagen</h5>
                <p>Descripción de la tercera imagen.</p>
              </div>
            </div>
          </div>
          <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
          <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </div>
    </div>
  );
}

