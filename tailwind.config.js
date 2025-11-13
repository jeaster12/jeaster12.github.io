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
            // Remove top margins globally
            '--tw-prose-body': 'inherit',
            '* + *': {
              marginTop: '0',
            },
            // Set specific spacing where needed
            'h1, h2': {
              marginTop: '0',
              marginBottom: '0',
            },
            'h3, h4': {
              marginTop: '0',
              marginBottom: '0.5em',
            },
            'ul, ol': {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'li': {
              marginTop: '0.5em',
              marginBottom: '0.5em',
            },
            'p, img, pre': {
              marginTop: '0',
              marginBottom: '0',
            },
          },
        },
      },
      fontFamily: {
        opensans: ['Open Sans Variable', 'sans-serif'],
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
        // Map primary to the full blue color scale (change 'blue' to any color like 'lime', 'purple', etc.)
        primary: {
          ...colors.purple,
          DEFAULT: colors.purple[600], // bg-primary, text-primary, border-primary will use this
        }
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
