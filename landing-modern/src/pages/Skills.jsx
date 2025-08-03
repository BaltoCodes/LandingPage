import React from 'react'

const Skills = ({t}) => {
  const skillCategories = [
    {
      title: 'Analytical',
      icon: '🧠📚',
      skills: [
        { name: 'Python', level: 95, color: '#61DAFB' },
        { name: 'Javascript', level: 90, color: '#00f5ff' },
        { name: 'Machine Learning', level: 92, color: '#06B6D4' },
        { name: 'Data Analysis', level: 88, color: '#646CFF' },
        { name: 'C++', level: 95, color: '#F7DF1E' },
        { name: 'TypeScript', level: 85, color: '#3178C6' }
      ]
    },
    {
      title: 'Backend tools',
      icon: '⚙️',
      skills: [
        { name: 'Clickhouse', level: 90, color: '#3776AB' },
        { name: 'Flask', level: 88, color: '#000000' },
        { name: 'Django', level: 80, color: '#092E20' },
        { name: 'PostgreSQL', level: 85, color: '#336791' },
        { name: 'MongoDB', level: 82, color: '#47A248' },
      ]
    },
    {
      title: 'DevOps & Tools',
      icon: '🚀',
      skills: [
        { name: 'Git', level: 90, color: '#F05032' },
        { name: 'AWS', level: 80, color: '#FF9900' },
        { name: 'CI/CD', level: 82, color: '#8b5cf6' },
        { name: 'Linux', level: 88, color: '#FCC624' },
        { name: 'Nginx', level: 75, color: '#009639' }
      ]
    }
  ]

  return (
    <section id="skills" className="py-20 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-6xl font-bold mb-6">
            <span className="text-neon-blue neon-text">{t.competences}</span>
          </h2>
          <div className="w-24 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto mb-8"></div>

        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {skillCategories.map((category, categoryIndex) => (
            <div key={categoryIndex} className="glass-effect group hover:scale-105 rounded-2xl p-8 border border-neon-blue/20 hover:border-neon-blue/40 transition-all duration-300">
              <div className="text-center mb-8">
                <div className="text-4xl mb-4">{category.icon}</div>
                <h3 className="text-2xl font-bold text-gray-400 mb-2">{category.title}</h3>
                <div className="w-16 h-1 bg-gradient-to-r from-neon-blue to-neon-purple mx-auto"></div>
              </div>

              <div className="space-y-6">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-gray-500 font-medium">{skill.name}</span>
                      <span className="text-neon-blue font-mono text-sm">{skill.level}%</span>
                    </div>
                    <div className="relative h-2 bg-gray-800 rounded-full overflow-hidden">
                      <div
                        className="absolute top-0 left-0 h-full rounded-full transition-all duration-1000 ease-out"
                        style={{
                          width: `${skill.level}%`,
                          background: `linear-gradient(90deg, ${skill.color}, ${skill.color}80)`,
                          boxShadow: `0 0 10px ${skill.color}40`
                        }}
                      ></div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Additional skills grid */}
        <div className="mt-16">
          <h3 className="text-3xl font-bold text-gray-400 text-center mb-12">
            {t.other}
          </h3>
          <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
            {[
              'Node.js', 'Express', 
              'PyTorch', 'Scikit-learn', 'Pandas', 'NumPy', 'Jupyter',
              'Kubernetes', 'Solana', 'Ethereum', 'Solidity', 'Bitcoin'
            ].map((tech, index) => (
                <div
                key={index}
                className="p-4 glass-effect rounded-xl border border-neon-blue/20 text-center hover:border-black/40 transition-all duration-300 group hover:scale-105"
                >
                <span className="text-gray-500 transition-colors duration-300 font-mono text-sm">
                    {tech}
                </span>
                </div>

            ))}
          </div>
        </div>
      </div>
    </section>
  )
}

export default Skills 