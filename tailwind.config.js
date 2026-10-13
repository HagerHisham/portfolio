/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        forest: {
          50: '#F2F7F4',
          100: '#E3EDE7',
          200: '#C8DBD0',
          300: '#A1C2AF',
          400: '#70A483',
          500: '#498560',
          600: '#376B4D',
          700: '#2A543C',
          800: '#1E3E2D',
          900: '#162F22',
          950: '#0B1A12',
        },
        olive: {
          50: '#F6F7F3',
          100: '#EBEFE5',
          200: '#D7DFCC',
          300: '#BCC9AA',
          400: '#9EAFA7',
          500: '#7C9375',
          600: '#62765C',
          700: '#4D5D48',
          800: '#3D4A3A',
          900: '#333E31',
        },
        offwhite: {
          DEFAULT: '#FBFBFA',
          50: '#FFFFFF',
          100: '#FBFBFA',
          200: '#F6F7F4',
          300: '#EEEFEA',
          400: '#E3E5DD',
        },
        charcoal: {
          DEFAULT: '#19201C',
          50: '#F6F7F7',
          100: '#E8EAE9',
          200: '#D0D4D2',
          300: '#ABB3AF',
          400: '#7D8983',
          500: '#5A6660',
          600: '#424C47',
          700: '#313935',
          800: '#232926',
          900: '#19201C',
          950: '#0F1311',
        }
      },
      fontFamily: {
        sans: [
          'Plus Jakarta Sans',
          'Inter',
          '-apple-system',
          'BlinkMacSystemFont',
          'Segoe UI',
          'Roboto',
          'Helvetica Neue',
          'sans-serif'
        ],
        mono: [
          'JetBrains Mono',
          'Fira Code',
          'ui-monospace',
          'monospace'
        ]
      },
      boxShadow: {
        'subtle': '0 1px 3px 0 rgba(22, 47, 34, 0.04), 0 1px 2px -1px rgba(22, 47, 34, 0.03)',
        'card': '0 4px 20px -2px rgba(22, 47, 34, 0.05), 0 2px 6px -1px rgba(22, 47, 34, 0.03)',
        'card-hover': '0 12px 30px -4px rgba(22, 47, 34, 0.08), 0 4px 12px -2px rgba(22, 47, 34, 0.04)',
      }
    },
  },
  plugins: [],
}
