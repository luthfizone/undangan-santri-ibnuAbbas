/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    extend: {
      textColor: {
        "primary": "#FDFDFB",
        "secondary": "#232323",
        "accent": "#508C4C",
      },
      backgroundColor: {
        "accent": "#508C4C",
      },
      backgroundImage: {
        "accent-gradient": "var(--greenish-gradient)",
      },
      borderColor: {
        "accent": "#508C4C",
      },
      fontFamily: {
        'primary': ['Inika', 'serif'],
        'secondary': ['Montserrat', 'sans-serif'],
        'accent': ['Ingrid Darling', 'cursive'],
      }
    },
  },
  plugins: [],
}

