// tailwind.config.js
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          primary: {
            50: '#f0f9ff',
            100: '#e0f2fe',
            200: '#bae6fd',
            300: '#7dd3fc',
            400: '#38bdf8',
            500: '#0ea5e9',
            600: '#0284c7',
            700: '#0369a1',
            800: '#075985',
            900: '#0c4a6e',
          },
          dark: {
            100: '#1f2937',
            200: '#111827',
            300: '#0f172a',
            400: '#020617',
          }
        },
        animation: {
          'fade-in': 'fadeIn 0.6s ease-out',
          'slide-up': 'slideUp 0.6s ease-out',
          'float': 'float 6s ease-in-out infinite',
          'glow': 'glow 2s ease-in-out infinite alternate',
        },
        keyframes: {
          fadeIn: {
            '0%': { opacity: '0' },
            '100%': { opacity: '1' },
          },
          slideUp: {
            '0%': { opacity: '0', transform: 'translateY(30px)' },
            '100%': { opacity: '1', transform: 'translateY(0)' },
          },
          float: {
            '0%, 100%': { transform: 'translateY(0px)' },
            '50%': { transform: 'translateY(-20px)' },
          },
          glow: {
            '0%': { boxShadow: '0 0 20px rgba(14, 165, 233, 0.5)' },
            '100%': { boxShadow: '0 0 40px rgba(14, 165, 233, 0.8)' },
          }
        },
        backgroundImage: {
          'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
          'gradient-mesh': 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
          'ai-gradient': 'linear-gradient(135deg, #0ea5e9 0%, #3b82f6 50%, #8b5cf6 100%)',
        }
      },
    },
    plugins: [require('@tailwindcss/typography')],
  }