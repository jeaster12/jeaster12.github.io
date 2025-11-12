const colors = require('tailwindcss/colors');


/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}', './public/**/*.html'],
  darkMode: 'class',
  plugins: [require('@tailwindcss/typography')],
  theme: {
    extend: {
      typography: {
        DEFAULT: {
          css: {
            h1: {
              marginBottom: '0', // Adjust heading bottom margin
              marginTop: '0', // Adjust heading top margin
            },
            h2: {
              marginBottom: '0', // Adjust heading top margin
              marginTop: '0', // Adjust heading bottom margin
            },
            h3: {
              marginBottom: '0.5em', // Adjust heading top margin
              marginTop: '0', // Adjust heading bottom margin
            },
            h4: {
              marginBottom: '0.5em',
              marginTop: '0',
            },
            p: {
              marginTop: '0', // Adjust paragraph top margin
              marginBottom: '0', // Adjust paragraph bottom margin
            },
            ul: {
              marginTop: '0.5em', // Adjust list item top margin
              marginBottom: '0.5em', // Adjust list item bottom margin
            },
            li: {
              marginTop: '0.5em', // Adjust list item top margin
              marginBottom: '0.5em', // Adjust list item bottom margin
            },
            img: {
              marginTop: '0',
              marginBottom: '0',
            },
            pre: {
              marginTop: '0',
              marginBottom: '0',
            },
          },
        },
      },
      fontFamily: {
        opensans: ['Open Sans Variable', 'sans-serif'],
        nunito: ['Nunito Sans Variable', 'sans-serif'],
        mono: ['Roboto Mono Variable', 'monospace']
      },
      boxShadow: {
        sectionBoxShadow: '0 8px 26px 0 rgba(22,24,26,0.07)',
        sectionBoxShadowHover: '0 8px 32px 0 rgba(22,24,26,0.11)',
      },
      colors: {
        // Use default Tailwind colors with updated names
        ...colors,
        // Custom colors
        bodyBg: '#f2f5f8',
        boxDark: '#1c1e20',
        borderMain: colors.gray[200],
        borderMainDark: 'rgba(255, 255, 255, 0.06)',
        primary: colors.blue[600],
        primaryHover: colors.blue[800],
      },
      transitionTimingFunction: {
        custom: 'cubic-bezier(0.165, 0.84, 0.44, 1)'
      },
      keyframes: {
        lineMove: {
          '0%': {
            top: '-80px'
          },
          '100%': {
            top: '100%'
          }
        }
      },
      animation: {
        bgLine: 'lineMove 8s linear infinite'
      },
    }
  }
}
