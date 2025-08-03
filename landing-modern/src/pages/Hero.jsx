import React, { Suspense } from 'react'
import { Canvas } from '@react-three/fiber'
import { OrbitControls, Stars } from '@react-three/drei'
import ThreeScene from './ThreeScene'

const Hero = ({short}) => {
  return (
    <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-dark-bg via-bgdarker to-bgdark"></div>
      
      {/* Subtle background elements */}
      <div className="absolute inset-0">
        <div className="absolute top-20 left-20 w-72 h-72 bg-primary/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft"></div>
        <div className="absolute top-40 right-20 w-96 h-96 bg-secondary/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft" style={{ animationDelay: '2s' }}></div>
        <div className="absolute bottom-20 left-1/2 transform -translate-x-1/2 w-80 h-80 bg-accent/5 rounded-full mix-blend-multiply filter blur-3xl animate-pulse-soft" style={{ animationDelay: '4s' }}></div>
      </div>

      <div className="container mx-auto px-6 relative z-10">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Text Content */}
          <div className="text-center lg:text-left animate-fade-in">
            <div className="mb-6">
              <span className="inline-block px-4 py-2 bg-glass-effect rounded-full text-primary font-mono text-sm border border-primary/20 shadow-soft">
                Quantitative Data Analyst
              </span>
            </div>
            
            <h1 className="text-5xl lg:text-7xl font-bold mb-6">
              <span className="block text-text-primary">Alexis</span>
              <span className="block text-gradient">Archambault</span>
            </h1>
            
            <p className="text-xl lg:text-2xl text-text-secondary mb-8 max-w-2xl">
              {short}
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center lg:justify-start">
              <a
                href="mailto:archambault.a.alexis@gmail.com"
                className="px-8 py-4 bg-gradient-to-r from-[#6366f1] to-[#8b5cf6] text-white font-semibold rounded-lg shadow-soft hover:shadow-soft-hover transition-all duration-300 transform hover:scale-105"
              >
                Me contacter
              </a>
              <a
                href="#projects"
                className="px-8 py-4 glass-effect text-text-primary font-semibold rounded-lg border border-primary/20 hover:border-primary/40 transition-all duration-300 shadow-soft"
              >
                Voir mes projets
              </a>
            </div>
          </div>

          {/* Three.js Scene */}
          <div className="relative h-96 lg:h-[600px] w-full animate-slide-up">
            <Canvas
              camera={{ position: [0, 0, 5], fov: 75 }}
              className="w-full h-full"
            >
              <Suspense fallback={null}>
                <ThreeScene />
                <Stars radius={100} depth={50} count={3000} factor={4} saturation={0} fade speed={1} />
                <OrbitControls enableZoom={false} enablePan={false} autoRotate autoRotateSpeed={0.3} />
              </Suspense>
            </Canvas>
            
            {/* Subtle overlay */}
            <div className="absolute inset-0 bg-gradient-to-t from-dark-bg/10 to-transparent pointer-events-none"></div>
          </div>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-[#8b5cf6] rounded-full flex justify-center">
          <div className="w-1 h-3 bg-[#8b5cf6] rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  )
}

export default Hero 