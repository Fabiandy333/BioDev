// src/components/quiz/Podio.jsx
const Podio = ({ score, total }) => {
  const aprobaste = score >= 4; // Cambia aquí el número mínimo si deseas

  return (
    <div className="podio-container">
      <div className="podio-card">
        <div className="podio-trophy">{aprobaste ? "🏆" : "💡"}</div>
        <div className="podio-score">{score} / {total} aciertos a la primera</div>
        <div className="podio-text">
          {aprobaste
            ? <>¡Felicitaciones! <br />¡Aprobaste el caso clínico!</>
            : <>Lo sentimos, no alcanzaste el puntaje mínimo.<br />Debes responder correctamente al menos 4 preguntas.<br />¡Inténtalo de nuevo!</>}
        </div>
        <button className="podio-btn" onClick={() => window.location.reload()}>
          {aprobaste ? "Volver a intentar" : "Reintentar el reto"}
        </button>
      </div>
    </div>
  );
};
export default Podio;
