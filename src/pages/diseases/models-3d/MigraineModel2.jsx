import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const MigraineModel2 = () => {
  const modelRef = useRef();
  const model = useGLTF('/models-3d/migraine3.glb');

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005;
    }
  });

  return (
    <>
      {/* Luz ambiental con menor intensidad para dejar más espacio a las sombras */}
      <ambientLight intensity={1.0} />

      {/* Luz direccional más fuerte para generar sombras marcadas */}
      <directionalLight
        position={[0, 5, 5]}
        intensity={1.5} // Mayor intensidad para sombras más oscuras
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-radius={10}  // Aumentar el radio de sombra para una apariencia más suave pero oscura
      />
      
      {/* Luz direccional adicional desde otra posición para reforzar las sombras */}
      <directionalLight
        position={[-4, 2, 4]}
        intensity={1.2}  // Aumenta la intensidad para dar más contraste
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
        shadow-bias={-0.0001}
        shadow-radius={10}  // Mantener sombras más suaves pero oscuras
      />

      {/* Luz de punto, para reforzar sombras y mantener contraste */}
      <pointLight
        position={[0, 5, 0]}
        intensity={0.5}  // Aumentar la intensidad para un toque más dramático
        castShadow
        shadow-mapSize-width={1024}
        shadow-mapSize-height={1024}
      />

      {/* Luz de fondo más tenue para mantener la atmósfera sin suavizar demasiado */}
      <hemisphereLight
        skyColor={"#ffffff"}
        groundColor={"#999999"}
        intensity={0.6}  // Reducir intensidad para resaltar sombras más oscuras
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

export default MigraineModel2;
