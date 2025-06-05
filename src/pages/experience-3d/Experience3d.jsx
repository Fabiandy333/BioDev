import React, { useState } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Brain2 from "../../pages/diseases/models-3d/Brain2"; // Modelo de cerebro
import AcvModel3 from "../../pages/diseases/models-3d/AcvModel3"; // Agregar otros modelos aquí
import AlzheimerModel3 from "../../pages/diseases/models-3d/AlzheimerModel3";
import EsclerosisModel3 from "../../pages/diseases/models-3d/EsclerosisModel3";
import MigraineModel3 from "../../pages/diseases/models-3d/MigraineModel3";
import Staging from "../staging/Staging";
import './Experience3d.css';

const Experience3d = () => {
  const [startExperience, setStartExperience] = useState(false); // Si la experiencia ha comenzado
  const [model, setModel] = useState('brain'); // Controlar el modelo actual que se está mostrando

  const handleStartClick = () => {
    setStartExperience(true); // Al hacer clic, se inicia la experiencia
  };

  const handleBackClick = () => {
    if (model === 'migraine') {
      setModel('esclerosis'); // Si estamos en Migraine, volver a Esclerosis
    } else if (model === 'esclerosis') {
      setModel('alzheimer'); // Si estamos en Esclerosis, volver a Alzheimer
    } else if (model === 'alzheimer') {
      setModel('acv'); // Si estamos en Alzheimer, volver a ACV
    } else {
      setStartExperience(false); // Si no estamos en ninguno de esos modelos, volver al inicio
    }
  };

  const handleNextClick = () => {
    if (model === 'brain') {
      setModel('acv'); // Cambiar al modelo ACV
    } else if (model === 'acv') {
      setModel('alzheimer'); // Cambiar al modelo Alzheimer
    } else if (model === 'alzheimer') {
      setModel('esclerosis'); // Cambiar al modelo Esclerosis
    } else if (model === 'esclerosis') {
      setModel('migraine'); // Cambiar al modelo Migraña
    }
  };

  return (
    <div className={`experience3d-container ${startExperience ? 'full-screen' : ''}`}>
      {/* Mostrar texto solo si la experiencia no ha comenzado */}
      {!startExperience && (
        <div className="experience3d-text">
          <h1 className="experience3d-heading">Bienvenido a la experiencia 3D</h1>
        </div>
      )}

      {/* Flecha de regreso */}
      {startExperience && (
        <div className="back-button-container">
          <img 
            src="/back.png" 
            alt="Regresar" 
            className="back-button" 
            onClick={handleBackClick} 
          />
        </div>
      )}

      {/* El modelo 3D centrado en la pantalla */}
      <div className={`experience3d-canvas ${startExperience ? 'full-screen-canvas' : ''}`}>
        <Canvas camera={{ position: [0, 1, 5], fov: 75 }}>
          {/* Solo añadir Staging (Environment) si la experiencia ha comenzado */}
          {startExperience && <Staging />}
          
          {/* Mostrar el modelo Brain2 solo si no se ha comenzado la experiencia */}
          {!startExperience && <Brain2 scale={2} />}
          
          {/* Condicionalmente mostrar el modelo basado en el estado 'model' */}
          {startExperience && model === 'acv' && <AcvModel3 />}
          {startExperience && model === 'alzheimer' && <AlzheimerModel3 />}
          {startExperience && model === 'esclerosis' && <EsclerosisModel3 />}
          {startExperience && model === 'migraine' && <MigraineModel3 />}
          
          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <directionalLight position={[0, -3, 5]} intensity={1.5} />
          <directionalLight position={[0, 0, -5]} intensity={1.2} />
          <directionalLight position={[-5, 2, 4]} intensity={1.5} />
          <OrbitControls enableZoom={false} enablePan={true} />
        </Canvas>
      </div>

      {/* Mostrar botón solo si la experiencia no ha comenzado */}
      {!startExperience && (
        <div className="experience3d-button">
          <button className="experience3d-btn" onClick={handleStartClick}>
            Comenzar experiencia
          </button>
        </div>
      )}

      {/* Flecha de "Siguiente" solo se muestra si la experiencia ha comenzado y el modelo no es Migraña */}
      {startExperience && model !== 'migraine' && (
        <div className="next-button-container">
          <img 
            src="/next.png" 
            alt="Siguiente modelo" 
            className="next-button" 
            onClick={handleNextClick} 
          />
        </div>
      )}
    </div>
  );
};

export default Experience3d;
