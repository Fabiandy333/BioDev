import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";

const EsclerosisModel2 = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const model = useGLTF("/models-3d/Esclerosismul.glb");
  const { camera } = useThree();

  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(10);

  useFrame(() => {
    if (!modelRef.current) return;
    if (isRotating) {
      modelRef.current.rotation.y += 0.005;
    } else {
      modelRef.current.rotation.y = rotationY;
      modelRef.current.rotation.x = rotationX;
    }
    // Azul si hovered
    modelRef.current.traverse((child) => {
      if (child.isMesh) child.material.color.set(hovered ? "#2577ff" : "#ffffff");
    });
  });

  // Doble click para zoom
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
  const handleClick = () => setIsRotating((v) => !v);

  // Hover azul
  const handlePointerEnter = () => setHovered(true);
  const handlePointerLeave = () => setHovered(false);

  // Flechas en pausa, tecla R, barra para escalar
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
      if (e.key === "ArrowLeft") setRotationY(rotationY - 0.15);
      else if (e.key === "ArrowRight") setRotationY(rotationY + 0.15);
      if (e.key === "ArrowUp") setRotationX(rotationX - 0.15);
      else if (e.key === "ArrowDown") setRotationX(rotationX + 0.15);
    }
    if (e.key === " ") {
      setScale((prev) => (prev === 10 ? 15 : 10));
    }
  };

  useEffect(() => {
    window.addEventListener("keydown", handleKeyDown);
    return () => window.removeEventListener("keydown", handleKeyDown);
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
    <>
      <ambientLight intensity={0.2} />
      <pointLight
        position={[5, 30, 0]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
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

export default EsclerosisModel2;
