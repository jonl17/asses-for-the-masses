const plugin = require('tailwindcss/plugin')

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'ass-gradient':
          'linear-gradient(180deg, #EA75E2 0%, #639DC7 21.88%, #A3E9FF 73.96%, #EA75E2 100%);',
      },
      backgroundSize: {
        'bg-zoom': '300% 400%',
      },
      keyframes: {
        slideInLeft: {
          from: { transform: 'translateX(-100%)' },
          to: { transform: 'translateX(0)' },
        },
        slideInRight: {
          from: { transform: 'translateX(100%)' },
          to: { transform: 'translateX(0)' },
        },
        moveBg: {
          from: { backgroundPosition: '0 0' },
          to: { backgroundPosition: '-100% 100%' },
        },
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s 0s forwards',
        'slide-in-right': 'slideInRight 1s 1s forwards',
        'move-bg': 'moveBg 35s infinite alternate',
      },
      fontFamily: {
        galindo: ['Galindo', 'cursive'],
        fatAss: ['Fat Ass', 'cursive'],
      },
      fontSize: {
        parag: '23px',
        paragMobile: '16px',
        heading: '60px',
        headingMobile: '33px',
      },
    },
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents, e, prefix, config }) {}),
  ],
}
