module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      zIndex: {
        '-10': '-10',
       },
      width: {
        '120': '30rem',
        '124': '31rem',
        '144': '36rem',
        '128': '26.875rem',
        '132': '38.2rem'
      },
      fontSize: {
        larger: ['200px' , {
        lineHeight: '20px'
        }]
      },
      height: {'128': '220px',}
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}