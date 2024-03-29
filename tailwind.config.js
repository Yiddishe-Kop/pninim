const defaultTheme = require('tailwindcss/defaultTheme')

module.exports = {
  purge: [
    './resources/**/*.blade.php',
    './resources/**/*.html',
    './resources/**/*.vue',
    './resources/**/*.css',
  ],
  theme: {
    extend: {
      colors: {
        brand: '#ffad1f',
        gray: {
          50: '#fbfdfe',
          80: '#EFF4F8',
          100: '#f7fafc',
          200: '#edf2f7',
          300: '#e2e8f0',
          400: '#cbd5e0',
          500: '#a0aec0',
          600: '#718096',
          700: '#4a5568',
          800: '#2d3748',
          900: '#1a202c',
        },
      },
      fontFamily: {
        sans: ['Heebo var', ...defaultTheme.fontFamily.sans],
        siddur: ['siddur', 'Heebo var', ...defaultTheme.fontFamily.sans],
        sbl: ['SBLhebrew', 'Heebo var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xxs: '0.675rem'
      },
      borderRadius: {
        xl: '1rem'
      },
      boxShadow: theme => ({
        outline: '0 0 0 2px ' + theme('colors.indigo.500'),
      }),
      fill: theme => theme('colors'),
    },
  },
  variants: {
    fill: ['responsive', 'hover', 'focus', 'group-hover'],
    opacity: ['hover', 'focus', 'group-hover'],
    textColor: ['responsive', 'hover', 'focus', 'group-hover'],
    zIndex: ['responsive', 'focus'],
    display: ['responsive', 'hover', 'group-hover'],
  },
  plugins: [
    require('@tailwindcss/ui'),
  ],
}
