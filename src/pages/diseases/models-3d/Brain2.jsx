import { useGLTF } from '@react-three/drei';
import React, { useEffect, useRef } from 'react';

// El componente Brain2 ya no requiere la prop 'rotate' si no hay rotación
const Brain2 = () => {
    const brainRef = useRef();
    const brainModel = useGLTF("models-3d/brain.glb");

    useEffect(() => {
        console.log(brainModel); // Muestra el modelo en consola para verificar
    }, [brainModel]);

    return (
        <primitive
            ref={brainRef}
            object={brainModel.scene}
            scale={4.0} // Ajusta la escala del modelo 3D
            position={[0, -0.3, 0]} // Ajusta la posición del modelo
        />
    );
}

export default Brain2;
useGLTF.preload("models-3d/brain.glb"); // Pre-carga el modelo para evitar retrasos al renderizar
