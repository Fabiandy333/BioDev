import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import MigraineModel2 from "../../diseases/models-3d/MigraineModel2";

const Prevention = ({ title, description }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/enfermedades");
  };

  const goToNext = () => {
    navigate("/enfermedades/migrana/autocuidado");
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
          <div className="migraine-model-canvas">
            <Canvas camera={{ position: [0, 0, 6], fov: 50 }}>
              <ambientLight intensity={2.2} />
              <directionalLight position={[5, 5, 5]} intensity={2.5} />
              <directionalLight position={[0, -3, 5]} intensity={1.8} />
              <directionalLight position={[0, 0, -5]} intensity={1.2} />
              <OrbitControls enableZoom={false} enablePan={false} />
              <MigraineModel2 />
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

export default Prevention;
