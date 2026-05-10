/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
  darkMode: ['selector', '[data-theme="dark"]'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        display: ['Outfit', 'sans-serif'],
      },
      colors: {
        primary: {
          DEFAULT: '#E8421A',
          dark: '#C0310E',
          light: '#FF6B42',
        },
        accent: '#F5A623',
        surface: {
          light: '#FFFFFF',
          dark: '#121212',
        },
        card: {
          light: '#F8F8F8',
          dark: '#1E1E1E',
        },
        text: {
          light: '#1A1A1A',
          dark: '#E8E8E8',
          muted: '#6B7280',
        },
      },
      boxShadow: {
        card: '0 4px 20px rgba(0,0,0,0.08)',
        'card-dark': '0 4px 20px rgba(0,0,0,0.4)',
        'card-hover': '0 8px 32px rgba(232,66,26,0.25)',
      },
      backgroundImage: {
        'gradient-primary': 'linear-gradient(135deg, #E8421A 0%, #C0310E 100%)',
        'gradient-hero': 'linear-gradient(135deg, #1a0a0a 0%, #2d0d0d 40%, #1a1a2e 100%)',
        'gradient-hero-light': 'linear-gradient(135deg, #fff5f2 0%, #fff0eb 40%, #f0f4ff 100%)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(24px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        orbFloat: {
          '0%, 100%': { transform: 'translateY(0) scale(1)' },
          '50%': { transform: 'translateY(-20px) scale(1.05)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.6s ease forwards',
        'orb-float': 'orbFloat 8s ease-in-out infinite',
      },
    },
  },
  plugins: [],
};
