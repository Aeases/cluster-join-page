/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'steamuserimages-a.akamaihd.net',
        pathname: '/ugc/**',
      },
    ],
  },
}


module.exports = nextConfig
