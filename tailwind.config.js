/** @type {import('tailwindcss').Config} */
const sharedConfig = require('@workspace/config/tailwind.config.js');

module.exports = {
  ...sharedConfig,
  content: [
    ...sharedConfig.content,
    "./src/**/*.{js,jsx,ts,tsx}",
    "./packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ]
}
