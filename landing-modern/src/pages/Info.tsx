import React, { useState } from 'react';
import { Link } from 'react-router-dom';

// Traductions FR/EN pour tous les textes de la page
const translations = {
  fr: {
    presentation: {
      name: 'Alexis Archambault',
      title: 'Quantitative Analyst Intern @ Opensee',
      desc: "Étudiant à IMT Atlantique (Master informatique & ingénierie financière). Passionné par la programmation, la finance quantitative et la blockchain. J’aime créer des outils innovants et résoudre des problèmes complexes."
    },
    experiences: 'Expériences',
    skills: 'Compétences',
    projects: 'Projets',
    contact: 'Contact',
    contactDesc: 'N’hésitez pas à me contacter si mon profil vous intéresse !',
    mail: 'alexis.labiolle@gmail.com',
    company: (company: string, period: string) => `${company} — ${period}`,
    info: 'Informations',
    copyright: '© 2024 Balto Cash Corporation, Tous droits réservés.'
  },
  en: {
    presentation: {
      name: 'Alexis Archambault',
      title: 'Quantitative Analyst Intern @ Opensee',
      desc: "Student at IMT Atlantique (Master in Computer Science & Financial Engineering). Passionate about programming, quantitative finance and blockchain. I love building innovative tools and solving complex problems."
    },
    experiences: 'Experience',
    skills: 'Skills',
    projects: 'Projects',
    contact: 'Contact',
    contactDesc: 'Feel free to contact me if my profile matches your needs!',
    mail: 'alexis.labiolle@gmail.com',
    company: (company: string, period: string) => `${company} — ${period}`,
    info: 'Information',
    copyright: '© 2024 Balto Cash Corporation, All rights reserved.'
  }
};

// Composant Header
const Header: React.FC = () => (
  <header className="w-full h-20 flex items-center px-8 bg-futuristic-800 bg-opacity-95 shadow-soft fixed top-0 left-0 z-20">
    <Link to="/" className="flex items-center h-full">
      <img src="/images/husky.png" alt="Husky Logo" className="h-12 w-12 mr-4" />
      <span className="text-futuristic-50 text-2xl font-extrabold tracking-wide font-exo2">Balto Cash</span>
    </Link>
  </header>
);

// Animation de particules futuristes
const FuturisticParticles = () => (
  <svg className="absolute inset-0 w-full h-full pointer-events-none" style={{zIndex: 0}} aria-hidden>
    <circle cx="20%" cy="30%" r="1.5" fill="#64748b" opacity="0.10">
      <animate attributeName="cy" values="30%;70%;30%" dur="8s" repeatCount="indefinite" />
    </circle>
    <circle cx="80%" cy="60%" r="2" fill="#a1a1aa" opacity="0.08">
      <animate attributeName="cy" values="60%;20%;60%" dur="10s" repeatCount="indefinite" />
    </circle>
    <circle cx="50%" cy="80%" r="1" fill="#f3ede7" opacity="0.10">
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
    ],
  },  
  {
    name: 'Architecture',
    items: [
      { name: 'Windows', image: '/images/windows.png', level: 5 },
      { name: 'Powershell', image: '/images/powershell.svg', level: 4 },
      { name: 'Linux', image: '/images/linux.png', level: 4 },
      { name: 'Git', image: '/images/git.png', level: 4 }
    ],
  },
  {
    name: 'Finance',
    items: [
      { name: 'Quantitative Analysis', image: '/images/risk.png', level: 4 },
      { name: 'DeFi', image: '/images/solana.png', level: 3 },
    ],
  },
];

const experiences = [
  {
    title: 'Quantitative Analyst Intern',
    company: 'Opensee',
    period: '2024 - présent',
    description: 'Stage en analyse quantitative dans une fintech spécialisée en gestion de données financières massives.'
  },
  {
    title: 'Étudiant',
    company: 'IMT Atlantique',
    period: '2022 - présent',
    description: 'Master en informatique et ingénierie financière.'
  },
];

const projects = [
  {
    name: 'Crypto Shop',
    link: 'https://crypto-rich.site',
    description: 'E-commerce de produits crypto, paiement en cryptomonnaies.'
  },
  {
    name: 'Launchpad Crypto',
    link: 'https://fun-launchpad.tech/',
    description: 'Plateforme de lancement de projets blockchain.'
  },
  {
    name: 'Revcom - AI for LinkedIn',
    link: 'https://revcom.fr',
    description: 'Outil d’IA pour optimiser la prospection sur LinkedIn.'
  },
  {
    name: 'EthTix',
    link: 'https://ethtix.fr',
    description: 'Billetterie décentralisée sur Ethereum.'
  },
];

const Info: React.FC = () => {
  const [lang, setLang] = useState<'fr' | 'en'>('fr');
  const t = translations[lang];

  return (
    <div className="relative min-h-screen flex flex-col bg-futuristic-50 animate-futuristic-bg overflow-x-hidden" style={{background: 'linear-gradient(90deg, #f8f6f3 0%, #f3ede7 50%, #f8f6f3 100%)', backgroundSize: '200% 200%'}}>
      {/* Sélecteur de langue en haut à droite */}
      <div className="fixed top-4 right-8 z-30 flex gap-2">
        <button
          className={`px-3 py-1 rounded-full text-sm font-bold border transition-colors duration-200 ${lang==='fr' ? 'bg-futuristic-700 text-futuristic-50 border-futuristic-700' : 'bg-futuristic-100 text-futuristic-700 border-futuristic-300 hover:bg-futuristic-200'}`}
          onClick={() => setLang('fr')}
          aria-label="Français"
        >FR</button>
        <button
          className={`px-3 py-1 rounded-full text-sm font-bold border transition-colors duration-200 ${lang==='en' ? 'bg-futuristic-700 text-futuristic-50 border-futuristic-700' : 'bg-futuristic-100 text-futuristic-700 border-futuristic-300 hover:bg-futuristic-200'}`}
          onClick={() => setLang('en')}
          aria-label="English"
        >EN</button>
      </div>
      <Header />
      <FuturisticParticles />
      {/* Présentation */}
      <section className="flex flex-col items-center justify-center pt-32 pb-12 px-4 z-10">
        <div className="flex flex-col md:flex-row items-center w-full max-w-4xl gap-10">
          <div className="w-48 h-48 md:w-56 md:h-56 mb-4 md:mb-0 flex-shrink-0 rounded-full shadow-halo overflow-hidden border-4 border-futuristic-100 bg-white">
            <img
              src="/images/balto-cash-bg-removed.png"
              alt="Alexis Archambault"
              className="w-full h-full object-cover"
            />
          </div>
          <div className="flex-1 bg-futuristic-100 bg-opacity-80 rounded-2xl shadow-soft p-8 text-left">
            <h1 className="text-3xl md:text-4xl font-extrabold text-futuristic-700 mb-2 font-exo2">{t.presentation.name}</h1>
            <h2 className="text-lg md:text-xl text-futuristic-500 mb-4 font-semibold">{t.presentation.title}</h2>
            <p className="text-futuristic-700 text-base md:text-lg leading-relaxed">
              {t.presentation.desc}
            </p>
          </div>
        </div>
      </section>
      {/* Expériences */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8 z-10">
        <h2 className="text-2xl font-bold text-futuristic-700 mb-6 font-exo2">{t.experiences}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {experiences.map((exp) => (
            <div key={exp.title} className="bg-futuristic-100 bg-opacity-80 rounded-xl shadow-soft p-6">
              <h3 className="text-xl font-semibold text-futuristic-600 mb-1">{exp.title}</h3>
              <div className="text-futuristic-400 text-sm mb-2">{t.company(exp.company, exp.period)}</div>
              <p className="text-futuristic-700 text-base">{exp.description}</p>
            </div>
          ))}
        </div>
      </section>
      {/* Compétences */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8 z-10">
        <h2 className="text-2xl font-bold text-futuristic-700 mb-6 font-exo2">{t.skills}</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {skills.map((category) => (
            <div key={category.name} className="bg-futuristic-100 bg-opacity-80 rounded-xl shadow-soft p-6 flex flex-col items-center">
              <h3 className="text-lg font-semibold text-futuristic-600 mb-4 font-exo2">{category.name}</h3>
              <div className="flex flex-wrap gap-4 justify-center">
                {category.items.map((skill) => (
                  <div
                    key={skill.name}
                    className="flex flex-col items-center bg-white border border-futuristic-300 rounded-lg p-3 text-center transition-transform duration-300 transform hover:scale-105 w-28 h-32 overflow-hidden"
                  >
                    <img
                      src={skill.image}
                      alt={skill.name}
                      className="object-contain mb-2 w-full h-14"
                    />
                    <div className="text-yellow-500 text-base mb-1">
                      {Array.from({ length: skill.level }).map((_, i) => '★')}
                    </div>
                    <p className="text-futuristic-700 text-sm font-medium">{skill.name}</p>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>
      </section>
      {/* Projets */}
      <section className="w-full max-w-4xl mx-auto px-4 py-8 z-10">
        <h2 className="text-2xl font-bold text-futuristic-700 mb-6 font-exo2">{t.projects}</h2>
        <div className="grid md:grid-cols-2 gap-6">
          {projects.map((project) => (
            <a
              key={project.name}
              href={project.link}
              target="_blank"
              rel="noopener noreferrer"
              className="block bg-futuristic-100 bg-opacity-80 rounded-xl shadow-soft p-6 hover:shadow-halo transition-shadow duration-300 border border-futuristic-300"
            >
              <h3 className="text-xl font-semibold text-futuristic-600 mb-2">{project.name}</h3>
              <p className="text-futuristic-700 text-base">{project.description}</p>
            </a>
          ))}
        </div>
      </section>
      {/* Contact */}
      <section className="w-full max-w-4xl mx-auto px-4 py-12 z-10 flex flex-col items-center">
        <h2 className="text-2xl font-bold text-futuristic-700 mb-4 font-exo2">{t.contact}</h2>
        <p className="text-futuristic-700 text-lg mb-6">{t.contactDesc}</p>
        <a className="text-futuristic-800 hover:text-futuristic-600 font-bold text-xl flex items-center gap-2" href="mailto:alexis.labiolle@gmail.com">
          <svg className="w-8 h-8" aria-hidden="true" fill="currentColor" viewBox="0 0 26 26">
            <path fillRule="evenodd" d="M24 5.457v13.909c0 .904-.732 1.636-1.636 1.636h-3.819V11.73L12 16.64l-6.545-4.91v9.273H1.636A1.636 1.636 0 0 1 0 19.366V5.457c0-2.023 2.309-3.178 3.927-1.964L5.455 4.64 12 9.548l6.545-4.91 1.528-1.145C21.69 2.28 24 3.434 24 5.457z" clipRule="evenodd" />
          </svg>
          {t.mail}
        </a>
      </section>
      <footer className="w-full bg-futuristic-800 py-6 mt-8 border-t border-futuristic-300 z-20">
        <div className="mx-auto flex flex-col items-center space-y-2">
          <a href="/info" className="text-futuristic-400 hover:text-futuristic-100">
            <span className="sr-only">{t.info}</span>
            <svg className="w-8 h-8" viewBox="0 0 18 18" aria-hidden="true">
              <path fill="currentColor" d="M8 15A7 7 0 1 1 8 1a7 7 0 0 1 0 14zm0 1A8 8 0 1 0 8 0a8 8 0 0 0 0 16z" />
              <path fill="currentColor" d="m8.93 6.588-2.29.287-.082.38.45.083c.294.07.352.176.288.469l-.738 3.468c-.194.897.105 1.319.808 1.319.545 0 1.178-.252 1.465-.598l.088-.416c-.2.176-.492.246-.686.246-.275 0-.375-.193-.304-.533L8.93 6.588zM9 4.5a1 1 0 1 1-2 0 1 1 0 0 1 2 0z" />
            </svg>
          </a>
          <p className="text-futuristic-400 text-sm text-center">
            {t.copyright}
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Info;
