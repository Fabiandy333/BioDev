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

  // Activar proyección de sombras en todas las mallas
  useEffect(() => {
    model.scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [model]);

  // Animar rotación automática o manual
  useFrame(() => {
    if (!modelRef.current) return;
    if (isRotating) {
      modelRef.current.rotation.y += 0.005;
    } else {
      modelRef.current.rotation.y = rotationY;
      modelRef.current.rotation.x = rotationX;
    }
  });

  // Alternar pausa/reanudar al hacer clic
  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  // Doble click para zoom
  const handleDoubleClick = (event) => {
    if (!zoomed) {
      const { point } = event;
      const direction = point.clone().sub(camera.position).normalize();
      camera.position.copy(
        point.clone().add(direction.clone().multiplyScalar(-2.5)) // 2.5 unidades detrás del punto
      );
      camera.updateProjectionMatrix();
      setZoomed(true);
    } else {
      camera.position.set(0, 0, 6);
      camera.updateProjectionMatrix();
      setZoomed(false);
    }
  };

  // Control manual con flechas cuando está en pausa y tecla R siempre
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
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rotationY, rotationX, isRotating]);

  return (
    <primitive
      object={model.scene}
      ref={modelRef}
      scale={4}
      position={[0, -0.5, 0]}
      castShadow
      receiveShadow
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    />
  );
};

export default EsclerosisModel4;
