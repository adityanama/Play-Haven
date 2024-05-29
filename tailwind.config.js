/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
      extend: {
        scale:{
            '30':'0.3',
            '40':'0.4',
        }
      },
    },
    plugins: [],
  };
  