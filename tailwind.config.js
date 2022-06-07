module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Kanit', 'sans-serif'],
      serif: ['Kanit', 'serif']
    },
    container: {
      center: true,
      padding: '16px',
    },
    fontSize: {
      'xs': '13px',
      'md': '16px',
      'lg': '18px',
      'xl': '20px',
      '2xl': '24px'
    },
    boxShadow: {
      sm: '0 2px 2px 0 rgba(0, 0, 0, 0.05)',
      'top-sm': '0 -2px 2px 0 rgba(0, 0, 0, 0.05)',
      none: '0 0 #0000'
    },
    extend: {
      minWidth: {
        '96': '96px',
      },
      borderRadius: {
        'sm': '8px',
        'md': '10px'
      },
      width: {
        36: '36px',
      },
      minHeight: {
        104: '104px'
      },
      height: {
        75: '75px',
        50: '50px',
        36: '36px',
      }
    },
    minHeight: {
      '1/2': '50%',
    }
  },
  plugins: [],
}
