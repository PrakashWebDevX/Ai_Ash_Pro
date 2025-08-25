module.exports = {
  content: ["./pages/*.{html,js}", "./index.html", "./js/*.js"],
  theme: {
    extend: {
      colors: {
        // Primary Colors
        primary: {
          DEFAULT: "#1a237e", // indigo-900
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        // Secondary Colors
        secondary: {
          DEFAULT: "#3f51b5", // indigo-500
          50: "#e8eaf6", // indigo-50
          100: "#c5cae9", // indigo-100
          200: "#9fa8da", // indigo-200
          300: "#7986cb", // indigo-300
          400: "#5c6bc0", // indigo-400
          500: "#3f51b5", // indigo-500
          600: "#3949ab", // indigo-600
          700: "#303f9f", // indigo-700
          800: "#283593", // indigo-800
          900: "#1a237e", // indigo-900
        },
        // Accent Colors
        accent: {
          DEFAULT: "#2196f3", // blue-500
          50: "#e3f2fd", // blue-50
          100: "#bbdefb", // blue-100
          200: "#90caf9", // blue-200
          300: "#64b5f6", // blue-300
          400: "#42a5f5", // blue-400
          500: "#2196f3", // blue-500
          600: "#1e88e5", // blue-600
          700: "#1976d2", // blue-700
          800: "#1565c0", // blue-800
          900: "#0d47a1", // blue-900
        },
        // Background Colors
        background: "#fafafa", // gray-50
        surface: "#ffffff", // white
        // Text Colors
        text: {
          primary: "#212121", // gray-800
          secondary: "#757575", // gray-600
        },
        // Status Colors
        success: {
          DEFAULT: "#4caf50", // green-500
          50: "#e8f5e8", // green-50
          100: "#c8e6c9", // green-100
          200: "#a5d6a7", // green-200
          300: "#81c784", // green-300
          400: "#66bb6a", // green-400
          500: "#4caf50", // green-500
          600: "#43a047", // green-600
          700: "#388e3c", // green-700
          800: "#2e7d32", // green-800
          900: "#1b5e20", // green-900
        },
        warning: {
          DEFAULT: "#ff9800", // orange-500
          50: "#fff3e0", // orange-50
          100: "#ffe0b2", // orange-100
          200: "#ffcc80", // orange-200
          300: "#ffb74d", // orange-300
          400: "#ffa726", // orange-400
          500: "#ff9800", // orange-500
          600: "#fb8c00", // orange-600
          700: "#f57c00", // orange-700
          800: "#ef6c00", // orange-800
          900: "#e65100", // orange-900
        },
        error: {
          DEFAULT: "#f44336", // red-500
          50: "#ffebee", // red-50
          100: "#ffcdd2", // red-100
          200: "#ef9a9a", // red-200
          300: "#e57373", // red-300
          400: "#ef5350", // red-400
          500: "#f44336", // red-500
          600: "#e53935", // red-600
          700: "#d32f2f", // red-700
          800: "#c62828", // red-800
          900: "#b71c1c", // red-900
        },
        // Border Colors
        border: {
          DEFAULT: "#e0e0e0", // gray-300
          light: "#f5f5f5", // gray-100
        },
      },
      fontFamily: {
        sans: ['Inter', 'sans-serif'],
        mono: ['JetBrains Mono', 'monospace'],
        inter: ['Inter', 'sans-serif'],
        jetbrains: ['JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'xs': ['0.75rem', { lineHeight: '1rem' }],
        'sm': ['0.875rem', { lineHeight: '1.25rem' }],
        'base': ['1rem', { lineHeight: '1.5rem' }],
        'lg': ['1.125rem', { lineHeight: '1.75rem' }],
        'xl': ['1.25rem', { lineHeight: '1.75rem' }],
        '2xl': ['1.5rem', { lineHeight: '2rem' }],
        '3xl': ['1.875rem', { lineHeight: '2.25rem' }],
        '4xl': ['2.25rem', { lineHeight: '2.5rem' }],
        '5xl': ['3rem', { lineHeight: '1' }],
        '6xl': ['3.75rem', { lineHeight: '1' }],
      },
      boxShadow: {
        'subtle': '0 4px 12px rgba(0, 0, 0, 0.08)',
        'card': '0 2px 8px rgba(0, 0, 0, 0.06)',
        'modal': '0 8px 32px rgba(0, 0, 0, 0.12)',
        'floating': '0 4px 12px rgba(0, 0, 0, 0.08)',
      },
      animation: {
        'fade-in': 'fadeIn 300ms ease-out',
        'slide-up': 'slideUp 300ms ease-out',
        'ai-switch': 'aiSwitch 400ms ease-out',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        slideUp: {
          '0%': { opacity: '0', transform: 'translateY(20px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        aiSwitch: {
          '0%': { opacity: '0', transform: 'scale(0.95)' },
          '100%': { opacity: '1', transform: 'scale(1)' },
        },
      },
      transitionDuration: {
        '200': '200ms',
        '300': '300ms',
        '400': '400ms',
      },
      transitionTimingFunction: {
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
      },
      spacing: {
        '18': '4.5rem',
        '88': '22rem',
        '128': '32rem',
      },
      borderRadius: {
        'xl': '0.75rem',
        '2xl': '1rem',
        '3xl': '1.5rem',
      },
    },
  },
  plugins: [],
}