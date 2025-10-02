import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#f4f4f4',
        secondary: '#0078d4',
        accent: '#666666',
      },
    },
  },
  plugins: [],
};

export default config;