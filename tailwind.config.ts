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
      },
      transitionTimingFunction: {
        'in-expo': 'cubic-bezier(0.55, 0.055, 0.675, 0.19)',
        'out-expo': 'cubic-bezier(0.215, 0.61, 0.355, 1)',
      },
      // transitionProperty: {
      //   top: 'top',
      //   bottom:
      //     'bottom 0.1s 0.14s ease, transform 0.1s cubic-bezier(0.55, 0.055, 0.675, 0.19)',
      // },
    },
  },
  plugins: [],
};
export default config;
