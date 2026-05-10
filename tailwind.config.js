module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#1976D2',   // SMKN 1 Kediri Blue (biru logo)
          light: '#42A5F5',     // Biru muda
          dark: '#0D47A1',      // Biru tua
        },
        steel: {
          DEFAULT: '#546E7A',   // Abu-abu baja (seperti gear logo)
          light: '#90A4AE',     // Abu-abu terang
          dark: '#37474F',      // Abu-abu gelap
        },
      },
      fontFamily: {
        sans: ["Geist", "sans-serif"],
        mono: ["Geist Mono", "monospace"],
      },
      backgroundImage: {
        'glass': 'linear-gradient(135deg, rgba(255,255,255,0.82) 60%, rgba(25,118,210,0.10) 100%)',
        'hero': 'linear-gradient(135deg, #EFF6FF 0%, #DBEAFE 50%, #E0F2FE 100%)',
        'navbar': 'linear-gradient(90deg, #0D47A1 0%, #1976D2 60%, #546E7A 100%)',
      },
      boxShadow: {
        glass: '0 8px 32px 0 rgba(13, 71, 161, 0.12)',
        blue: '0 4px 20px 0 rgba(25, 118, 210, 0.25)',
      },
    },
  },
  plugins: [],
};
