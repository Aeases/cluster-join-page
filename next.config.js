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
      {
        protocol: 'https',
        hostname: 'media.forgecdn.net',
        pathname: '/avatars/**',
      },
      {
        protocol: 'https',
        hostname: 'www.minecraft.net',
        pathname: '/etc.clientlibs/minecraft/clientlibs/**',
      },
      {
        protocol: 'https',
        hostname: 'media.discordapp.net',
        pathname: '/attachments/**',
      },
    ],
  },
}


module.exports = nextConfig