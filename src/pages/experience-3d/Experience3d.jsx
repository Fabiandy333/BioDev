import React, { useState, useEffect } from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Brain2 from "../../pages/diseases/models-3d/Brain2";
import AcvModel3 from "../../pages/diseases/models-3d/AcvModel3";
import AlzheimerModel3 from "../../pages/diseases/models-3d/AlzheimerModel3";
import EsclerosisModel3 from "../../pages/diseases/models-3d/EsclerosisModel3";
import MigraineModel3 from "../../pages/diseases/models-3d/MigraineModel3";
import Staging from "../staging/Staging";
import Staging1 from "../staging/Staging1";
import Staging2 from "../staging/Staging2";
import './Experience3d.css';

const Experience3d = () => {
  const [startExperience, setStartExperience] = useState(false);
  const [scenario, setScenario] = useState(null); // null: aún no elegido, 'hospital1', 'hospital2', 'hospital3'
  const [model, setModel] = useState('brain');

  // Volver al menú principal desde el menú de escenarios
  const handleBackToMainMenu = () => {
    setStartExperience(false);
    setScenario(null);
    setModel('brain');
  };

  // Paso 1: Comenzar experiencia muestra menú de escenarios
  const handleStartClick = () => {
    setStartExperience(true);
  };

  // Paso 2: Seleccionar escenario (hospital)
  const handleScenarioSelect = (hospital) => {
    setScenario(hospital);
    setModel('acv'); // Comienza el recorrido en ACV
  };

  useEffect(() => {
    if (scenario && model === 'brain') {
      setModel('acv');
    }
  }, [scenario]);

  // Botón regresar retrocede modelos o vuelve al menú escenarios
  const handleBackClick = () => {
    if (model === 'acv') {
      setScenario(null); // Vuelve a elegir escenario
      setModel('brain');
    } else if (model === 'migraine') {
      setModel('esclerosis');
    } else if (model === 'esclerosis') {
      setModel('alzheimer');
    } else if (model === 'alzheimer') {
      setModel('acv');
    }
  };

  // Siguiente modelo
  const handleNextClick = () => {
    if (model === 'acv') setModel('alzheimer');
    else if (model === 'alzheimer') setModel('esclerosis');
    else if (model === 'esclerosis') setModel('migraine');
  };

  // Título
  const getModelTitle = () => {
    switch (model) {
      case 'acv': return "Accidente Cerebro Vascular";
      case 'alzheimer': return "Alzheimer";
      case 'esclerosis': return "Esclerosis Múltiple";
      case 'migraine': return "Migraña";
      default: return "";
    }
  };

  // Menú elegir escenario
  if (startExperience && !scenario) {
    return (
      <div className="exp3d-container full-screen">
        {/* Flecha de regreso en menú de escenarios */}
        <div className="exp3d-menu-back-btn-container">
          <img
            src="/back2.png"
            alt="Volver"
            className="exp3d-menu-back-btn"
            onClick={handleBackToMainMenu}
          />
        </div>
        <h2 className="exp3d-heading" style={{marginTop: "2.5rem"}}>Elegir escenario</h2>
        <div className="scenario-menu">
          <div className="scenario-card" onClick={() => handleScenarioSelect('hospital1')}>
            <img src="/Hospital.png" alt="Hospital 1" className="scenario-img" />
            <div className="scenario-title">Hospital 1</div>
          </div>
          <div className="scenario-card" onClick={() => handleScenarioSelect('hospital2')}>
            <img src="/Hospital1.png" alt="Hospital 2" className="scenario-img" />
            <div className="scenario-title">Hospital 2</div>
          </div>
          {/* Hospital 3 */}
          <div className="scenario-card" onClick={() => handleScenarioSelect('hospital3')}>
            <img src="/Hospital3.png" alt="Hospital 3" className="scenario-img" />
            <div className="scenario-title">Hospital 3</div>
          </div>
        </div>
      </div>
    );
  }

  // Pantalla normal: experiencia
  return (
    <div className={`exp3d-container ${startExperience && scenario ? 'full-screen' : ''}`}>
      {!startExperience && (
        <div className="exp3d-text">
          <h1 className="exp3d-heading">Bienvenido a la experiencia 3D</h1>
        </div>
      )}

      {startExperience && scenario && (
        <div className="exp3d-back-btn-container">
          <img 
            src="/back1.png" 
            alt="Regresar" 
            className="exp3d-back-btn" 
            onClick={handleBackClick} 
          />
        </div>
      )}

      {/* AQUÍ EL CAMBIO: clase dinámica por escenario */}
      {startExperience && scenario && (
        <div className={`exp3d-model-title ${scenario}`}>
          <h2>{getModelTitle()}</h2>
        </div>
      )}

      <div className={`exp3d-canvas ${startExperience && scenario ? 'full-screen-canvas' : ''}`}>
        <Canvas
          key={scenario || "no-scenario"}
          camera={{ position: [0, 1, 5], fov: 75 }}
        >
          {/* Escenario depende de la selección */}
          {startExperience && scenario === 'hospital1' && <Staging />}
          {startExperience && scenario === 'hospital2' && <Staging1 />}
          {startExperience && scenario === 'hospital3' && <Staging2 />}

          {(model === 'brain') && <Brain2 scale={2} />}
          {startExperience && scenario && model === 'acv' && <AcvModel3 />}
          {startExperience && scenario && model === 'alzheimer' && <AlzheimerModel3 />}
          {startExperience && scenario && model === 'esclerosis' && <EsclerosisModel3 />}
          {startExperience && scenario && model === 'migraine' && <MigraineModel3 />}

          <ambientLight intensity={1.5} />
          <directionalLight position={[5, 5, 5]} intensity={3} />
          <directionalLight position={[0, -3, 5]} intensity={1.5} />
          <directionalLight position={[0, 0, -5]} intensity={1.2} />
          <directionalLight position={[-5, 2, 4]} intensity={1.5} />
          <OrbitControls enableZoom={false} enablePan={true} />
        </Canvas>
      </div>

      {!startExperience && (
        <div className="exp3d-button">
          <button className="exp3d-btn" onClick={handleStartClick}>
            Comenzar experiencia
          </button>
        </div>
      )}

      {startExperience && scenario && model !== 'migraine' && (
        <div className="exp3d-next-btn-container">
          <img 
            src="/next1.png" 
            alt="Siguiente modelo" 
            className="exp3d-next-btn" 
            onClick={handleNextClick} 
          />
        </div>
      )}
    </div>
  );
};

export default Experience3d;
