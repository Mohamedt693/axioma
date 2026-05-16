"use client"
import { useGLTF } from '@react-three/drei'
import { ThreeElements } from '@react-three/fiber'

interface ModelProps extends Partial<ThreeElements['group']> {
  modelPath: string
}

export function Model({ modelPath, ...props }: ModelProps) {
  const { scene } = useGLTF(modelPath)

  return (
    <group {...props} dispose={null}>
      <primitive object={scene} />
    </group>
  )
}