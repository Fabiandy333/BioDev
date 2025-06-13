// src/components/SymptomsACV.jsx
import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Html } from "@react-three/drei";
import { useState } from "react";
import AcvModel from "../../diseases/models-3d/AcvModel";

const SymptomsACV = () => {
  const navigate = useNavigate();
  const [isRotating, setIsRotating] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const handleBackClick = () => navigate("/enfermedades");
  const goToNext = () => navigate("/enfermedades/acv/sintomas");
  const handlePauseClick = () => setIsRotating(!isRotating);

  return (
    <div className="symptoms-container">
      <header className="symptoms-header">
        <h1>Accidente Cerebrovascular (ACV)</h1>
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
          <div className="acv-model-canvas">
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

              {/* --- TEXTO 2D encima del modelo: "ACV" --- */}
              <Text
                position={[0, 2.5, 0]}
                fontSize={0.5}
                color="blue"
                anchorX="center"
                anchorY="middle"
                font="/fonts/Beautiful_Valentine.otf"
              >
                ACV
              </Text>

              {/* Modelo 3D */}
              <AcvModel
                isRotating={isRotating}
                setIsRotating={setIsRotating}
              />

              {/* Botón 3D de pausa/reanudar */}
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

              {/* Instrucciones con icono */}
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
                  <div style={{ /* estilos idénticos a Migraine... */ }}>
                    {/* …contenido de instrucciones… */}
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
            </Canvas>
          </div>
        </div>

        <div className="symptom-right">
          <p>
            El ACV es una emergencia médica que ocurre cuando el flujo de sangre al
            cerebro se detiene, lo que puede causar daño cerebral irreversible si
            no se trata a tiempo. Los síntomas comunes incluyen debilidad repentina
            en un lado del cuerpo, dificultad para hablar, pérdida de equilibrio o
            visión borrosa.
          </p>
          <button onClick={goToNext} className="next-button">
            <img src="/next.png" alt="Siguiente" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SymptomsACV;
