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
          900: '#18181b', // gris anthracite mat
          800: '#232329', // gris foncé mat
          700: '#2d2d34', // gris mat intermédiaire
          600: '#3b3b43', // gris mat plus clair
          500: '#4b5563', // gris-bleu mat
          400: '#64748b', // gris-bleu clair mat
          300: '#a1a1aa', // gris clair mat
          50: '#f8f6f3', // blanc mat tirant vers le beige
          100: '#f3ede7', // beige très clair
        },
        orb: '#64748b', // gris-bleu mat pour les orbes
        electric: '#64748b', // même teinte pour la cohérence
        light: '#e5e7eb', // gris très clair mat
        beige: '#f8f6f3',
        beige2: '#f3ede7',
        primary: '#6366f1',
        secondary: '#8b5cf6',
        accent: '#a855f7',
        bgdark: '#fafafa',
        bgdarker: '#f5f5f5',
        'text-primary': '#1f2937',
        'text-secondary': '#6b7280',
        'text-muted': '#9ca3af',
        'border-light': '#e5e7eb',
        'glass': 'rgba(255, 255, 255, 0.8)',
        'glass-dark': 'rgba(0, 0, 0, 0.05)',
      },
      boxShadow: {
        'orb-glow': '0 0 16px 2px #64748b', // ombre douce et mate
        'soft': '0 2px 8px 0 rgba(24,24,27,0.08)',
        'halo': '0 0 120px 40px #f3ede7',
      },
      animation: {
        'futuristic-bg': 'futuristicBg 12s ease-in-out infinite',
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
        futuristicBg: {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms'), require('@tailwindcss/typography')],
}; 