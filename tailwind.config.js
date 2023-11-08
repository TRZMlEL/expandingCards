/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      backgroundImage: {
        'plate1': "url('img/_TRZ0848G.jpg')",
        'plate2': "url('img/_TRZ8462G.jpg')",
        'plate3': "url('img/_TRZ9798G.jpg')",
        'plate4': "url('img/DSC00405G.jpg')",
        'plate5': "url('img/DSC00781G.jpg')",
      }
    }
  },
  plugins: [],
}