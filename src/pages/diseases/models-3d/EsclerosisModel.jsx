import { useGLTF } from "@react-three/drei";
import { useFrame, useThree } from "@react-three/fiber";
import React, { useRef, useState, useEffect } from "react";

const EsclerosisModel = ({ isRotating, setIsRotating }) => {
  const modelRef = useRef();
  const model = useGLTF("/models-3d/esclerosis-multiple.glb");
  const { camera } = useThree();

  const [rotationY, setRotationY] = useState(0);
  const [rotationX, setRotationX] = useState(0);
  const [zoomed, setZoomed] = useState(false);
  const [hovered, setHovered] = useState(false);
  const [scale, setScale] = useState(20);

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

  // Zoom con doble clic
  const handleDoubleClick = (event) => {
    if (!zoomed) {
      const { point } = event;
      const direction = point.clone().sub(camera.position).normalize();
      camera.position.copy(point.clone().add(direction.clone().multiplyScalar(-7)));
      camera.updateProjectionMatrix();
      setZoomed(true);
    } else {
      camera.position.set(0, 0, 30);
      camera.updateProjectionMatrix();
      setZoomed(false);
    }
  };

  // Pausar/reanudar con click
  const handleClick = () => setIsRotating((v) => !v);

  // Hover azul
  const handlePointerEnter = () => setHovered(true);
  const handlePointerLeave = () => setHovered(false);

  // Control flechas + tecla R + barra espaciadora para escalar
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
      setScale((prev) => (prev === 20 ? 27 : 20));
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
        receiveShadow={true}
        castShadow={true}
        onClick={handleClick}
        onDoubleClick={handleDoubleClick}
        onPointerEnter={handlePointerEnter}
        onPointerLeave={handlePointerLeave}
      />
    </>
  );
};

export default EsclerosisModel;
