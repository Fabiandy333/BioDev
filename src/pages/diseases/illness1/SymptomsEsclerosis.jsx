import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";

const SymptomsEsclerosis = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/enfermedades");
  };

  const goToNext = () => {
    navigate("/enfermedades/esclerosis/prevencion");
  };

  return (
    <div className="symptoms-container">
      <header className="symptoms-header">
        <h1>Esclerosis Múltiple</h1>
      </header>

      <div className="return-button-container">
        <img src="/back.png" alt="Regresar" className="back-arrow" onClick={handleBackClick} />
      </div>

      <main className="symptoms-content">
        <div className="symptom-left">
          <img src="/esclerosis1.png" alt="Esclerosis Múltiple" />
        </div>

        <div className="symptom-right">
          <p>
            La esclerosis múltiple es una enfermedad crónica del sistema nervioso central que afecta el cerebro y la médula espinal. Se manifiesta con debilidad muscular, problemas de coordinación, visión borrosa y fatiga.
          </p>
          <img src="/esclerosis2.png" alt="Síntomas" className="types-img" />
          <button onClick={goToNext} className="next-button">
            <img src="/next.png" alt="Siguiente" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SymptomsEsclerosis;
