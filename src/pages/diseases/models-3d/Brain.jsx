import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useEffect, useRef } from 'react'

const Brain = () => {
    const brainRef = useRef()
    const brainModel = useGLTF("models-3d/brain.glb")

    useEffect(() => {
        console.log(brainModel)
    }, [brainModel]);

    useFrame(() => {
        if (brainRef.current) {
            brainRef.current.rotation.y += 0.005
        }
    })

    return (
        <primitive
            ref={brainRef}
            object={brainModel.scene}
            scale={4.5}
            position={[0, -0.3, 0]}
        />


    )
}

export default Brain
useGLTF.preload("models-3d/brain.glb")
