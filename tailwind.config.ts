import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{js,ts,jsx,tsx,mdx}', './components/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        axis: {
          orange: '#e74f26',
          blue: '#082d47',
          bg: '#070B16'
        }
      },
      boxShadow: {
        glow: '0 0 0 1px rgba(231,79,38,0.15), 0 15px 35px rgba(8,45,71,0.35)',
        soft: '0 10px 30px rgba(3,10,20,.45)'
      },
      backdropBlur: {
        xs: '2px'
      },
      animation: {
        float: 'float 6s ease-in-out infinite'
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' }
        }
      }
    }
  },
  plugins: []
};

export default config;
