// src/components/SymptomsAlzheimer.jsx
import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Html } from "@react-three/drei";
import { useState } from "react";
import AlzheimerModel from "../../diseases/models-3d/AlzheimerModel";

const SymptomsAlzheimer = () => {
  const navigate = useNavigate();
  const [isRotating, setIsRotating] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const handleBackClick = () => navigate("/enfermedades");
  const goToNext = () => navigate("/enfermedades/alzheimer/sintomas");
  const handlePauseClick = () => setIsRotating(!isRotating);

  return (
    <div className="symptoms-container">
      <header className="symptoms-header">
        <h1>Enfermedad de Alzheimer</h1>
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

              {/* --- TEXTO 2D encima del modelo: "¿Olvido?" --- */}
              <Text
                position={[0, 2.5, 0]}
                fontSize={0.5}
                color="blue"
                anchorX="center"
                anchorY="middle"
                font="/fonts/Beautiful_Valentine.otf"
              >
                ¿Olvido?
              </Text>

              {/* Modelo 3D */}
              <AlzheimerModel
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
                  <div
                    style={{
                      marginTop: "8px",
                      background: "rgba(255,255,255,0.98)",
                      border: "1.5px solid #bbb",
                      borderRadius: "12px",
                      boxShadow: "0 6px 16px rgba(80,80,80,0.09)",
                      color: "#222",
                      fontSize: "0.70rem",
                      padding: "1.1rem 1rem",
                      width: "290px",
                      maxWidth: "300px",
                      textAlign: "left",
                      position: "absolute",
                      left: "0",
                      top: "34px",
                      zIndex: 1100,
                      userSelect: "text",
                    }}
                  >
                    <b>Instrucciones:</b>
                    <ul style={{ margin: "0.4em 0 0 1.1em", padding: 0 }}>
                      <li>
                        <b>Haz clic</b> en el modelo para pausar o reanudar la rotación.
                      </li>
                      <li>
                        <b>Pasa el mouse</b> sobre el modelo para resaltarlo de color azul.
                      </li>
                      <li>Puedes rotar el modelo mientras esté en pausa.</li>
                      <li>Usa las flechas del teclado para rotarlo.</li>
                      <li>
                        Pulsa la tecla <b>R</b> para restablecer la posición del modelo.
                      </li>
                      <li>
                        Haz <b>doble clic</b> sobre el modelo para hacer zoom en esa zona. Haz doble clic de nuevo para volver.
                      </li>
                      <li>
                        Pulsa la <b>barra espaciadora</b> para aumentar o reducir el tamaño del modelo.
                      </li>
                      <li>
                        <span style={{ color: "#2e54a9", fontWeight: 500 }}>
                          Haz clic en el icono{" "}
                          <img src="/info.png" alt="info" width={18} style={{ verticalAlign: "middle" }} />{" "}
                          para cerrar.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </Html>

              {/* Plano receptor de sombras */}
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
            El Alzheimer es una enfermedad neurodegenerativa progresiva que
            afecta principalmente la memoria, el pensamiento y el comportamiento.
            Es la forma más común de demencia y suele empezar con síntomas
            leves, como olvidos frecuentes y dificultades para recordar
            información reciente. Con el tiempo, la enfermedad avanza y provoca
            problemas más graves, como la pérdida de la capacidad para realizar
            actividades cotidianas, desorientación, cambios de personalidad y
            dificultades para reconocer a las personas cercanas.
          </p>
          <button onClick={goToNext} className="next-button">
            <img src="/next.png" alt="Siguiente" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SymptomsAlzheimer;
