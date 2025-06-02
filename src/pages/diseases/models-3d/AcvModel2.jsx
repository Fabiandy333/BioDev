// AcvModel2.jsx
import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const AcvModel2 = () => {
  const modelRef = useRef();
  const model = useGLTF('/models-3d/ACV1.glb'); // Ruta del archivo GLB

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005; // Gira el modelo sobre el eje Y
    }
  });

  return (
    <>
      <ambientLight intensity={0.2} />
      <directionalLight
        position={[10, 10, 10]}
        intensity={1.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-radius={10}
      />
      <directionalLight
        position={[-5, -5, -5]}
        intensity={1.2}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-radius={10}
      />
      <pointLight
        position={[0, 5, 0]}
        intensity={0.5}
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />
      <hemisphereLight
        skyColor={"#ffffff"}
        groundColor={"#cccccc"}
        intensity={0.1}
      />
      <primitive
        object={model.scene}
        ref={modelRef}
        scale={4}
        position={[0, -0.5, 0]}
        receiveShadow
        castShadow
      />
    </>
  );
};

export default AcvModel2;
