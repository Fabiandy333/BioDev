import { useState } from "react";
import "./Quiz.css";
import RouteQuiz from "./RouteQuiz";
import Podio from "./Podio";

const Quiz = () => {
  const [started, setStarted] = useState(false);
  const [scoreData, setScoreData] = useState(null);

  const handleRestart = () => {
    setScoreData(null);
    setStarted(false);
  };

  if (scoreData)
    return <Podio score={scoreData.score} total={scoreData.total} onRestart={handleRestart} />;

  if (started)
    return (
      <RouteQuiz onEnd={(score, total) => setScoreData({ score, total })} />
    );

  return (
    <div className="quiz-welcome-container">
      <div className="quiz-welcome-card">
        <img src="/quiz.png" alt="Quiz" className="quiz-welcome-img" />
        <h1>¡Bienvenido al Quiz Interactivo!</h1>
        <p>
          Pon a prueba tus conocimientos sobre las enfermedades del cerebro.
          <br />
          <span style={{ color: "#2361cc", fontWeight: "500" }}>
            Responde situaciones clínicas y toma decisiones correctas. Al finalizar, podrás ver tu posición en el podio.
          </span>
        </p>
        <button className="quiz-start-btn" onClick={() => setStarted(true)}>
          Comenzar Quiz
        </button>
      </div>
    </div>
  );
};

export default Quiz;
