/** @type {import('tailwindcss').Config} */
import keepPreset from 'keep-react/preset';

module.exports = {
    content: ['./src/**/*.{js,ts,jsx,tsx,mdx}', './node_modules/keep-react/**/*.{js,jsx,ts,tsx}'],
    theme: {
        extend: {
            fontFamily: {
                inter: ['var(--font-inter)'],
                josefin_sans: ['var(--font-josefin-sans)'],
            },
            backgroundColor: (theme) => ({
                ...theme('colors'),
                primary: '#585E70',
                secondary: '#142966',
                tertiary: '#2E5CE6',
                fourth: '#7086E1',
            }),
            borderColor: ({ theme }) => ({
                ...theme('colors'),
                primary: '#632E8A',
                secondary: '#503878',
            }),
            textColor: {
                primary: '#142966',
                secondary: '#7592EA',
                tertiary: '#2E5CE6',
                fourth: '#4F5364',
                fifth: '#2447B3',
            },
        },
    },
    darkMode: 'class',
    variants: {
        fill: ['hover', 'focus'],
    },
    presets: [keepPreset],
    plugins: [require('daisyui')],
    daisyui: {
        themes: false,
    },
};
