module.exports = {
  mode: 'jit',
  content: [
     './app/**/*.{js,ts,jsx,tsx}',   
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: '#2F3C7E',
        accent:  '#FF6B6B',
        bg:      '#F7F9FC',
        surface: '#FFFFFF',
        'text-primary': '#1F2937',
        'text-secondary': '#4B5563',
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui'],
      },
    },
  },
  plugins: [],
}
