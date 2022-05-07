module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-pink': 'linear-gradient(180deg, #EA75E2 0%, #639DC7 100%);',
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
      },
      animation: {
        'slide-in-left': 'slideInLeft 1s 0s forwards',
        'slide-in-right': 'slideInRight 1s 1s forwards',
      },
    },
  },
  plugins: [],
}
