/** @type {import('tailwindcss').Config} */
export default {
    content: ['./src/**/*.{html,svelte,js,ts}'],

    theme: {
        extend: {},
    },

    plugins: [require('daisyui')],

    daisyui: {
        themes: [
            {
                mytheme: {
                    "primary": "#af1d2e",
                    "secondary": "#af081c",
                    "accent": "#f97282",
                    "neutral": "#992c3a",
                    "base-100": "#b23a48",
                    "info": "#ffbfc6",
                    "success": "#db2b40",
                    "warning": "#890010",
                    "error": "#ff0000",
                },
            },
        ],
    }
}