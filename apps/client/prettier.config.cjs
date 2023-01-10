/** @type {import('prettier').Config} */
const config = {
  ...require('configs/prettier.config'),
  plugins: [require('prettier-plugin-tailwindcss')],
}

module.exports = config
