import type { Config } from 'tailwindcss';

const config: Config = {
  mode: 'jit',
  content: [
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
      mediaHover: { raw: '(hover: hover)' },
    },
    // THEME
    extend: {
      // FONTS
      fontFamily: {
        montserrat: ['var(--font-montserrat)'],
        raleway: ['var(--font-raleway)'],
      },
      fontSize: {
        base: ['16px', '1.5'],
        md: ['18px', '1.5'],
        lg: ['20px', '1.5'],
        xl: ['24px', '1.5'],
        xxl: ['32px', '1.5'],
        xxxl: ['40px', '1.5'],
      },
      // COLORS
      colors: {
        body: '#ffffff',
        black: {
          DEFAULT: '#000000',
          light: '#171717',
        },
        white: '#ffffff',
        brown: '#c5c5c5',
      },
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
    },
  },
  plugins: [],
};
export default config;
