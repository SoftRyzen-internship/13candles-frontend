import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
    './layout/**/*.{js,ts,jsx,tsx,mdx}',
    './sections/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    // MEDIA QUERIES
    screens: {
      sm: '480px',
      md: '768px',
      xl: '1280px',

      smOnly: { max: '767.98px' },
      mdOnly: { min: '768px', max: '1279.98px' },
      notXl: { max: '1279.98px' },
    },
    // THEME
    extend: {
      // CONTAINER
      container: {
        center: true,
        padding: {
          DEFAULT: '1.25rem',
          sm: '1.25rem',
          md: '2rem',
          xl: '1.875rem',
        },
      },
      // FONTS
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        raleway: ['var(--font-raleway)'],
      },
      fontSize: {
        base: ['16px', '1.2'],
        md: ['18px', '1.2'],
        lg: ['20px', '1.2'],
        xl: ['24px', '1.2'],
        xxl: ['32px', '1.2'],
        xxxl: ['40px', '1.2'],
      },
      // COLORS
      colors: {
        body: '#ffffff',
        black: {
          DEFAULT: '#000000',
          light: '#171717',
        },
        white: '#ffffff',
        gray: '#c5c5c5',
        'gray-light': '#ebebeb',
        red: '#ff4545',
        'red-light': '#FF5353',
        gold: '#FFC253',
      },
      boxShadow: {
        dropdown: '0 0 12px 0 rgba(0, 0, 0, 0.25)',
      },
    },
  },
  plugins: [],
};
export default config;
