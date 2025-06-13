import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';

const EsclerosisModel2 = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const model = useGLTF('/models-3d/Esclerosismul.glb');
  const { camera } = useThree();

  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [zoomed, setZoomed] = useState(false);

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

  // Doble click para zoom in/out
  const handleDoubleClick = (event) => {
    if (!zoomed) {
      const { point } = event;
      const direction = point.clone().sub(camera.position).normalize();
      camera.position.copy(point.clone().add(direction.clone().multiplyScalar(-6)));
      camera.updateProjectionMatrix();
      setZoomed(true);
    } else {
      camera.position.set(0, 0, 15);
      camera.updateProjectionMatrix();
      setZoomed(false);
    }
  };

  // Click para pausar/reanudar
  const handleClick = () => {
    setIsRotating(!isRotating);
  };

  // Flechas en pausa, tecla R siempre
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
      scale={10}
      position={[0, -0.5, 0]}
      castShadow
      receiveShadow
      onClick={handleClick}
      onDoubleClick={handleDoubleClick}
    />
  );
};

export default EsclerosisModel2;
