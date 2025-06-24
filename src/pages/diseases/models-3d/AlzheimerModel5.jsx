import { useGLTF } from '@react-three/drei';
import { useFrame, useThree } from '@react-three/fiber';
import React, { useRef, useState, useEffect } from 'react';

const AlzheimerModel5 = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const { scene } = useGLTF('/models-3d/Alzheimer3.glb');
  const { camera } = useThree();

  const [rotationY, setRotationY] = useState(4.7);
  const [rotationX, setRotationX] = useState(0);
  const [zoomed, setZoomed] = useState(false);

  // Resaltado al pasar el mouse
  const [hovered, setHovered] = useState(false);
  // Escala con barra espaciadora
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
    if (!modelRef.current) return;
    if (isRotating) {
      modelRef.current.rotation.y += 0.005;
    } else {
      modelRef.current.rotation.y = rotationY;
      modelRef.current.rotation.x = rotationX;
    }
    // Resalta azul si hovered
    modelRef.current.traverse((child) => {
      if (child.isMesh) child.material.color.set(hovered ? "#2577ff" : "#ffffff");
    });
  });

  // Zoom con doble click
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

  // Resalta azul
  const handlePointerEnter = () => setHovered(true);
  const handlePointerLeave = () => setHovered(false);

  // Control teclado
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
      setScale((prev) => (prev === 4 ? 5.5 : 4));
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
        object={scene}
        ref={modelRef}
        scale={scale}
        position={[0, -0.5, 0]}
        castShadow
        receiveShadow
        onClick={() => setIsRotating((rot) => !rot)}
        onDoubleClick={handleDoubleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      />
    </>
  );
};

useGLTF.preload('/models-3d/Alzheimer3.glb');

export default AlzheimerModel5;
