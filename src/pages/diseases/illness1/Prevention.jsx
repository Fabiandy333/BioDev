import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";

const Prevention = ({ title, description, imageLeft, imageRight }) => {
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
          <img src={imageLeft} alt="Prevención de la migraña" />
        </div>

        <div className="symptom-right">
          <p>{description}</p>
          <img src={imageRight} alt="Ejemplos de prevención" className="types-img" />

          <button onClick={goToNext} className="next-button">
            <img src="/next.png" alt="Siguiente" />
          </button>
        </div>
      </main>
    </div>
  );
};

export default Prevention;
