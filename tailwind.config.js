/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'slideReveal': 'reveal 1s linear',
        'hReveal': 'grw 3s linear',
        'smallRot': ' rotate 1.5s linear infinite',
        'infinteBounce':'bounce 2s infinite',
        'bounce2':'chk 3s linear',
        'changeCol':'changeCol 2s linear'
      },
      backgroundImage: {
      'hero': "url('/img/HeroBg.png')",
      'banking':"url('/img/bankingBg.png')",
      'investing':"url('/img/investingBg.png')",
      },
    },
  },
  plugins: [],
}

