/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,jsx}",
    "./components/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#000000',
        surface: {
          DEFAULT: '#0a0a0a',
          elevated: '#121212',
          hover: '#1a1a1a',
        },
        border: {
          DEFAULT: '#1e1e1e',
          subtle: '#2a2a2a',
        },
        text: {
          primary: '#e0e0e0',
          secondary: '#b0b0b0',
          muted: '#777777',
          heading: '#f5f5f5',
        },
        accent: {
          DEFAULT: '#00ccff',
          hover: '#00b3e6',
          subtle: 'rgba(0, 204, 255, 0.1)',
          glow: 'rgba(0, 204, 255, 0.25)',
        },
        success: {
          DEFAULT: '#4caf50',
          subtle: 'rgba(76, 175, 80, 0.12)',
        },
        danger: {
          DEFAULT: '#ff4d4d',
          hover: '#e63939',
          subtle: 'rgba(255, 77, 77, 0.12)',
        },
        warning: {
          DEFAULT: '#ffb74d',
          subtle: 'rgba(255, 183, 77, 0.12)',
        },
      },
      fontFamily: {
        base: ['Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      boxShadow: {
        sm: '0 1px 2px rgba(0, 0, 0, 0.5)',
        md: '0 4px 12px rgba(0, 0, 0, 0.6)',
        lg: '0 8px 24px rgba(0, 0, 0, 0.7)',
        'glow-accent': '0 0 20px rgba(0, 204, 255, 0.25)',
        'glow-sm': '0 0 8px rgba(0, 204, 255, 0.25)',
      },
      keyframes: {
        'fade-in': {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        'fade-in-up': {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-20px)' },
        },
        bounceScroll: {
          '0%, 20%, 50%, 80%, 100%': { transform: 'translateY(0)' },
          '40%': { transform: 'translateY(10px)' },
          '60%': { transform: 'translateY(5px)' },
        },
      },
      animation: {
        'fade-in': 'fade-in 0.8s ease-out forwards',
        'fade-in-up': 'fade-in-up 0.8s ease-out forwards',
      },
    },
  },
  plugins: [],
}
