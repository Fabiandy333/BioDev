// src/components/quiz/Podio.jsx
import { useNavigate } from "react-router-dom";

const Podio = ({ score, total }) => {
  const navigate = useNavigate();

  // Define la ruta a la que quieres regresar al intentar de nuevo
  // Por ejemplo "/quiz" o "/inicio" o lo que uses para arrancar el quiz
  const handleRestart = () => {
    navigate("/quiz"); // <-- Ajusta la ruta según tu router
  };

  // Puedes modificar el mensaje según score si quieres (opcional)
  const ganaste = score >= 4;

  return (
    <div className="podio-container">
      <div className="podio-card">
        <div className="podio-trophy">🏆</div>
        <div className="podio-score">{score} / {total} aciertos a la primera</div>
        <div className="podio-text">
          {ganaste
            ? "¡Felicitaciones! Has aprobado el quiz."
            : "No lograste el mínimo para aprobar. ¡Vuelve a intentarlo!"}
        </div>
        <button className="podio-btn" onClick={handleRestart}>
          Volver a intentar
        </button>
      </div>
    </div>
  );
};

export default Podio;
