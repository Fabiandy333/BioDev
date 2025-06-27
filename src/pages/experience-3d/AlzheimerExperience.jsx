// src/components/experience3d/MigraineExperience.jsx
import React, { useRef, useState, useEffect } from "react";
import { OrbitControls, Html, PositionalAudio } from "@react-three/drei";
import AlzheimerModel3 from "../../pages/diseases/models-3d/AlzheimerModel3";

const audioUrl = "/sounds/Alzheimer.mp3"; // Usa la ruta correcta

export default function AlzheimerExperience() {
  const audioRef = useRef();
  const [playing, setPlaying] = useState(false);

  // Pausar audio cuando desmonta el componente
  useEffect(() => {
    return () => {
      if (audioRef.current) {
        audioRef.current.pause();
        setPlaying(false);
      }
    };
  }, []);

  // Play/pause handler
  const handleAudio = () => {
    if (!audioRef.current) return;
    if (playing) {
      audioRef.current.pause();
      setPlaying(false);
    } else {
      audioRef.current.play();
      setPlaying(true);
    }
  };

  return (
    <>
      {/* Modelo 3D */}
      <AlzheimerModel3 />

      {/* Sonido 3D posicional */}
      <group position={[0, 0, 0]}>
        <PositionalAudio
          ref={audioRef}
          url={audioUrl}
          distance={6}
          loop
          autoplay={false}
          volume={1}
        />
      </group>

      {/* Botón flotante Play/Pause */}
      <Html position={[0, 2.5, 0]} zIndexRange={[2, 0]} center>
        <button
          className="alzheimer-audio-btn"
          style={{
            padding: "0.7em 1.2em",
            fontSize: "1.1em",
            background: playing ? "#ff7675" : "#55efc4",
            color: "#222",
            border: "none",
            borderRadius: "10px",
            cursor: "pointer",
            fontWeight: "bold",
            boxShadow: "0 2px 12px rgba(100,100,100,0.09)"
          }}
          onClick={handleAudio}
        >
          {playing ? "Pausar sonido" : "Reproducir sonido"}
        </button>
      </Html>

      {/* Controles ÚNICOS para este modelo */}
      <OrbitControls
        key="migraine-orbit"
        makeDefault
        enableZoom={true}
        enablePan={true}
        enableRotate={true}
        target={[0, 0, 0]}
      />
    </>
  );
}
