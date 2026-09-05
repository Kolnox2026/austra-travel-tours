/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  theme: {
    extend: {
      colors: {
        navy: {
          DEFAULT: '#122542',
          50: '#eef1f6',
          100: '#d4dbe6',
          200: '#a9b7cd',
          300: '#7e93b4',
          400: '#536f9b',
          500: '#324f7a',
          600: '#1e3a63',
          700: '#122542',
          800: '#0d1b31',
          900: '#081120',
        },
        gold: {
          DEFAULT: '#b8862f',
          50: '#faf3e6',
          100: '#f2e0bd',
          200: '#e6c583',
          300: '#d9aa4f',
          400: '#c8963a',
          500: '#b8862f',
          600: '#966d26',
          700: '#74531d',
          800: '#523a15',
          900: '#33240d',
        },
        cream: '#faf8f4',
        verified: '#1e7a4c',
        review: '#b8862f',
        rejected: '#a33b3b',
      },
      fontFamily: {
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Inter"', 'system-ui', '-apple-system', 'sans-serif'],
      },
      boxShadow: {
        card: '0 4px 24px -4px rgba(18, 37, 66, 0.12)',
        'card-hover': '0 12px 32px -8px rgba(18, 37, 66, 0.2)',
      },
      maxWidth: {
        content: '1240px',
      },
    },
  },
  plugins: [],
};
