import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

const AcvModel3 = () => {
  const modelRef = useRef();
  const { scene } = useGLTF('/models-3d/ACV.glb'); // Ruta del archivo GLB

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
        object={scene}
        ref={modelRef}
        scale={4}
        position={[0, -0.5, 0]}
        receiveShadow
        castShadow
      />
    </>
  );
};

useGLTF.preload('/models-3d/ACV.glb'); // Pre-cargar el modelo

export default AcvModel3;
