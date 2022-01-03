module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      width: {'128': '26.875rem',},
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