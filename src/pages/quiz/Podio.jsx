import { useEffect, useState } from "react";
import useAuth from "../auth/use-auth";

const API_URL = "https://biodev-backend.onrender.com/api/v1/scores/";

const PODIO_IMG = [
  "/primero.png",
  "/segundo.png",
  "/tercero.png"
];

const Podio = ({ score, total, onRestart }) => {
  const { userLooged } = useAuth();
  const [ranking, setRanking] = useState([]);
  const [loading, setLoading] = useState(true);

  // Guardar score al terminar el quiz
  useEffect(() => {
    if (userLooged && userLooged.email) {
      fetch(API_URL, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email: userLooged.email,
          displayName: userLooged.displayName ?? userLooged.email.split("@")[0],
          score,
          total
        })
      }).then(() => {
        fetchRanking();
      });
    } else {
      fetchRanking();
    }
    // eslint-disable-next-line
  }, []);

  // Obtener ranking top 3
  const fetchRanking = async () => {
    setLoading(true);
    try {
      const res = await fetch(API_URL);
      const allScores = await res.json();
      // Agrupar por email y guardar solo el mejor score de cada usuario
      const bestByUser = {};
      allScores.forEach(s => {
        if (!bestByUser[s.email] || s.score > bestByUser[s.email].score) {
          bestByUser[s.email] = s;
        }
      });
      // Convertir a array y ordenar por score
      const top = Object.values(bestByUser)
        .sort((a, b) => b.score - a.score)
        .slice(0, 3);
      setRanking(top);
    } catch (err) {
      setRanking([]);
    }
    setLoading(false);
  };

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
        <div className="podio-top-title">TOP 3 usuarios</div>
        <div className="podio-top-list">
          {loading ? (
            <div className="podio-no-users">Cargando ranking...</div>
          ) : ranking.length === 0 ? (
            <div className="podio-no-users">No hay usuarios aún</div>
          ) : (
            ranking.map((user, idx) => (
              <div
                key={user.email}
                className={
                  "podio-top-item" +
                  (idx === 0 ? " first" : "") +
                  (userLooged && user.email === userLooged.email ? " my-user" : "")
                }
                style={{
                  fontWeight:
                    userLooged && user.email === userLooged.email ? 700 : 600
                }}
              >
                <img
                  src={PODIO_IMG[idx]}
                  alt={`Puesto ${idx + 1}`}
                  className="podio-medalla"
                  style={{
                    filter:
                      idx === 0
                        ? "drop-shadow(0 0 8px #FFD700)"
                        : idx === 1
                        ? "drop-shadow(0 0 5px #C0C0C0)"
                        : "drop-shadow(0 0 4px #b87333)"
                  }}
                />
                <span className="podio-username">
                  {user.displayName || user.email.split("@")[0]}
                </span>
                <span className="podio-puntaje">
                  {user.score} / {user.total}
                </span>
              </div>
            ))
          )}
        </div>
        <button className="podio-btn" onClick={onRestart}>
          Volver a intentar
        </button>
      </div>
    </div>
  );
};

export default Podio;
