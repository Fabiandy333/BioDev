import { useGLTF } from '@react-three/drei'
import { useFrame } from '@react-three/fiber'
import React, { useRef } from 'react'

const MigraineModel = () => {
  const modelRef = useRef()
  const model = useGLTF('/models-3d/migraine2.glb')

  useFrame(() => {
    if (modelRef.current) {
      modelRef.current.rotation.y += 0.005
    }
  })

  return (
    <primitive
      object={model.scene}
      ref={modelRef}
      scale={4}
      position={[0, -0.5, 0]}
    />
  )
}

export default MigraineModel
useGLTF.preload('/models-3d/migraine2.glb')
