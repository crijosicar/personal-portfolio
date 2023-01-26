/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  i18n: {
    locales: ['en', 'es'],
    defaultLocale: 'en',
    localeDetection: true,
  },
  trailingSlash: true,
}

module.exports = nextConfig