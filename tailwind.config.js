/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",
    'node_modules/flowbite-vue/**/*.{js,jsx,ts,tsx,vue}',
    'node_modules/flowbite/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {
      cursor: {
        'fancy': 'url(https://www.flaticon.com/free-icon/pointer_178432), pointer !important',
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
};
