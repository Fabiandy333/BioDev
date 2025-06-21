import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";

import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Html, Text3D, Center } from "@react-three/drei";
import { useState } from "react";
import AcvModel5 from "../../diseases/models-3d/AcvModel5";

const SelfCareACV = ({ title, description, imageLeft, imageRight }) => {
  const navigate = useNavigate();
  const [isRotating, setIsRotating] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  const handleBackClick = () => {
    navigate("/enfermedades/acv/tratamiento");
  };

  const handlePauseClick = () => setIsRotating((v) => !v);

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
          {/* Canvas con modelo 3D de ACV */}
          <div className="acv-model-canvas">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }} shadows>
              <OrbitControls enableZoom={false} enablePan={false} />

              {/* Texto 3D extruido al fondo */}
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
                  Autocuidado
                  <meshStandardMaterial attach="material" color="#ff6cec" />
                  <meshStandardMaterial attach="material-1" color="#3b0056" />
                </Text3D>
              </Center>

              {/* Modelo 3D */}
              <AcvModel5
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

              {/* Icono de información */}
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
                  onClick={() => setShowInfo((v) => !v)}
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
                      fontSize: "1rem",
                      padding: "1.2rem",
                      width: "290px",
                      maxWidth: "340px",
                      textAlign: "left",
                      position: "absolute",
                      left: "0",
                      top: "34px",
                      zIndex: 1100,
                      userSelect: "text",
                    }}
                  >
                    <b>Instrucciones:</b>
                    <ul style={{ margin: "0.4em 0 0 1.2em", padding: 0 }}>
                      <li>
                        Haz clic en el modelo para pausar y reanudar la rotación.
                      </li>
                      <li>Puedes rotar el modelo mientras esté en pausa.</li>
                      <li>Usa las flechas del teclado para rotarlo.</li>
                      <li>
                        Pulsa la tecla <b>R</b> para restablecer la posición del
                        modelo.
                      </li>
                      <li>
                        Haz <b>doble clic</b> sobre el modelo para hacer zoom en
                        esa zona. Haz doble clic de nuevo para volver.
                      </li>
                      <li>
                        <span style={{ color: "#2e54a9", fontWeight: 500 }}>
                          Haz clic en el icono{" "}
                          <img
                            src="/info.png"
                            alt="info"
                            width={18}
                            style={{ verticalAlign: "middle" }}
                          />{" "}
                          para cerrar.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </Html>

              {/* Sombra debajo del modelo */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -2, 0]}
                receiveShadow
              >
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.4} />
              </mesh>
            </Canvas>
          </div>
        </div>

        <div className="symptom-right">
          <p>{description}</p>
        </div>
      </main>
    </div>
  );
};

export default SelfCareACV;
