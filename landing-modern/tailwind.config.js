module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
          orbitron: ['Orbitron',  'sans-serif'],
          exo2: ['Exo 2',  'sans-serif'],
      },
      colors: {
        futuristic: {
          900: '#1a0025',
          800: '#2b0a3d',
          700: '#3a1852',
          600: '#4b2170',
          500: '#7c3aed',
          400: '#a78bfa',
          300: '#c4b5fd',
        },
        orb: '#a259f7',
        electric: '#a2597f',
        light: '#d1a9ff'
      },
      boxShadow: {
        'orb-glow': '0 0 40px 10px #a259f7',
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
        'pop': 'pop 0.4s cubic-bezier(0.4,0,0.2,1) forwards',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        pop: {
          '0%': { transform: 'scale(0.5)', opacity: '0' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}; 