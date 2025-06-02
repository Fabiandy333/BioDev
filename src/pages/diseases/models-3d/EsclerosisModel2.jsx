import { useGLTF } from '@react-three/drei';
import { useFrame } from '@react-three/fiber';
import React, { useRef } from 'react';

const EsclerosisModel2 = () => {
    const modelRef = useRef();
    const model = useGLTF('/models-3d/Esclerosismul.glb');

    useFrame(() => {
        if (modelRef.current) {
            modelRef.current.rotation.y += 0.005;
        }
    });

    return (
        <>
            {/* Luz ambiental con menor intensidad para dejar más espacio a las sombras */}
            <ambientLight intensity={0.2} />

            {/* Luz direccional más fuerte para generar sombras marcadas */}
            <directionalLight
                position={[10, 10, 10]}
                intensity={1.5} // Mayor intensidad para sombras más oscuras
                castShadow
                shadow-mapSize-width={1024}
                shadow-mapSize-height={1024}
                shadow-bias={-0.0001}
                shadow-radius={10}  // Aumentar el radio de sombra para una apariencia más suave pero oscura
            />

            {/* Luz direccional adicional desde otra posición para reforzar las sombras */}
            <directionalLight
                position={[-5, -5, -5]}
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
                groundColor={"#cccccc"}
                intensity={0.1}  // Reducir intensidad para resaltar sombras más oscuras
            />

            <primitive
                object={model.scene}
                ref={modelRef}
                scale={10}
                position={[0, -0.5, 0]}
                receiveShadow
                castShadow
            />
        </>
    );
};

export default EsclerosisModel2;
