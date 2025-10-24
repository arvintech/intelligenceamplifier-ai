import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        // macOS Tahoe-inspired system colors
        'macos-blue': {
          light: '#007AFF',
          dark: '#0A84FF',
        },
        'macos-purple': {
          light: '#AF52DE',
          dark: '#BF5AF2',
        },
        'macos-green': {
          light: '#34C759',
          dark: '#30D158',
        },
        'macos-orange': {
          light: '#FF9500',
          dark: '#FF9F0A',
        },
        'macos-red': {
          light: '#FF2D55',
          dark: '#FF375F',
        },
        'macos-gray': {
          1: '#1d1d1f',
          2: '#424245',
          3: '#d2d2d7',
          4: '#f5f5f7',
        },
      },
      animation: {
        'fade-in': 'fadeIn 0.8s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in-up': 'fadeInUp 1s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'fade-in-scale': 'fadeInScale 1.2s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'slide-up': 'slideUp 0.6s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
        'float': 'float 3s ease-in-out infinite',
        'float-slow': 'floatSlow 8s ease-in-out infinite',
        'scale-in': 'scaleIn 0.5s cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeInUp: {
          '0%': { 
            opacity: '0',
            transform: 'translateY(40px)',
          },
          '100%': { 
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
        fadeInScale: {
          '0%': { 
            opacity: '0',
            transform: 'scale(0.9)',
          },
          '100%': { 
            opacity: '1',
            transform: 'scale(1)',
          },
        },
        slideUp: {
          '0%': { 
            transform: 'translateY(20px)', 
            opacity: '0',
          },
          '100%': { 
            transform: 'translateY(0)', 
            opacity: '1',
          },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        floatSlow: {
          '0%, 100%': { 
            transform: 'translateY(0px) translateX(0px)',
          },
          '25%': { 
            transform: 'translateY(-15px) translateX(10px)',
          },
          '50%': { 
            transform: 'translateY(-25px) translateX(-10px)',
          },
          '75%': { 
            transform: 'translateY(-15px) translateX(10px)',
          },
        },
        scaleIn: {
          '0%': { 
            transform: 'scale(0.95)', 
            opacity: '0',
          },
          '100%': { 
            transform: 'scale(1)', 
            opacity: '1',
          },
        },
      },
      backdropBlur: {
        'xs': '2px',
        'xl': '40px',
        '2xl': '50px',
      },
      borderRadius: {
        'macos': '10px',
        'macos-lg': '14px',
        'macos-xl': '20px',
        'macos-2xl': '28px',
      },
      boxShadow: {
        'macos': '0 1px 2px rgba(0, 0, 0, 0.04), 0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04)',
        'macos-lg': '0 2px 4px rgba(0, 0, 0, 0.04), 0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04)',
        'macos-xl': '0 4px 8px rgba(0, 0, 0, 0.04), 0 8px 16px rgba(0, 0, 0, 0.04), 0 16px 32px rgba(0, 0, 0, 0.02)',
      },
      transitionTimingFunction: {
        'macos': 'cubic-bezier(0.25, 0.46, 0.45, 0.94)',
      },
    },
  },
  plugins: [],
};
export default config;



