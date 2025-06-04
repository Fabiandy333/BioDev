import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";
import { Canvas } from "@react-three/fiber";
import { OrbitControls } from "@react-three/drei";
import { useState } from "react";
import AcvModel from "../../diseases/models-3d/AcvModel";

const SymptomsACV = () => {
  const navigate = useNavigate();

  const [isRotating, setIsRotating] = useState(true); // Estado para controlar si el modelo está rotando

  const handleBackClick = () => {
    navigate("/enfermedades");
  };

  const goToNext = () => {
    navigate("/enfermedades/acv/sintomas");
  };

  // Función para cambiar el estado de rotación (pausar o reanudar)
  const handlePauseClick = () => {
    setIsRotating(!isRotating);
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
              <AcvModel isRotating={isRotating} setIsRotating={setIsRotating} />
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

      {/* Texto explicativo fijo */}
      <div className="instruction-text">
        <p><strong>Instrucciones:</strong></p>
        <p>
          <p>Haz clic en el modelo para pausar la rotación.</p>
          <p>Puedes rotar el modelo mientras este en pausa.</p>         
          <p>Usa las flechas del teclado para rotarlo.</p>
          <p>Haz clic nuevamente para reanudar el movimiento.</p>
        </p>
      </div>

      {/* Botón Pausa o Reanudar 3D */}
      <button
        className="pausa-button"
        onClick={handlePauseClick} // Cambia el estado de rotación al hacer clic
      >
        {isRotating ? "Pausa" : "Reanudar"} {/* Cambia el texto del botón según el estado */}
      </button>
    </div>
  );
};

export default SymptomsACV;
