import { Inter, Josefin_Sans } from 'next/font/google';

const inter = Inter({
    preload: true,
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-inter',
});

const josefinSans = Josefin_Sans({
    preload: true,
    subsets: ['latin'],
    display: 'swap',
    variable: '--font-josefin_sans',
});

export { inter, josefinSans };
