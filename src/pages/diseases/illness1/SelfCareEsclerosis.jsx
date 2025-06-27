import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import {
  OrbitControls,
  Text,
  Html,
  Text3D,
  Center,
  Cloud,
} from "@react-three/drei";
import { useState } from "react";
import EsclerosisModel5 from "../../diseases/models-3d/EsclerosisModel5";

const SelfCareEsclerosis = ({ title, description }) => {
  const navigate = useNavigate();
  const [isRotating, setIsRotating] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  // Estado para texto editable 3D y su input
  const [customText, setCustomText] = useState("Mantener actividad fisica");
  const [inputValue, setInputValue] = useState("");

  const handleBackClick = () => {
    navigate("/enfermedades/esclerosis/tratamiento");
  };

  const handlePauseClick = () => setIsRotating((v) => !v);

  // Cambia el texto al presionar Enter
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setCustomText(inputValue);
      setInputValue("");
    }
  };

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
          {/* Canvas con modelo 3D de Esclerosis */}
          <div className="esclerosis-model-canvas">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }} shadows>
              <OrbitControls enableZoom={false} enablePan={false} />

              {/* Modelo 3D */}
              <EsclerosisModel5
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

              {/* Icono de información y tarjeta instrucciones */}
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
                      fontSize: "0.80rem",
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
                        <b>Haz clic</b> en el modelo para pausar o reanudar la
                        rotación.
                      </li>
                      <li>
                        <b>Pasa el mouse</b> sobre el modelo para resaltarlo de
                        azul.
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
                        Pulsa la <b>barra espaciadora</b> para aumentar o
                        reducir el tamaño del modelo.
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

              {/* --- TEXTO 3D EXTRUIDO ABAJO: editable --- */}
              <Center position={[0, -3, 0]}>
                <Text3D
                  font="/fonts/helvetiker_regular_typeface.json"
                  size={0.28}
                  height={0.05}
                  curveSegments={12}
                  bevelEnabled
                  bevelThickness={0.02}
                  bevelSize={0.015}
                  bevelOffset={0}
                  bevelSegments={4}
                >
                  {customText}
                  <meshStandardMaterial attach="material" color="#8de3ff" />
                  <meshStandardMaterial attach="material-1" color="#035475" />
                </Text3D>
                {/* Input HTML 3D pegado cerca al texto extruido */}
                <Html position={[1, 1, 0]}>
                  <input
                    type="text"
                    placeholder="Cambia el texto"
                    style={{
                      padding: "7px 13px",
                      borderRadius: "8px",
                      border: "1px solid #bbb",
                      fontSize: "1rem",
                      outline: "none",
                      boxShadow: "0 2px 6px rgba(80,80,80,0.13)",
                      width: "180px",
                      marginBottom: "5px",
                      textAlign: "center",
                    }}
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyDown={handleInputKeyDown}
                  />
                </Html>
              </Center>
              <Cloud
                position={[0, 0, -1]}
                scale={1} // Tamaño general de la nube
                opacity={0.009} // Qué tan transparente es
                speed={0.1} // Movimiento sutil de la nube
                segments={720} // Qué tan detallada es (menos = más rendimiento)
                color="#7cc5f8"
              />
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

export default SelfCareEsclerosis;
