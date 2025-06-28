import { useGLTF } from "@react-three/drei";
import { RigidBody } from "@react-three/rapier";
import React, { useRef, useEffect, useState } from "react";
import { useFrame } from "@react-three/fiber";

const SHAKE_DURATION = 0.33; // segundos

const AcvModel6 = ({ impulseType }) => {
  const { scene } = useGLTF("/models-3d/ACV.glb");
  const rigidRef = useRef();
  const [isShaking, setIsShaking] = useState(false);
  const [shakeTime, setShakeTime] = useState(0);

  // Inicia el temblor si impulseType es "incorrect"
  useEffect(() => {
    if (impulseType === "incorrect") {
      setIsShaking(true);
      setShakeTime(0);
    }
    if (impulseType === "null" || impulseType === "correct") {
      setIsShaking(false);
      setShakeTime(0);
      // Reinicia posición si quieres (opcional)
    }
  }, [impulseType]);

  // Actualiza el temblor
  useFrame((_, delta) => {
    if (isShaking && rigidRef.current) {
      setShakeTime((t) => {
        const nextTime = t + delta;
        // Movimiento sinusoidal pequeño
        const shakeAmount = 0.17;
        const freq = 23;
        rigidRef.current.setTranslation({
          x: Math.sin(nextTime * freq) * shakeAmount,
          y: 2,
          z: Math.cos(nextTime * freq * 0.7) * shakeAmount,
        });
        if (nextTime > SHAKE_DURATION) {
          setIsShaking(false);
        }
        return nextTime;
      });
    } else if (!isShaking && rigidRef.current && !impulseType) {
      // Asegura posición inicial si no está temblando ni cayendo
      rigidRef.current.setTranslation({ x: 0, y: 2, z: 0 });
    }
  });

  return (
    <>
      {/* ILUMINACIÓN SUGERIDA */}
      <ambientLight intensity={0.6} />
      <directionalLight
        position={[0, 10, 10]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={2048}
        shadow-mapSize-height={2048}
      />
      <directionalLight position={[-5, 5, -5]} intensity={0.6} />
      <pointLight position={[0, 3, 6]} intensity={0.8} />
      <hemisphereLight skyColor="#f3f7fe" groundColor="#444" intensity={0.2} />

      <RigidBody
        ref={rigidRef}
        colliders="hull"
        restitution={0.8}
        friction={0.7}
        type="dynamic"
        position={[0, 2, 0]}
        enabledRotations={[false, false, false]}
        gravityScale={1}
      >
        <primitive object={scene} scale={6} rotation={[0, -Math.PI / 2, 0]} />
      </RigidBody>
    </>
  );
};

export default AcvModel6;
