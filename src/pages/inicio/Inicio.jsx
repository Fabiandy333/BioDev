import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import "./Inicio.css";
import cerebro from "../../../public/cerebro.png";
import realBrain from "../../../public/real-brain.png";
import quizImg from "../../../public/quiz.png";

const slides = [
  {
    title: "Descubre sobre las enfermedades cerebrales",
    button: "Aprender más",
    image: cerebro,
    route: "/enfermedades",
  },
  {
    title: "Experiencia 3D Inolvidable",
    button: "Explorar",
    image: realBrain,
    route: "/experiencia-3d",
  },
  {
    title: "Pon a prueba lo aprendido",
    button: "Intentar",
    image: quizImg,
    route: "/quiz",
  },
];

const Inicio = () => {
  const [slideIndex, setSlideIndex] = useState(0);
  const [animKey, setAnimKey] = useState(0);
  const navigate = useNavigate();

  // Auto-slide cada 5 segundos
  useEffect(() => {
    const interval = setInterval(() => {
      setSlideIndex(prev => (prev + 1) % slides.length);
      setAnimKey(prev => prev + 1);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setSlideIndex(index);
    setAnimKey(prev => prev + 1);
  };

  const handleButtonClick = () => {
    navigate(slides[slideIndex].route);
  };

  return (
    <div className="inicio-page">
      <main className="inicio-main">
        <div key={animKey} className="fade-in inicio-texto">
          <h1>{slides[slideIndex].title}</h1>
          <button className="btn-aprender" onClick={handleButtonClick}>
            {slides[slideIndex].button}
          </button>
          <div className="dots">
            {slides.map((_, index) => (
              <span
                key={index}
                className={`dot ${slideIndex === index ? "active" : ""}`}
                onClick={() => handleDotClick(index)}
              ></span>
            ))}
          </div>
        </div>
        <div key={animKey + "-img"} className="fade-in inicio-imagen">
          <img src={slides[slideIndex].image} alt="slide" />
        </div>
      </main>
    </div>
  );
};

export default Inicio;
