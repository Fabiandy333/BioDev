import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';

const EsclerosisModel = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const model = useGLTF('/models-3d/esclerosis-multiple.glb');
  
  // Estado para los ángulos de rotación manual
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);

  useFrame(() => {
    if (modelRef.current) {
      if (isRotating) {
        // Girar automáticamente cuando el modelo esté en rotación
        modelRef.current.rotation.y += 0.005;
      } else {
        // Usar los ángulos de rotación manual cuando el modelo esté en pausa
        modelRef.current.rotation.y = rotationY;
        modelRef.current.rotation.x = rotationX;
      }
    }
  });

  // Función para manejar el clic en el modelo (pausar o reanudar rotación)
  const handleClick = () => {
    setIsRotating(!isRotating); // Cambiar el estado de rotación
  };

  // Función para manejar los eventos de teclado
  const handleKeyDown = (e) => {
    if (!isRotating) { // Solo se permite mover con las teclas cuando el modelo está en pausa
      if (e.key === 'ArrowLeft') {
        setRotationY(rotationY - 0.15); 
      } else if (e.key === 'ArrowRight') {
        setRotationY(rotationY + 0.15); 
      }
      if (e.key === 'ArrowUp') {
        setRotationX(rotationX - 0.15); 
      } else if (e.key === 'ArrowDown') {
        setRotationX(rotationX + 0.15); 
      }
    }
  };

  // Agregar el evento de escucha para las teclas
  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    
    // Limpiar el evento cuando el componente se desmonte
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, [rotationY, rotationX, isRotating]);

  return (
    <>
      {/* Luz ambiental con menor intensidad para dejar más espacio a las sombras */}
      <ambientLight intensity={0.2} />
      {/* Luz direccional más fuerte para generar sombras marcadas */}
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-radius={10}
      />
      {/* Luz direccional adicional desde otra posición para reforzar las sombras */}
      <directionalLight
        position={[-5, -5, -5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-radius={10}
      />
      {/* Luz de punto, para reforzar sombras y mantener contraste */}
      <pointLight
        position={[0, 5, 0]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      {/* Luz de fondo más tenue para mantener la atmósfera sin suavizar demasiado */}
      <hemisphereLight
        skyColor={"#ffffff"}
        groundColor={"#cccccc"}
        intensity={0.1}
      />
      <primitive
        object={model.scene}
        ref={modelRef}
        scale={20}
        position={[0, -0.5, 0]}
        receiveShadow
        castShadow
        onClick={handleClick} // Agregar evento de clic
      />
    </>
  );
};

export default EsclerosisModel;
