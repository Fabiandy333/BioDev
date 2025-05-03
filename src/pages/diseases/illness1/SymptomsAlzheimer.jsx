import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";

const SymptomsAlzheimer = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/enfermedades");
  };

  const goToNext = () => {
    navigate("/enfermedades/alzheimer/prevencion");
  };

  return (
    <div className="symptoms-container">
      <header className="symptoms-header">
        <h1>Enfermedad de Alzheimer</h1>
      </header>

      <div className="return-button-container">
        <img src="/back.png" alt="Regresar" className="back-arrow" onClick={handleBackClick} />
      </div>

      <main className="symptoms-content">
        <div className="symptom-left">
          <img src="/alzheimer.png" alt="Ilustración Alzheimer" />
        </div>

        <div className="symptom-right">
          <p>
            El Alzheimer es una enfermedad neurodegenerativa progresiva que afecta la memoria, el pensamiento y el comportamiento. Es la forma más común de demencia y suele comenzar con olvidos leves que empeoran con el tiempo.
          </p>
          <img src="/alzheimer2.png" alt="Síntomas Alzheimer" className="types-img" />

          <button onClick={goToNext} className="next-button">
            <img src="/next.png" alt="Siguiente" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SymptomsAlzheimer;
