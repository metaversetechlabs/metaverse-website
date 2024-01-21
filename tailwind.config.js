/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      backgroundColor: {
        dark: '#0D000D',
        light: 'rgba(30,30,30,0.95)',
        white: 'rgb(203 213 225)',
      },
      fontFamily: {
        base: ['Plus Jakarta Sans'],
      },
      fontSize: {
        resized: 'clamp(12px,1vw,20px)',
        smallResized: 'clamp(14px,1.2vw,22px)',
        smResized: 'clamp(14px,1.4vw,24px)',
        mdResized: 'clamp(16px,1.6vw,30px)',
        lgResized: 'clamp(18px,2.1vw,50px)',
        xlResized: 'clamp(22px,2.5vw,70px)',
        contentResized: 'clamp(15px,1.5vw,28px)',
        headerResized: 'clamp(20px,2.3vw,60px)',
      },
      textColor: {},
      colors: {
        dark: '#0D000D',
        basePurple: '#4A2A4D',
        gradientFont1: '#DC519D',

        gradientFont2: '#A256F6',
        gradientFont3: '#576AD3',
        gradientFont4: '#DE519A',
      },
    },
  },
  plugins: [],
};
