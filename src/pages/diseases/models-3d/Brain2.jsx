import { useGLTF } from '@react-three/drei';
import React, { useRef } from 'react';

// El componente Brain2 ya no requiere la prop 'rotate' si no hay rotación
const Brain2 = () => {
    const brainRef = useRef();
    const { scene } = useGLTF("models-3d/brain.glb"); // Cargar el modelo de Brain

    return (
        <>
            {/* Iluminación básica para el modelo */}
            <ambientLight intensity={0.5} />  {/* Luz ambiental */}
            <directionalLight 
                position={[5, 5, 5]} 
                intensity={1.5} 
                castShadow 
            />
            <directionalLight 
                position={[-5, -5, -5]} 
                intensity={1.2} 
                castShadow 
            />

            {/* El modelo Brain2 sin animaciones */}
            <primitive
                ref={brainRef}
                object={scene}
                scale={4.0} // Ajusta la escala del modelo 3D
                position={[0, -0.3, 0]} // Ajusta la posición del modelo
                receiveShadow
                castShadow
            />
        </>
    );
};

export default Brain2;
useGLTF.preload("models-3d/brain.glb"); // Pre-carga el modelo para evitar retrasos al renderizar
