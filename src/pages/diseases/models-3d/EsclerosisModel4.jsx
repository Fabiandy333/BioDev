import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';

const EsclerosisModel4 = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const { camera } = useThree();
  const model = useGLTF('/models-3d/Esclerosis1.glb');

  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(4);

  useFrame(() => {
    if (!modelRef.current) return;
    if (isRotating) {
      modelRef.current.rotation.y += 0.005;
    } else {
      modelRef.current.rotation.y = rotationY;
      modelRef.current.rotation.x = rotationX;
    }
    // Hover azul
    modelRef.current.traverse?.((child) => {
      if (child.isMesh) child.material.color.set(hovered ? "#2577ff" : "#ffffff");
    });
  });

  // Click: Pausa/Reanudar
  const handleClick = () => setIsRotating((v) => !v);

  // Doble click: Zoom in/out
  const handleDoubleClick = (event) => {
    if (!zoomed) {
      const { point } = event;
      const direction = point.clone().sub(camera.position).normalize();
      camera.position.copy(point.clone().add(direction.clone().multiplyScalar(-2.5)));
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

  // Flechas, R, barra espaciadora
  const handleKeyDown = (e) => {
    if (e.key === 'r' || e.key === 'R') {
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
    if (e.key === " ") {
      setScale((prev) => (prev === 4 ? 6 : 4));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rotationY, rotationX, isRotating]);

  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [model]);

  return (
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
  );
};

export default EsclerosisModel4;
