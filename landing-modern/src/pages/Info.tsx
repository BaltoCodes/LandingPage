import React from 'react';
import { Link } from 'react-router-dom';

// Composant Header
const Header: React.FC = () => (
  <header className="w-full h-16 flex items-center px-6 bg-[#2d0b4e] bg-opacity-90 shadow-md fixed top-0 left-0 z-20">
    <Link to="/" className="flex items-center h-full">
      <img src="/images/husky.png" alt="Husky Logo" className="h-10 w-10 mr-3" />
      <span className="text-white text-lg font-bold tracking-wide hidden sm:block">Balto Cash</span>
    </Link>
  </header>
);

// Composant SVG pour particules animées
const FuturisticParticles = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}} aria-hidden>
    <circle cx="20%" cy="30%" r="1.5" fill="#fff" opacity="0.15">
      <animate attributeName="cy" values="30%;70%;30%" dur="8s" repeatCount="indefinite" />
    </circle>
    <circle cx="80%" cy="60%" r="2" fill="#fff" opacity="0.10">
      <animate attributeName="cy" values="60%;20%;60%" dur="10s" repeatCount="indefinite" />
    </circle>
    <circle cx="50%" cy="80%" r="1" fill="#fff" opacity="0.12">
      <animate attributeName="cy" values="80%;40%;80%" dur="12s" repeatCount="indefinite" />
    </circle>
  </svg>
);

const skills = [
  {
    name: 'Programming',
    items: [
      { name: 'Python', image: '/images/python-logo.png', level: 5 },
      { name: 'TypeScript', image: '/images/JavaScript-logo.png', level: 4 },
      { name: 'React', image: '/images/React-icon.svg.png', level: 4 },
      { name: 'C++', image: '/images/cpp.png', level: 4 },

      // Ajoute d'autres compétences ici
    ],
  },  
  {
    name: 'Architecture',
    items: [
      { name: 'Windows', image: '/images/windows.png', level: 5 },
      { name: 'Powershell', image: '/images/powershell.svg', level: 4 },
      { name: 'Linux', image: '/images/linux.png', level: 4 },
      { name: 'Git', image: '/images/git.png', level: 4 }
      // Ajoute d'autres compétences ici
    ],
  },
  {
    name: 'Finance',
    items: [
      { name: 'Quantitative Analysis', image: '/images/risk.png', level: 4 },
      { name: 'DeFi', image: '/images/solana.png', level: 3 },
      // Ajoute d'autres compétences ici
    ],
  },
];

const Info: React.FC = () => {
  return (
    <div className="relative min-h-screen flex flex-col justify-between animated-bg overflow-hidden">
      <Header />
      <FuturisticParticles />
      <div id="about-me" className="flex flex-col items-center justify-center p-6 text-center mt-28">
        <div className="flex flex-col items-center w-full max-w-screen-md">
          <div className="w-64 h-64 mb-6">
            <img
              src="/images/balto-cash-bg-removed.png"
              alt="My face"
              className="w-full h-full object-cover rounded-full"
            />
          </div>
          <div className="p-6 bg-white-100 rounded-lg shadow-md text-left w-full">
            <p className="text-base leading-relaxed m-0 justify-center text-white font-bold">
              Hi there, my name is Alexis Archambault. I'm a Quantitative Analyst intern at Opensee, a fintech startup, and I'm currently attending IMT Atlantique for a master of computer science and financial engineering. I am a coding enthusiast and a finance (also de-fi) lover.
            </p>
          </div>
        </div>
      </div>
      <div className="flex flex-col items-center justify-center">
        <p className="text-base leading-relaxed m-0 justify-center text-white font-bold">Here's what I can do</p>
        <button id="skills" className="text-2xl">⬇</button>
      </div>
      <div id="skills-section" className="p-6 text-center mt-32">
        <h2 className="text-gray-800 font-sans text-2xl font-semibold mb-20 text-white ">My Skills</h2>
        {skills.map((category) => (
          <div className="mb-6" key={category.name}>
            <h3 className="text-xl font-semibold mb-4 text-white font-bold">{category.name}</h3>
            <div className="flex flex-wrap gap-4 justify-center">
              {category.items.map((skill) => (
                <div
                  key={skill.name}
                  className="skill-card relative flex flex-col items-center bg-white border border-gray-300 rounded-lg p-3 text-center transition-transform duration-300 transform hover:scale-105 w-32 h-40 sm:w-28 sm:h-36 lg:w-40 lg:h-48 overflow-hidden"
                >
                  <img
                    src={skill.image}
                    alt={skill.name}
                    className="object-contain mb-2 w-full h-20 sm:h-16 lg:h-24"
                  />
                  <div className="text-yellow-500 text-lg mb-2">
                    {Array.from({ length: skill.level }).map((_, i) => '★')}
                  </div>
                  <p className="text-gray-600 text-m">{skill.name}</p>
                </div>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div className="flex flex-col  items-center justify-center p-6 text-center mt-12 mb-12 rounded-lg">
        <h3 className="text-xl text-center text-black-600 text-white">Contact me if you feel my profile corresponds to what you're looking for :)</h3>
        <div className="flex justify-center mt-8 space-x-6 send-mail">
          <a className="text-black-400 hover:text-gray-500" href="mailto:alexis.labiolle@gmail.com">
            <span className="sr-only">Mail</span>
            <svg className="w-10 h-10" aria-hidden="true" fill="currentColor" viewBox="0 0 26 26">
              <path fillRule="evenodd" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" clipRule="evenodd" />
            </svg>
          </a>
        </div>
      </div>
      <footer className="w-full bottom-0">
        <div className="py-4 mx-auto space-y-1 sm:px-6 lg:px-8">
          <div className="flex items-center justify-center">
            <a href="/info" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">Informations</span>
              <svg className="w-8 h-8 items-center" viewBox="0 0 18 18" aria-hidden="true">
                <path fill="currentColor" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
                <path fill="currentColor" d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
              </svg>
            </a>
          </div>
          <p className="text-base leading-3 text-center text-gray-400">
            © 2024 Balto Cash Corporation, All rights reserved.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Info;
