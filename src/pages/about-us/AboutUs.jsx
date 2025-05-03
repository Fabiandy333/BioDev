import React, { useState } from 'react';
import './AboutUs.css';

const AboutUs = () => {
  const [currentSlide, setCurrentSlide] = useState(0);

  const slides = [
    {
      title: 'Propósito',
      type: 'text',
      content: `Nuestro objetivo es desarrollar una plataforma educativa interactiva que permita
a los usuarios explorar enfermedades del cerebro de manera visual y envolvente. A través de
modelos 3D y contenido informativo, buscamos mejorar la comprensión de estas condiciones, facilitando
el aprendizaje sobre sus causas, síntomas, tratamientos y prevención.`,
    },
    {
      title: 'Equipo Desarrollo',
      type: 'avatars',
      content: [
        'Fabian Andres Camayo Pesas',
        'Andres Felipe Martinez',
        'Brayan Antonio Hurtado',
        'Jonathan Tabares Escobar',
      ],
    },
  ];

  return (
    <div className="about-us">
      <div className="slide-container">
        <div key={currentSlide} className="slide fade-in">
          <h1>{slides[currentSlide].title}</h1>
          {slides[currentSlide].type === 'text' ? (
            <p style={{ whiteSpace: 'pre-line' }}>{slides[currentSlide].content}</p>
          ) : (
            <div className="avatar-grid">
              {slides[currentSlide].content.map((name, index) => (
                <div key={index} className="avatar-card">
                  <img src="/avatar.png" alt={name} className="avatar-image" />
                  <p className="avatar-name">{name}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="dots">
        {slides.map((_, index) => (
          <span
            key={index}
            className={`dot ${currentSlide === index ? 'active' : ''}`}
            onClick={() => setCurrentSlide(index)}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default AboutUs;
