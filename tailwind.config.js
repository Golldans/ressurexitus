module.exports = {
  content: ["./src/pages/**/*.{js,ts,jsx,tsx}", "./src/components/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      gridTemplateRows: {
        '7': 'repeat(7, minmax(0,1fr))',
      },
      gridRow:  {
        'span-7': 'span 7 / span 7',
      }
    },
  },
  plugins: [],
}
