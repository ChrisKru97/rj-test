module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",  ],
  theme: {
    borderRadius: { none: 0, sm: '6px', md: '12px', lg: '16px', full: '9999px' },
    extend: {
      colors: {
        primary: {bluelight2: '#E7F2FE', blue: "#00519E", 'primary-yellow': '#FABB00'},
        secondary: {
          bluedark2: '#004180',        },
          neutral: {white: "white",
          gray2: '#92A4AD',}
      },
      spacing: {
        0.5: '4px',
        0.75: '6px',
        1: '8px',
        1.5: '12px',
        2: '16px',
        2.5: '20px',
        3: '24px',
        4: '32px',
        5: '40px',
        10: '80px',
      },
    },
  },
  plugins: [],
}
