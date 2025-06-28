// src/components/quiz/Podio.jsx
const Podio = ({ score, total, onRestart }) => {
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
        <button className="podio-btn" onClick={onRestart}>
          Volver a intentar
        </button>
      </div>
    </div>
  );
};
export default Podio;
