/** @type {import('tailwindcss').Config} */
import { nextui } from "@nextui-org/react";
import typography from '@tailwindcss/typography';
export default {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'root-primary': '#ffffff',
        'root-secondary': '#f8f8f8',
        'samantha-red': '#FF3B30',
        'samantha-red-light': '#FF6B6B',
        'samantha-red-dark': '#E02020',
        'hyperlink': '#FF3B30',
        'danger': '#EF3744',
        'success': '#4CAF50',
      },
    },
  },
  darkMode: "class",
  plugins: [
    nextui({
      defaultTheme: "dark",
      layout: {
        radius: {
          small: "5px",
          large: "20px",
        },
      },
      themes: {
        light: {
          colors: {
            primary: "#FF3B30",
            secondary: "#ffffff",
            background: "#ffffff",
          },
        },
        dark: {
          colors: {
            primary: "#FF3B30",
            secondary: "#ffffff",
            background: "#ffffff",
          },
        }
      }
    }),
    typography,
  ],
};
