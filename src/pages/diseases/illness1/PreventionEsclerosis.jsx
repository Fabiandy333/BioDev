import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text } from "@react-three/drei";
import { useState } from "react";
import EsclerosisModel2 from "../../diseases/models-3d/EsclerosisModel2"; 

const PreventionEsclerosis = ({ title, description }) => {
  const navigate = useNavigate();

  const [isRotating, setIsRotating] = useState(true); 

  const handleBackClick = () => {
    navigate("/enfermedades");
  };

  const goToNext = () => {
    navigate("/enfermedades/esclerosis/autocuidado");
  };

  const handlePauseClick = () => {
    setIsRotating(!isRotating);
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
          <div className="esclerosis-model-canvas">
            <Canvas
              camera={{ position: [0, 0, 15], fov: 50 }}
              shadows 
            >
              <ambientLight intensity={2.2} />
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
                skyColor={"#ffffff"}
                groundColor={"#cccccc"}
                intensity={0.1}
              />
              <OrbitControls enableZoom={false} enablePan={false} />
              <EsclerosisModel2
                isRotating={isRotating}
                setIsRotating={setIsRotating}
              />
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -5, 0]}
                receiveShadow
              >
                <planeGeometry args={[20, 20]} />
                <shadowMaterial opacity={0.4} />
              </mesh>

              <mesh position={[0, 5, 0]} onClick={handlePauseClick}>
                <planeGeometry args={[4, 1]} />
                <meshBasicMaterial color="blue" />
              </mesh>

              <Text
                position={[0, 5, 0.01]}
                fontSize={0.5}
                color="white"
                anchorX="center"
                anchorY="middle"
              >
                {isRotating ? "Pausa" : "Reanudar"}
              </Text>
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

      {/* Texto explicativo fijo */}
      <div className="instruction-text">
        <p>
          <strong>Instrucciones:</strong>
        </p>
        <p>
          <p>Haz clic en el modelo para pausar la rotación.</p>
          <p>Puedes rotar el modelo mientras este en pausa.</p>
          <p>Usa las flechas del teclado para rotarlo.</p>
          <p>Haz clic nuevamente para reanudar el movimiento.</p>
        </p>
      </div>
    </div>
  );
};

export default PreventionEsclerosis;
