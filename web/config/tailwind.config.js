/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {},
  },
  daisyui: {
    themes: [
      {
        light: {
          ...require('daisyui/src/colors/themes')['[data-theme=light]'],
          // primary: 'hsla(241,100%,69%, 1)',
          // secondary: 'hsla(241,100%,69%, 0.25)',
        },
      },
    ],
  },
  plugins: [require('daisyui')],
}
