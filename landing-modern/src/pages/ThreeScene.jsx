import React, { useRef } from 'react'
import { useFrame } from '@react-three/fiber'
import { Box, Sphere, Torus, Cylinder } from '@react-three/drei'
import * as THREE from 'three'

const ThreeScene = () => {
  const groupRef = useRef()
  const particlesRef = useRef()
  const linesRef = useRef()

  useFrame((state) => {
    const time = state.clock.getElapsedTime()
    
    // Rotation douce du groupe principal
    if (groupRef.current) {
      groupRef.current.rotation.y = time * 0.1
      groupRef.current.rotation.x = Math.sin(time * 0.5) * 0.1
    }
    
    // Animation des particules
    if (particlesRef.current) {
      particlesRef.current.children.forEach((particle, index) => {
        particle.position.y = Math.sin(time * 2 + index * 0.5) * 0.3
        particle.rotation.z = time * 0.5 + index * 0.1
      })
    }
    
    // Animation des lignes
    if (linesRef.current) {
      linesRef.current.rotation.z = time * 0.05
    }
  })

  // Créer des particules abstraites
  const createParticles = () => {
    const particles = []
    for (let i = 0; i < 15; i++) {
      particles.push({
        position: [
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6,
          (Math.random() - 0.5) * 6
        ],
        size: Math.random() * 0.1 + 0.02,
        color: i % 3 === 0 ? '#6366f1' : i % 3 === 1 ? '#8b5cf6' : '#a855f7'
      })
    }
    return particles
  }

  return (
    <group ref={groupRef}>
      {/* Forme centrale abstraite - Cube avec wireframe */}
      <Box
        args={[1.2, 1.2, 1.2]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.1}
          wireframe
          wireframeLinewidth={1}
        />
      </Box>

      {/* Sphère intérieure */}
      <Sphere
        args={[0.4, 16, 16]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#8b5cf6"
          transparent
          opacity={0.3}
        />
      </Sphere>

      {/* Cylindres orbitaux */}
      {[0, 1, 2].map((index) => (
        <Cylinder
          key={index}
          args={[0.05, 0.05, 2, 8]}
          position={[0, 0, 0]}
          rotation={[
            Math.PI / 2,
            0,
            (index * Math.PI * 2) / 3
          ]}
        >
          <meshStandardMaterial
            color="#a855f7"
            transparent
            opacity={0.4}
          />
        </Cylinder>
      ))}

      {/* Torus flottant */}
      <Torus
        args={[1.8, 0.03, 8, 32]}
        position={[0, 0, 0]}
      >
        <meshStandardMaterial
          color="#6366f1"
          transparent
          opacity={0.2}
        />
      </Torus>

      {/* Particules abstraites */}
      <group ref={particlesRef}>
        {createParticles().map((particle, index) => (
          <Sphere
            key={index}
            args={[particle.size, 8, 8]}
            position={particle.position}
          >
            <meshStandardMaterial
              color={particle.color}
              emissive={particle.color}
              emissiveIntensity={0.2}
              transparent
              opacity={0.6}
            />
          </Sphere>
        ))}
      </group>

      {/* Lignes de connexion abstraites */}
      <group ref={linesRef}>
        {Array.from({ length: 8 }).map((_, index) => {
          const angle = (index * Math.PI * 2) / 8
          const radius = 2.5
          const x = Math.cos(angle) * radius
          const z = Math.sin(angle) * radius
          
          return (
            <lineSegments key={index}>
              <bufferGeometry>
                <bufferAttribute
                  attach="attributes-position"
                  count={2}
                  array={new Float32Array([0, 0, 0, x, 0, z])}
                  itemSize={3}
                />
              </bufferGeometry>
              <lineBasicMaterial 
                color="#6366f1" 
                transparent 
                opacity={0.2}
                linewidth={1}
              />
            </lineSegments>
          )
        })}
      </group>

      {/* Éclairage subtil */}
      <ambientLight intensity={0.3} />
      <pointLight position={[5, 5, 5]} intensity={0.5} color="#6366f1" />
      <pointLight position={[-5, -5, -5]} intensity={0.3} color="#8b5cf6" />
    </group>
  )
}

export default ThreeScene 