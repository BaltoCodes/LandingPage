import React, { useState } from 'react';
import { motion, AnimatePresence, Variants } from 'framer-motion';
import { Routes, Route } from 'react-router-dom';
import Info from './pages/Info';
import Hero from './pages/Hero';

const projects = [
  {
    name: 'Crypto Shop',
    color: 'from-futuristic-500 to-futuristic-400',
    orbs: 5,
    to : 'https://crypto-rich.site'
  },
  {
    name: 'Online resume',
    color: 'from-futuristic-500 to-futuristic-200',
    orbs: 5,
    to : 'https://balto-cash.xyz/info'
  },
  {
    name: 'Launchpad Crypto',
    color: 'from-futuristic-600 to-futuristic-400',
    orbs: 4,
    to:'https://fun-launchpad.tech/'
  },
  {
    name: 'Failed Millionaires',
    color: 'from-futuristic-700 to-futuristic-500',
    orbs: 6,
    to:'https://failed-millionaires.fr'
  },
  {
    name: 'Revcom - AI for LinkedIn',
    color: 'from-futuristic-800 to-futuristic-400',
    orbs: 3,
    to: 'https://revcom.fr'
  },
  {
    name: 'EthTix',
    color: 'from-futuristic-800 to-futuristic-500',
    orbs: 2,
    to: 'https://ethtix.fr'
  }
];

const orbVariants: Variants = {
  initial: (i: number) => ({
    scale: 0.5,
    opacity: 0,
    x: Math.cos((i / 6) * 2 * Math.PI) * 60,
    y: Math.sin((i / 6) * 2 * Math.PI) * 60,
  }),
  animate: (i: number) => ({
    scale: 1,
    opacity: 1,
    x: Math.cos((i / 6) * 2 * Math.PI) * 60,
    y: Math.sin((i / 6) * 2 * Math.PI) * 60,
    transition: {
      delay: i * 0.07,
      type: "spring" as const,
      stiffness: 200,
    },
  }),
  exit: {
    scale: 0.5,
    opacity: 0,
  },
};

function ProjectOrb({ name, color, orbs, to }: { name: string; color: string; orbs: number, to : string }) {
  const [hovered, setHovered] = useState(false);
  return (
    <div className="flex flex-col items-center">
      <div
        className="relative flex items-center justify-center"
        onMouseEnter={() => setHovered(true)}
        onMouseLeave={() => setHovered(false)}
        onClick={() => {window.location.href = to}}
      >
        <motion.div
          className={`w-32 h-32 rounded-full bg-futuristic-500 shadow-orb-glow flex items-center justify-center border-2 border-futuristic-700 transition-all duration-200 cursor-pointer`}
          animate={{
            boxShadow: hovered
              ? '0 0 24px 4px #64748b'
              : '0 0 8px 2px #232329',
            scale: hovered ? 1.04 : 1,
          }}
          transition={{ type: 'spring', stiffness: 200 }}
        >
          <span className="text-futuristic-300 text-lg font-semibold drop-shadow-none text-center px-2">
            {name}
          </span>
          <AnimatePresence>
            {hovered &&
              Array.from({ length: orbs }).map((_, i) => (
                <motion.div
                  key={i}
                  custom={i}
                  initial="initial"
                  animate="animate"
                  exit="exit"
                  variants={orbVariants}
                  className="absolute w-6 h-6 rounded-full bg-orb shadow-orb-glow border border-futuristic-400"
                  style={{
                    left: '50%',
                    top: '50%',
                    marginLeft: -12,
                    marginTop: -12,
                  }}
                />
              ))}
          </AnimatePresence>
        </motion.div>
      </div>
    </div>
  );
}

function App() {
  return (
    <Routes>
      <Route path="/" element={
        <div className="min-h-screen flex flex-col justify-between bg-futuristic-50 animate-futuristic-bg" style={{background: 'linear-gradient(90deg, #f8f6f3 0%, #f3ede7 50%, #f8f6f3 100%)', backgroundSize: '200% 200%'}}>
          <header className="py-8 text-center bg-futuristic-800 shadow-soft">
            <h1 className="text-4xl md:text-6xl font-extrabold uppercase tracking-wider text-futuristic-300 drop-shadow-none font-exo2">
              Balto Cash Corporation
            </h1>
          </header>
          <main className="flex-1 flex flex-col items-center justify-center">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-16">
              {projects.map((p, index) => {
                const isLast = index === projects.length - 1;
                const isOdd = projects.length % 2 !== 0;
                const shouldCenter = isLast && isOdd;

                return (
                  <div
                    key={p.name}
                    className={shouldCenter ? 'md:col-span-2 flex justify-center' : ''}
                  >
                    <ProjectOrb {...p} />
                  </div>
                );
              })}
            </div>
          </main>
          <footer className="bg-futuristic-800 w-full py-6 text-center border-t border-futuristic-700">
            <div className="flex items-center justify-center mb-2">
              <a href="/info" className="text-futuristic-400 hover:text-futuristic-100 hover:font-bold transition-colors duration-200">
                <span className="sr-only">Informations</span>
                <svg className="w-8 h-8 inline-block" viewBox="0 0 18 18" aria-hidden="true">
                  <path fill="currentColor" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                  <path fill="currentColor" d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
                </svg>
              </a>
            </div>
            <p className="text-futuristic-400 text-xs md:text-base">© 2024 Balto Cash Corporation, All rights reserved.</p>
          </footer>
        </div>
      } />
      <Route path="/info" element={<Info />} />
    </Routes>
  );
}


export default App;
