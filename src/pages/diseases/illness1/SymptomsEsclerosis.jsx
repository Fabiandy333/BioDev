// SymptomsEsclerosis.jsx
import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import EsclerosisModel from "../../diseases/models-3d/EsclerosisModel";

const SymptomsEsclerosis = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/enfermedades");
  };

  const goToNext = () => {
    navigate("/enfermedades/esclerosis/sintomas");
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
            <Canvas camera={{ position: [0, 0, 30], fov: 50 }}>
              <ambientLight intensity={2.2} />
              <directionalLight position={[5, 5, 5]} intensity={2.5} />
              <directionalLight position={[0, -3, 5]} intensity={1.8} />
              <directionalLight position={[0, 0, -5]} intensity={1.2} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <EsclerosisModel />
            </Canvas>
          </div>
        </div>

        <div className="symptom-right">
          <p>
            La esclerosis múltiple es una enfermedad crónica del sistema nervioso central que afecta el cerebro y la médula espinal. Se manifiesta con debilidad muscular, problemas de coordinación, visión borrosa y fatiga.
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
