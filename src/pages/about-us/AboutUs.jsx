import React, { useState, useEffect } from 'react';
import './AboutUs.css';
import photo from '../../../src/assets/profile-icon.jpg'

const AboutUs = () => {
  const [section, setSection] = useState('proposito');

  // Efecto para la animación de scroll horizontal
  useEffect(() => {
    if (section === 'proposito') {
      const sectionElement = document.querySelector('.section.proposito');
      sectionElement.classList.add('scroll-hint');
      setTimeout(() => {
        sectionElement.classList.remove('scroll-hint');
      }, 5000); // Duración de la animación
    }
  }, [section]);

  return (
    <div className="about-us-container">
      {/* Secciones */}
      <div className={`section proposito ${section === 'proposito' ? 'active' : ''}`}>
        <h2>Propósito</h2>
        <p>Nuestro objetivo es desarrollar una plataforma educativa interactiva que permita a los usuarios explorar enfermedades del cerebro de manera visual y envolvente. A través de modelos 3D y contenido informativo, buscamos mejorar la comprensión de estas condiciones, facilitando el aprendizaje sobre sus causas, síntomas, tratamientos y prevención.</p>
      </div>

      <div className={`section equipo ${section === 'equipo' ? 'active' : ''}`}>
        <h2>Equipo de Desarrollo</h2>
        <div className="team-members">
          <div className="member">
            <img src={photo} alt="Fabian Andres Camayo Pesas" />
            <p>Fabian Andres Camayo Pesas</p>
          </div>
          <div className="member">
            <img src={photo} alt="Maycol Andrey Galarza" />
            <p>Maycol Andrey Galarza</p>
          </div>
          <div className="member">
            <img src={photo} alt="Brayan Antonio Hurtado" />
            <p>Brayan Antonio Hurtado</p>
          </div>
          <div className="member">
            <img src={photo} alt="Jonathan Tabares Escobar" />
            <p>Jonathan Tabares Escobar</p>
          </div>
          <div className="member">
            <img src={photo} alt="Andres Felipe Martinez" />
            <p>Andres Felipe Martinez</p>
          </div>
        </div>
      </div>

      {/* Navegación con puntos */}
      <div className="dots-navigation">
        <span
          className={`dot ${section === 'proposito' ? 'active' : ''}`}
          onClick={() => setSection('proposito')}
        ></span>
        <span
          className={`dot ${section === 'equipo' ? 'active' : ''}`}
          onClick={() => setSection('equipo')}
        ></span>
      </div>
    </div>
  );
};

export default AboutUs;