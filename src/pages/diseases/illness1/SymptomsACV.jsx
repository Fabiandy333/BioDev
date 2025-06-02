// SymptomsACV.jsx
import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import AcvModel from "../../diseases/models-3d/AcvModel";

const SymptomsACV = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/enfermedades");
  };

  const goToNext = () => {
    navigate("/enfermedades/acv/sintomas");
  };

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
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={2.2} />
              <directionalLight position={[5, 5, 5]} intensity={2.5} />
              <directionalLight position={[0, -3, 5]} intensity={1.8} />
              <directionalLight position={[0, 0, -5]} intensity={1.2} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <AcvModel />
            </Canvas>
          </div>
        </div>

        <div className="symptom-right">
          <p>
            El ACV es una emergencia médica que ocurre cuando el flujo de sangre al cerebro se detiene, lo que puede causar daño cerebral irreversible si no se trata a tiempo. Los síntomas comunes incluyen debilidad repentina en un lado del cuerpo, dificultad para hablar, pérdida de equilibrio o visión borrosa.
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
