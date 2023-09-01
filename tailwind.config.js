/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'class',
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "fondo-navbar": '#8696FE',
        "fondo-dashboard": '#F5FFFE',
        "fondo-cuenta-principal": '#4F709C',
        "fondo-cuenta-principal-hover": "#405D84",
        "fondo-cuenta": '#ADC2DE',
        "fondo-contenedor" : '#DAE7F9',
        "texto-verde": '#38E54D',
        "dark-purple": "#081A51",
        "light-white": "rgba(255,255,255,0.17)",
        "fondo-tabla-hover": '#C6D8EF',
        "fondo-boton-hover": '#3A5D8B',
        "fondo-botones-rojo": '#FF8080',
      },
      screens: {
        'sa': '868px',
      },
    },
  },
  plugins: [],
}