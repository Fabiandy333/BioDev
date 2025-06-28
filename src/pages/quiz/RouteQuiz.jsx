// src/components/quiz/RouteQuiz.jsx
import { useState, useMemo, useEffect } from "react";
import { Canvas } from "@react-three/fiber";
import { Physics, RigidBody } from "@react-three/rapier";
import MigraineModel6 from "../diseases/models-3d/MigraineModel6";
import AcvModel6 from "../diseases/models-3d/AcvModel6";
import AlzheimerModel6 from "../diseases/models-3d/AlzheimerModel6";
import EsclerosisModel6 from "../diseases/models-3d/EsclerosisModel6";
import routeTree, { randomEntryNode, getProgressNodesForEntry } from "./routeData";
import "./Quiz.css";

const CORRECT_FEEDBACKS = [
  "¡Bien hecho! Vas por buen camino.",
  "¡Correcto! Excelente decisión.",
  "¡Respuesta acertada!",
  "¡Muy bien! Sigue así.",
  "¡Exacto, esa es la mejor opción!",
  "¡Así es! Toma nota de este paso.",
  "¡Acertaste! Continúa el caso.",
];

const INCORRECT_FEEDBACKS = [
  "Revisa de nuevo, podrías mejorar tu decisión.",
  "Ups, esa no es la mejor opción.",
  "¡Intenta nuevamente! Analiza la situación.",
  "Esta vez te equivocaste, vuelve a intentarlo.",
  "Reflexiona antes de elegir.",
];

function getRandom(arr) {
  return arr[Math.floor(Math.random() * arr.length)];
}

const RouteQuiz = ({ onEnd }) => {
  // --- Inicialización de la ruta ---
  const [entryNodeId] = useState(randomEntryNode());
  const progressNodeIds = useMemo(
    () => getProgressNodesForEntry(entryNodeId, routeTree),
    [entryNodeId]
  );

  const [currentNodeId, setCurrentNodeId] = useState(entryNodeId);
  const [progressCount, setProgressCount] = useState(0);
  const [score, setScore] = useState(0); // aciertos a la primera
  const [incorrectNodes, setIncorrectNodes] = useState(new Set());
  const [feedback, setFeedback] = useState(null);
  const [feedbackType, setFeedbackType] = useState(null);
  const [showFeedback, setShowFeedback] = useState(false);
  const [lastErrorNodeText, setLastErrorNodeText] = useState(null);
  const [impulseType, setImpulseType] = useState(null);

  // --- Estados para suelo invisible y reset del modelo ---
  const [showGround, setShowGround] = useState(true);
  const [modelKey, setModelKey] = useState(0);

  const node = routeTree[currentNodeId];

  // Saber qué caso es
  const isMigraineCase = useMemo(() => entryNodeId.startsWith("mig_"), [entryNodeId]);
  const isAcvCase = useMemo(() => entryNodeId.startsWith("acv_"), [entryNodeId]);
  const isAlzCase = useMemo(() => entryNodeId.startsWith("alz_"), [entryNodeId]);
  const isEsclCase = useMemo(() => entryNodeId.startsWith("escl_"), [entryNodeId]);
  const isPhysicsCase = isMigraineCase || isAcvCase || isAlzCase || isEsclCase;

  // Resetea el impulso, suelo, cada que cambia el nodo
  useEffect(() => {
    setImpulseType("null");
    setShowGround(true);
  }, [currentNodeId]);

  // Cuando cometes un error (respuesta incorrecta) en casos con física
  useEffect(() => {
    if (feedbackType === "incorrect" && isPhysicsCase) {
      setTimeout(() => setShowGround(false), 350); // espera el "temblor", luego quita el suelo
    }
  }, [feedbackType, isPhysicsCase]);

  // --- Lógica de respuestas ---
  const handleOptionClick = (option) => {
    if (showFeedback) return;

    if (typeof option.correct !== "undefined") {
      if (option.correct) {
        if (!incorrectNodes.has(currentNodeId) && node.isProgress) {
          setScore((prev) => prev + 1);
        }
        if (node.isProgress) setProgressCount((prev) => prev + 1);

        setFeedback(getRandom(CORRECT_FEEDBACKS));
        setFeedbackType("correct");
        setLastErrorNodeText(null);

        if (isPhysicsCase) setImpulseType("correct");
      } else {
        setIncorrectNodes((prev) => new Set(prev).add(currentNodeId));
        const nextErrorNode = routeTree[option.next];
        setLastErrorNodeText(nextErrorNode?.text || "");
        setFeedback(getRandom(INCORRECT_FEEDBACKS));
        setFeedbackType("incorrect");

        if (isPhysicsCase) setImpulseType("incorrect");
      }
      setShowFeedback(true);
    } else {
      goToNext(option.next);
    }
  };

  const goToNext = (nextId) => {
    setCurrentNodeId(nextId);
    setFeedback(null);
    setFeedbackType(null);
    setShowFeedback(false);
    setLastErrorNodeText(null);
  };

  const handleContinue = () => {
    if (feedbackType === "correct") {
      const currentOption = node.options.find(opt => opt.correct);
      if (currentOption) {
        goToNext(currentOption.next);
      }
    } else {
      // Al intentar de nuevo: restauramos suelo y reseteamos modelo
      if (isPhysicsCase) {
        setShowGround(true);
        setModelKey(k => k + 1);
      }
      setShowFeedback(false);
      setImpulseType("null");
    }
  };

  // Barra de progreso
  const percent = Math.round((progressCount / progressNodeIds.length) * 100);

  // --- Pantalla final ---
  if (node.end) {
    return (
      <div className="quiz-main-container">
        <div className="quiz-card">
          <div className="quiz-progress-bar">
            <div
              className="quiz-progress-bar-inner"
              style={{ width: `100%` }}
            />
          </div>
          <div className="quiz-progress-text">
            Paso {progressNodeIds.length} de {progressNodeIds.length}
          </div>
          <div className="quiz-question-title">{node.text}</div>
          <div className="quiz-options-list">
            <button
              className="quiz-option-btn"
              onClick={() => onEnd && onEnd(score, progressNodeIds.length)}
            >
              Ver mi puntaje y podio
            </button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="quiz-main-container">
      <div className="quiz-card">

        {/* Migraña física */}
        {isMigraineCase && (
          <div style={{ width: "100%", height: "210px", marginBottom: 6 }}>
            <Canvas shadows camera={{ position: [0, 0.2, 9], fov: 37 }}>
              <Physics gravity={[0, -14, 0]}>
                {showGround && (
                  <RigidBody type="fixed" colliders="cuboid" position={[0, -2.2, 0]}>
                    <mesh>
                      <boxGeometry args={[8, 0.2, 8]} />
                      <meshStandardMaterial transparent opacity={0} />
                    </mesh>
                  </RigidBody>
                )}
                <MigraineModel6 key={modelKey} impulseType={impulseType} />
              </Physics>
            </Canvas>
          </div>
        )}

        {/* ACV física */}
        {isAcvCase && (
          <div style={{ width: "100%", height: "210px", marginBottom: 6 }}>
            <Canvas shadows camera={{ position: [0, 0.2, 9], fov: 37 }}>
              <Physics gravity={[0, -14, 0]}>
                {showGround && (
                  <RigidBody type="fixed" colliders="cuboid" position={[0, -2.2, 0]}>
                    <mesh>
                      <boxGeometry args={[8, 0.2, 8]} />
                      <meshStandardMaterial transparent opacity={0} />
                    </mesh>
                  </RigidBody>
                )}
                <AcvModel6 key={modelKey} impulseType={impulseType} />
              </Physics>
            </Canvas>
          </div>
        )}

        {/* Alzheimer física */}
        {isAlzCase && (
          <div style={{ width: "100%", height: "210px", marginBottom: 6 }}>
            <Canvas shadows camera={{ position: [0, 0.2, 9], fov: 37 }}>
              <Physics gravity={[0, -14, 0]}>
                {showGround && (
                  <RigidBody type="fixed" colliders="cuboid" position={[0, -2.2, 0]}>
                    <mesh>
                      <boxGeometry args={[8, 0.2, 8]} />
                      <meshStandardMaterial transparent opacity={0} />
                    </mesh>
                  </RigidBody>
                )}
                <AlzheimerModel6 key={modelKey} impulseType={impulseType} />
              </Physics>
            </Canvas>
          </div>
        )}

        {/* Esclerosis física */}
        {isEsclCase && (
          <div style={{ width: "100%", height: "210px", marginBottom: 6 }}>
            <Canvas shadows camera={{ position: [0, 0.2, 9], fov: 37 }}>
              <Physics gravity={[0, -14, 0]}>
                {showGround && (
                  <RigidBody type="fixed" colliders="cuboid" position={[0, -2.2, 0]}>
                    <mesh>
                      <boxGeometry args={[8, 0.2, 8]} />
                      <meshStandardMaterial transparent opacity={0} />
                    </mesh>
                  </RigidBody>
                )}
                <EsclerosisModel6 key={modelKey} impulseType={impulseType} />
              </Physics>
            </Canvas>
          </div>
        )}

        <img
          src="/back3.png"
          alt="Regresar"
          className="quiz-back-btn"
          onClick={() => window.location.reload()}
        />

        {/* Barra y texto de progreso */}
        <div className="quiz-progress-bar">
          <div
            className="quiz-progress-bar-inner"
            style={{ width: `${percent}%` }}
          />
        </div>
        <div className="quiz-progress-text">
          Paso {progressCount} de {progressNodeIds.length}
        </div>

        <div className="quiz-question-title" style={{ marginTop: 24 }}>
          {node.text}
        </div>

        <div className="quiz-options-list">
          {!showFeedback
            ? node.options.map((option, idx) => (
                <button
                  className="quiz-option-btn"
                  key={idx}
                  onClick={() => handleOptionClick(option)}
                >
                  {option.label}
                </button>
              ))
            : (
              <div className={`quiz-feedback ${feedbackType}`}>
                {feedbackType === "incorrect" && lastErrorNodeText && (
                  <div style={{ marginBottom: "0.9em", color: "#a64827" }}>
                    {lastErrorNodeText}
                  </div>
                )}
                {feedback}
                <br />
                <button
                  className="quiz-next-btn"
                  onClick={handleContinue}
                  style={{ marginTop: "1.2em" }}
                >
                  {feedbackType === "correct" ? "Continuar" : "Intentar de nuevo"}
                </button>
              </div>
            )
          }
        </div>
      </div>
    </div>
  );
};

export default RouteQuiz;
