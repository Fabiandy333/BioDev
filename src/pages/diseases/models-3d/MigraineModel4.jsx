import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';

const MigraineModel4 = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const { scene } = useGLTF('/models-3d/migraine1.glb');
  const { camera } = useThree();

  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(4);

  useEffect(() => {
    scene.traverse((child) => {
      if (child.isMesh) {
        child.castShadow = true;
        child.receiveShadow = true;
      }
    });
  }, [scene]);

  useFrame(() => {
    if (modelRef.current) {
      if (isRotating) {
        modelRef.current.rotation.y += 0.005;
      } else {
        modelRef.current.rotation.y = rotationY;
        modelRef.current.rotation.x = rotationX;
      }
      // Efecto hover
      if (hovered) {
        modelRef.current.traverse((child) => {
          if (child.isMesh) child.material.color.set("#2577ff");
        });
      } else {
        modelRef.current.traverse((child) => {
          if (child.isMesh) child.material.color.set("#ffffff");
        });
      }
    }
  });

  // Doble click zoom
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

  // Mouse hover
  const handlePointerEnter = () => setHovered(true);
  const handlePointerLeave = () => setHovered(false);

  // Teclado
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
    if (e.key === " ") { // Barra espaciadora
      setScale((prev) => (prev === 4 ? 5.5 : 4));
    }
  };

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [rotationY, rotationX, isRotating]);

  return (
    <>
      {/* Luces y sombras */}
      <ambientLight intensity={0.2} />
      <directionalLight position={[10, 10, 10]} intensity={1.5} castShadow />
      <directionalLight position={[-5, -5, -5]} intensity={1.2} castShadow />
      <pointLight position={[0, 5, 0]} intensity={0.5} castShadow />
      <hemisphereLight skyColor="#ffffff" groundColor="#cccccc" intensity={0.1} />

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
    </>
  );
};

useGLTF.preload('/models-3d/migraine1.glb');

export default MigraineModel4;
