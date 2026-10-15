/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
      },
      colors: {
        cosmic: {
          950: '#02040a',
          900: '#050a15',
          850: '#081020',
          800: '#0d182e',
          700: '#142343',
        },
        neon: {
          cyan: '#00f0ff',
          sky: '#38bdf8',
          blue: '#2563eb',
          indigo: '#4f46e5',
        }
      },
      boxShadow: {
        'cyan-glow': '0 0 35px -5px rgba(0, 240, 255, 0.3)',
        'blue-glow': '0 0 45px -5px rgba(37, 99, 235, 0.35)',
        'cyan-card': '0 0 25px -5px rgba(0, 240, 255, 0.15)',
      },
      animation: {
        'pulse-slow': 'pulse 4s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        'radar': 'radar 8s linear infinite',
      },
      keyframes: {
        radar: {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(360deg)' },
        }
      }
    },
  },
  plugins: [],
};
