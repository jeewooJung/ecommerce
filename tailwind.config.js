/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#000000', // 디올의 주요 색상인 검정색
          foreground: '#ffffff',
        },
        secondary: {
          DEFAULT: '#f0f0f0', // 디올 UI의 보조 색상
          foreground: '#000000',
        },
        accent: {
          DEFAULT: '#be0027', // 디올 레드 액센트 색상
          foreground: '#ffffff',
        },
        destructive: {
          DEFAULT: '#be0027',
          foreground: '#ffffff',
        },
        muted: {
          DEFAULT: '#f5f5f5',
          foreground: '#555555',
        },
        background: {
          DEFAULT: '#ffffff',
        },
        border: {
          DEFAULT: '#e0e0e0',
        },
        ring: {
          DEFAULT: '#000000',
        },
        dior: {
          black: '#000000',
          white: '#ffffff',
          gray: {
            100: '#f5f5f5',
            200: '#e5e5e5',
            300: '#d4d4d4',
            400: '#a3a3a3',
            500: '#737373',
            600: '#525252',
            700: '#404040',
            800: '#262626',
            900: '#171717',
          },
          red: '#be0027', // 디올 레드 (예: Rouge Dior)
          gold: '#d4af37', // 디올 골드 (예: J'adore)
          navy: '#202a44', // 디올 네이비
        },
      },
      fontFamily: {
        sans: ['Roboto', 'Noto Sans KR', 'sans-serif'],
        serif: ['Playfair Display', 'serif'],
      },
      borderRadius: {
        sm: '0.125rem',
        DEFAULT: '0.25rem',
        md: '0.375rem',
        lg: '0.5rem',
      },
      boxShadow: {
        sm: '0 1px 2px 0 rgba(0, 0, 0, 0.05)',
        DEFAULT: '0 1px 3px 0 rgba(0, 0, 0, 0.1), 0 1px 2px 0 rgba(0, 0, 0, 0.06)',
        md: '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06)',
        lg: '0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05)',
        xl: '0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)',
      },
    },
  },
  plugins: [],
}