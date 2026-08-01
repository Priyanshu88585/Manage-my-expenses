/** @type {import('tailwindcss').Config} */
import sharedConfig from '@workspace/config/tailwind.config.js';

export default {
  ...sharedConfig,
  content: [
    ...(sharedConfig.content || []),
    "./src/**/*.{js,jsx,ts,tsx}",
    "./packages/ui/src/**/*.{js,jsx,ts,tsx}",
  ]
};
