"use client"
import { useLoader } from '@react-three/fiber'
import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader.js'
import { ThreeElements } from '@react-three/fiber'

interface ModelProps extends Partial<ThreeElements['group']> {
  modelPath: string
}

export function Model({ modelPath, ...props }: ModelProps) {
  const gltf = useLoader(GLTFLoader, modelPath, (loader) => {
    loader.setCrossOrigin('anonymous')
  })

  return (
    <group {...props} dispose={null}>
      <primitive object={gltf.scene} />
    </group>
  )
}