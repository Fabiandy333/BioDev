import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';

const MigraineModel = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const { camera } = useThree(); // ← acceso a la cámara
  const model = useGLTF('/models-3d/migraine2.glb');

  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [zoomed, setZoomed] = useState(false); // ← estado de zoom

  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [model]);

  useFrame(() => {
    if (modelRef.current) {
      if (isRotating) {
        modelRef.current.rotation.y += 0.005;
      } else {
        modelRef.current.rotation.y = rotationY;
        modelRef.current.rotation.x = rotationX;
      }
    }
  });

  // Zoom con doble click sobre el modelo
  const handleDoubleClick = (event) => {
    // Solo haz zoom si no está ya en zoom
    if (!zoomed) {
      // El punto exacto 3D donde se hizo doble click
      const { point } = event;
      // Calcula dirección desde la cámara a ese punto
      const direction = point.clone().sub(camera.position).normalize();
      // Mueve la cámara hacia el punto (pero no exactamente encima, solo más cerca)
      camera.position.copy(
        point.clone().add(direction.clone().multiplyScalar(-2)) // 2 unidades detrás del punto
      );
      camera.updateProjectionMatrix();
      setZoomed(true);
    } else {
      // Si ya está en zoom, regresa la cámara a la posición original
      camera.position.set(0, 0, 6); // Cambia esto si tu cámara está en otro sitio
      camera.updateProjectionMatrix();
      setZoomed(false);
    }
  };

  // Teclado igual que antes
  const handleKeyDown = (e) => {
    if (e.key === "r" || e.key === "R") {
      setRotationY(4.7);
      setRotationX(0);
      if (modelRef.current) {
        modelRef.current.rotation.y = 4.7;
        modelRef.current.rotation.x = 0;
      }
      return;
    }
    if (!isRotating) {
      if (e.key === 'ArrowLeft') setRotationY(rotationY - 0.15);
      else if (e.key === 'ArrowRight') setRotationY(rotationY + 0.15);
      if (e.key === 'ArrowUp') setRotationX(rotationX - 0.15);
      else if (e.key === 'ArrowDown') setRotationX(rotationX + 0.15);
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rotationY, rotationX, isRotating]);

  return (
    <>
      {/* Luces */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
      <directionalLight position={[-5, -5, -5]} intensity={1.2} castShadow />
      <pointLight position={[0, 5, 0]} intensity={0.5} castShadow />
      <hemisphereLight skyColor="#ffffff" groundColor="#cccccc" intensity={0.1} />

      {/* Modelo 3D con onDoubleClick */}
      <primitive
        object={model.scene}
        ref={modelRef}
        scale={4}
        position={[0, -0.5, 0]}
        castShadow
        receiveShadow
        onClick={() => setIsRotating(!isRotating)}
        onDoubleClick={handleDoubleClick}
      />
    </>
  );
};

export default MigraineModel;
