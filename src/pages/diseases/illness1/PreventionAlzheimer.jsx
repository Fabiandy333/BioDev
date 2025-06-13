// src/components/PreventionAlzheimer.jsx
import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Text3D, Html, Center } from "@react-three/drei";
import { useState } from "react";
import AlzheimerModel2 from "../../diseases/models-3d/AlzheimerModel2";

const PreventionAlzheimer = ({ title, description }) => {
  const navigate = useNavigate();
  const [isRotating, setIsRotating] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const handleBackClick = () => navigate("/enfermedades");
  const goToNext = () => navigate("/enfermedades/alzheimer/tratamiento");
  const handlePauseClick = () => setIsRotating(!isRotating);

  return (
    <div className="symptoms-container">
      <header className="symptoms-header">
        <h1>{title}</h1>
      </header>
      <div className="return-button-container">
        <img
          src="/back.png"
          alt="Regresar"
          className="back-arrow"
          onClick={handleBackClick}
        />
      </div>
      <main className="symptoms-content">
        <div className="symptom-left">
          <div className="alzheimer-model-canvas">
            <Canvas shadows camera={{ position: [0, 0, 6], fov: 50 }}>
              {/* Iluminación */}
              <ambientLight intensity={0.5} />
              <directionalLight
                position={[5, 5, 5]}
                intensity={2.5}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0001}
                shadow-radius={10}
              />
              <pointLight position={[0, 5, 0]} intensity={0.5} castShadow />
              <hemisphereLight
                skyColor="#ffffff"
                groundColor="#cccccc"
                intensity={0.1}
              />

              {/* Controles */}
              <OrbitControls enableZoom={false} enablePan={false} />

              {/* Modelo 3D */}
              <AlzheimerModel2
                isRotating={isRotating}
                setIsRotating={setIsRotating}
              />

              {/* Botón Pausa/Reanudar */}
              <mesh position={[0, 2, 0]} onClick={handlePauseClick}>
                <planeGeometry args={[1.5, 0.5]} />
                <meshBasicMaterial color="blue" />
              </mesh>
              <Text
                position={[0, 2, 0.01]}
                fontSize={0.2}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {isRotating ? "Pausa" : "Reanudar"}
              </Text>

              {/* Info icon y tooltip */}
              <Html position={[-2.2, 1.7, 0]}>
                <img
                  src="/info.png"
                  alt="Información"
                  style={{
                    width: "32px",
                    height: "auto",
                    cursor: "pointer",
                    zIndex: 1001,
                  }}
                  onClick={() => setShowInfo(v => !v)}
                />
                {showInfo && (
                  <div style={{ /* mismos estilos que en SymptomsAlzheimer */ }}>
                    {/* …instrucciones… */}
                  </div>
                )}
              </Html>

              {/* Sombra */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -5, 0]}
                receiveShadow
              >
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.4} />
              </mesh>

              {/* --- TEXTO 3D ABAJO: "¿Qué sientes?" --- */}
              <Center position={[0, -2.7, 0]}>
                <Text3D
                  font="/fonts/helvetiker_regular_typeface.json"
                  size={0.20}
                  height={0.05}
                  curveSegments={12}
                  bevelEnabled
                  bevelThickness={0.02}
                  bevelSize={0.015}
                  bevelOffset={0}
                  bevelSegments={4}
                >
                  Que sientes
                  <meshStandardMaterial attach="material" color="#ff6cec" />
                  <meshStandardMaterial attach="material-1" color="#3b0056" />
                </Text3D>
              </Center>
            </Canvas>
          </div>
        </div>

        <div className="symptom-right">
          <p>{description}</p>
          <button onClick={goToNext} className="next-button">
            <img src="/next.png" alt="Siguiente" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default PreventionAlzheimer;
