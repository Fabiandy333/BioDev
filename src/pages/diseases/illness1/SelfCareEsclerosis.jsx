import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import EsclerosisModel3 from "../models-3d/EsclerosisModel3";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";

const SelfCareEsclerosis = ({ title, description }) => {
  const navigate = useNavigate();
  const handleBackClick = () => navigate("/enfermedades");
  const goToNext = () => navigate("/enfermedades/esclerosis/tratamiento");

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
            <Canvas camera={{ position: [0, 10, 20], fov: 40 }} shadows>
              {/* Luz ambiente */}
              <ambientLight intensity={3} />

              {/* Luz direccional: parámetros de shadow-camera */}
              <directionalLight
                position={[5, 10, 5]}
                intensity={1}
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0005}
                // ajusta este frustum para cubrir tu escena escalada
                shadow-camera-near={1}
                shadow-camera-far={50}
                shadow-camera-left={-20}
                shadow-camera-right={20}
                shadow-camera-top={20}
                shadow-camera-bottom={-20}
              />

              {/* Suelo que recibe la sombra */}
              <mesh
                rotation={[-Math.PI / 2, 0, 0]}
                position={[0, -2, 0]}
                receiveShadow
              >
                <planeGeometry args={[1024, 1024]} />
                <shadowMaterial opacity={0.4} />
              </mesh>

              <OrbitControls enableZoom enablePan={false} />

              {/* Modelo escalado */}
              <EsclerosisModel3 scale={8.5} position={[0, 3, 0]} />
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

export default SelfCareEsclerosis;
