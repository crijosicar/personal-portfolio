/** @type {import('next').NextConfig} */
const nextConfig = {
  swcMinify: true,
  reactStrictMode: true,
  experimental: {
    appDir: true,
  },
  trailingSlash: true,
  images: {
    domains: ['localhost'],
  },
}

module.exports = nextConfig
