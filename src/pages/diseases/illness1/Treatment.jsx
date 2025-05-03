import { useNavigate } from "react-router-dom";
import "./Style/Symptoms.css";

const Treatment = ({ title, description, imageLeft, imageRight }) => {
  const navigate = useNavigate();

  const handleBackClick = () => {
    navigate("/enfermedades");
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
          <img src={imageLeft} alt="Tratamiento migraña" />
        </div>

        <div className="symptom-right">
          <p>{description}</p>
          <img src={imageRight} alt="Ejemplo tratamiento" className="types-img" />
        </div>
      </main>
    </div>
  );
};

export default Treatment;
