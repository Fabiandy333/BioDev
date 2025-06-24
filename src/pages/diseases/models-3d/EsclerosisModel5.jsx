import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';

const EsclerosisModel5 = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const { camera } = useThree();
  const model = useGLTF('/models-3d/esclerosis2.glb');

  // Rotación inicial Y = 4.7 como en ejemplos previos
  const [rotationY, setRotationY] = useState(4.7);
  const [rotationX, setRotationX] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(4);

  // Activar sombras en todas las mallas y dejar color blanco por defecto
  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
        child.material.color.set("#ffffff");
      }
    });
  }, [model]);

  // Animar rotación automática o manual y color por hover
  useFrame(() => {
    if (!modelRef.current) return;
    if (isRotating) {
      modelRef.current.rotation.y += 0.005;
    } else {
      modelRef.current.rotation.y = rotationY;
      modelRef.current.rotation.x = rotationX;
    }
    modelRef.current.traverse?.((child) => {
      if (child.isMesh) child.material.color.set(hovered ? "#2577ff" : "#ffffff");
    });
  });

  // Doble click para zoom
  const handleDoubleClick = (event) => {
    if (!zoomed) {
      const { point } = event;
      const direction = point.clone().sub(camera.position).normalize();
      camera.position.copy(
        point.clone().add(direction.clone().multiplyScalar(-2.5))
      );
      camera.updateProjectionMatrix();
      setZoomed(true);
    } else {
      camera.position.set(0, 0, 6);
      camera.updateProjectionMatrix();
      setZoomed(false);
    }
  };

  // Hover azul
  const handlePointerEnter = () => setHovered(true);
  const handlePointerLeave = () => setHovered(false);

  // Click: pausa/reanudar
  const handleClick = () => setIsRotating((v) => !v);

  // Control manual con flechas, R y barra espaciadora
  const handleKeyDown = (e) => {
    if (e.key === 'r' || e.key === 'R') {
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
    if (e.key === " ") {
      setScale((prev) => (prev === 4 ? 6 : 4));
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

      {/* Modelo 3D */}
      <primitive
        object={model.scene}
        ref={modelRef}
        scale={scale}
        position={[0, -0.5, 0]}
        castShadow
        receiveShadow
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      />
    </>
  );
};

export default EsclerosisModel5;
