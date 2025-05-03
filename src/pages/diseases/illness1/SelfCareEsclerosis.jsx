import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";

const SelfCareEsclerosis = ({ title, description, imageLeft, imageRight }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/enfermedades");
  };

  const goToNext = () => {
    navigate("/enfermedades/esclerosis/tratamiento");
  };

  return (
    <div className="symptoms-container">
      <header className="symptoms-header">
        <h1>{title}</h1>
      </header>

      <div className="return-button-container">
        <img src="/back.png" alt="Regresar" className="back-arrow" onClick={handleBackClick} />
      </div>

      <main className="symptoms-content">
        <div className="symptom-left">
          <img src={imageLeft} alt="Autocuidado" />
        </div>

        <div className="symptom-right">
          <p>{description}</p>
          <img src={imageRight} alt="Autocuidado" className="types-img" />
          <button onClick={goToNext} className="next-button">
            <img src="/next.png" alt="Siguiente" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default SelfCareEsclerosis;
