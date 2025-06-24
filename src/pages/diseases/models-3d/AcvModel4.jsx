import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';

const AcvModel4 = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const { scene } = useGLTF('/models-3d/ACV2.glb');
  const { camera } = useThree();

  // Estados para el control manual de rotación
  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  // Highlight & escala (eventos extra)
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(4);

  // Habilitar sombras en todas las mallas del modelo
  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  // Animación de rotación automática o manual y highlight
  useFrame(() => {
    if (!modelRef.current) return;
    if (isRotating) {
      modelRef.current.rotation.y += 0.005;
    } else {
      modelRef.current.rotation.y = rotationY;
      modelRef.current.rotation.x = rotationX;
    }
    // Resaltado al pasar mouse
    modelRef.current.traverse((child) => {
      if (child.isMesh) child.material.color.set(hovered ? "#2577ff" : "#ffffff");
    });
  });

  // Zoom con doble clic
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

  // Highlight mouse
  const handlePointerEnter = () => setHovered(true);
  const handlePointerLeave = () => setHovered(false);

  // Tecla R, flechas y barra espaciadora
  const handleKeyDown = (e) => {
    if (e.key === "r" || e.key === "R") {
      setRotationY(0);
      setRotationX(0);
      if (modelRef.current) {
        modelRef.current.rotation.y = 0;
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
    if (e.key === " ") { // barra espaciadora
      setScale((prev) => (prev === 4 ? 5.5 : 4));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rotationY, rotationX, isRotating]);

  return (
    <primitive
      object={scene}
      ref={modelRef}
      scale={scale}
      position={[0, -0.5, 0]}
      castShadow
      receiveShadow
      onClick={() => setIsRotating(!isRotating)}
      onDoubleClick={handleDoubleClick}
      onPointerEnter={handlePointerEnter}
      onPointerLeave={handlePointerLeave}
    />
  );
};

// Pre-cargar el modelo
useGLTF.preload('/models-3d/ACV2.glb');

export default AcvModel4;
