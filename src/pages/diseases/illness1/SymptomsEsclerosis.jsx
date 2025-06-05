import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Text, Environment } from "@react-three/drei";
import { useState } from "react";
import EsclerosisModel from "../../diseases/models-3d/EsclerosisModel";

const SymptomsEsclerosis = () => {
  const navigate = useNavigate();

  const [isRotating, setIsRotating] = useState(true);

  const handleBackClick = () => {
    navigate("/enfermedades");
  };

  const goToNext = () => {
    navigate("/enfermedades/esclerosis/sintomas");
  };

  const handlePauseClick = () => {
    setIsRotating(!isRotating);
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
              <EsclerosisModel
                isRotating={isRotating}
                setIsRotating={setIsRotating}
              />
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
              <Environment background preset="studio" />
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -5, 0]}
                receiveShadow={true}
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

      <div className="instruction-text">
        <p>
          <strong>Instrucciones:</strong>
        </p>
        <p>Haz clic en el modelo para pausar la rotación.</p>
        <p>Puedes rotar el modelo mientras esté en pausa.</p>
        <p>Usa las flechas del teclado para rotarlo.</p>
        <p>Haz clic nuevamente para reanudar el movimiento.</p>
      </div>
    </div>
  );
};

export default SymptomsEsclerosis;
