import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Html } from "@react-three/drei";
import { useState } from "react";
import EsclerosisModel from "../../diseases/models-3d/EsclerosisModel";

const SymptomsEsclerosis = () => {
  const navigate = useNavigate();
  const [isRotating, setIsRotating] = useState(true);
  const [showInfo, setShowInfo] = useState(false);

  // Texto editable y value del input
  const [customText, setCustomText] = useState("Debilidad Muscular");
  const [inputValue, setInputValue] = useState("");

  const handleBackClick = () => navigate("/enfermedades");
  const goToNext = () => navigate("/enfermedades/esclerosis/sintomas");
  const handlePauseClick = () => setIsRotating((v) => !v);

  // Actualizar texto 3D cuando el usuario presiona Enter
  const handleInputKeyDown = (e) => {
    if (e.key === "Enter" && inputValue.trim()) {
      setCustomText(inputValue);
      setInputValue("");
    }
  };

  return (
    <div className="symptoms-container">
      <header className="symptoms-header">
        <h1>Esclerosis Múltiple</h1>
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
          <div className="esclerosis-model-canvas">
            <Canvas camera={{ position: [0, 0, 30], fov: 50 }} shadows>
              <ambientLight intensity={2.2} />
              <directionalLight
                position={[0, -3, 5]}
                intensity={1.8}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0001}
                shadow-radius={10}
              />
              <OrbitControls enableZoom={false} enablePan={false} />

              {/* --- TEXTO 2D editable encima del modelo --- */}
              <Text
                position={[0, 8, 0]}
                fontSize={1}
                color="blue"
                anchorX="center"
                anchorY="middle"
                font="/fonts/Beautiful_Valentine.otf"
              >
                {customText}
              </Text>

              {/* Input HTML 3D para cambiar el texto */}
              <Html position={[-3, -5, 0]}>
                <input
                  type="text"
                  placeholder="Cambia el texto"
                  style={{
                    padding: "8px 12px",
                    borderRadius: "9px",
                    border: "1px solid #bbb",
                    fontSize: "1rem",
                    outline: "none",
                    boxShadow: "0 2px 6px rgba(80,80,80,0.12)",
                    width: "115px",
                    marginBottom: "4px",
                  }}
                  value={inputValue}
                  onChange={(e) => setInputValue(e.target.value)}
                  onKeyDown={handleInputKeyDown}
                />
              </Html>

              <EsclerosisModel
                isRotating={isRotating}
                setIsRotating={setIsRotating}
              />

              {/* Botón 3D Pausa/Reanudar */}
              <mesh position={[0, 5, 0]} onClick={handlePauseClick}>
                <planeGeometry args={[5, 2]} />
                <meshBasicMaterial color="blue" />
              </mesh>
              <Text
                position={[0, 5, 0.01]}
                fontSize={1}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {isRotating ? "Pausa" : "Reanudar"}
              </Text>

              {/* Info 3D HTML */}
              <Html position={[-8, 8, 0]}>
                <img
                  src="/info.png"
                  alt="Información"
                  style={{
                    width: "48px",
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
                      padding: "1.1rem 1rem",
                      width: "295px",
                      maxWidth: "330px",
                      textAlign: "left",
                      position: "absolute",
                      left: "0",
                      top: "54px",
                      zIndex: 1100,
                      userSelect: "text",
                    }}
                  >
                    <b>Instrucciones:</b>
                    <ul style={{ margin: "0.4em 0 0 1.1em", padding: 0 }}>
                      <li><b>Haz clic</b> en el modelo para pausar o reanudar la rotación.</li>
                      <li><b>Pasa el mouse</b> sobre el modelo para resaltarlo de azul.</li>
                      <li>Puedes rotar el modelo mientras esté en pausa.</li>
                      <li>Usa las flechas del teclado para rotarlo.</li>
                      <li>Pulsa la tecla <b>R</b> para restablecer la posición del modelo.</li>
                      <li>Haz <b>doble clic</b> sobre el modelo para hacer zoom en esa zona. Haz doble clic de nuevo para volver.</li>
                      <li>Pulsa la <b>barra espaciadora</b> para aumentar o reducir el tamaño del modelo.</li>
                      <li>
                        <span style={{ color: "#2e54a9", fontWeight: 500 }}>
                          Haz clic en el icono <img src="/info.png" alt="info" width={18} style={{ verticalAlign: "middle" }} /> para cerrar.
                        </span>
                      </li>
                    </ul>
                  </div>
                )}
              </Html>

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
            La esclerosis múltiple es una enfermedad crónica del sistema
            nervioso central que afecta el cerebro y la médula espinal. Se
            manifiesta con debilidad muscular, problemas de coordinación, visión
            borrosa y fatiga.
          </p>
          <button onClick={goToNext} className="next-button">
            <img src="/next.png" alt="Siguiente" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SymptomsEsclerosis;
