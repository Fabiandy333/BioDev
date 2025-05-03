import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";

const SymptomsACV = () => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/enfermedades");
  };

  const goToNext = () => {
    navigate("/enfermedades/acv/prevencion");
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
          <img src="/acv1.png" alt="Ilustración del ACV" />
        </div>

        <div className="symptom-right">
          <p>
            El ACV es una emergencia médica que ocurre cuando el flujo de sangre al cerebro se detiene, lo que puede causar daño cerebral irreversible si no se trata a tiempo. Los síntomas comunes incluyen debilidad repentina en un lado del cuerpo, dificultad para hablar, pérdida de equilibrio o visión borrosa.
          </p>
          <img src="/acv2.png" alt="Síntomas del ACV" className="types-img" />

          <button onClick={goToNext} className="next-button">
            <img src="/next.png" alt="Siguiente" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SymptomsACV;
