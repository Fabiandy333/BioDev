import React from 'react';
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import Brain2 from "../../pages/diseases/models-3d/Brain2"; // Asegúrate de que la ruta sea correcta
import './Experience3d.css';

const Experience3d = () => {
  return (
    <div className="experience3d-container">
      <div className="experience3d-text">
        <h1 className="experience3d-heading">Bienvenido a la experiencia 3D</h1>
      </div>

      <div className="experience3d-canvas">
        <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
          <Brain2 scale={1.5} rotate={false} />
          <ambientLight intensity={2.2} />
          <directionalLight position={[5, 5, 5]} intensity={2.5} />
          <directionalLight position={[0, -3, 5]} intensity={1.8} />
          <directionalLight position={[0, 0, -5]} intensity={1.2} />
          <directionalLight position={[-5, 2, 4]} intensity={1.5} />
          <OrbitControls enableZoom={false} enablePan={false} />
        </Canvas>
      </div>

      <div className="experience3d-button">
        <button className="experience3d-btn">Comenzar experiencia</button>
      </div>
    </div>
  );
}

export default Experience3d;
