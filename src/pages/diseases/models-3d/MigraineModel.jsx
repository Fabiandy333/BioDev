import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';

const MigraineModel = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const { camera } = useThree();
  const model = useGLTF('/models-3d/migraine2.glb');

  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  // NUEVO: hover y escala (para eventos extra)
  const [hovered, setHovered] = useState(false);
  const [scaled, setScaled] = useState(false);

  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        // Cambia color al pasar mouse (hover)
        child.material.color.set(hovered ? '#00BFFF' : '#ffffff');
      }
    });
  }, [model, hovered]);

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

  // Doble clic para zoom
  const handleDoubleClick = (event) => {
    if (!zoomed) {
      const { point } = event;
      const direction = point.clone().sub(camera.position).normalize();
      camera.position.copy(point.clone().add(direction.clone().multiplyScalar(-2)));
      camera.updateProjectionMatrix();
      setZoomed(true);
    } else {
      camera.position.set(0, 0, 6);
      camera.updateProjectionMatrix();
      setZoomed(false);
    }
  };

  // EVENTOS DE TECLADO
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
    // NUEVO: Espacio para cambiar el tamaño del modelo
    if (e.code === "Space") {
      setScaled((prev) => !prev);
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

      {/* Modelo 3D con TODOS los eventos */}
      <primitive
        object={model.scene}
        ref={modelRef}
        scale={scaled ? 6 : 4}
        position={[0, -0.5, 0]}
        castShadow
        receiveShadow
        onClick={() => setIsRotating(!isRotating)} // Pausa/rotar
        onDoubleClick={handleDoubleClick}           // Zoom
        onPointerEnter={() => setHovered(true)}     // Resalta al pasar mouse
        onPointerLeave={() => setHovered(false)}    // Vuelve a color normal
      />
    </>
  );
};

export default MigraineModel;
