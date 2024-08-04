/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
          {
            protocol: 'https',
            hostname: 'lh5.googleusercontent.com',
            port: '',
            pathname: '/d/**',
          },
          {
              protocol: 'https',
              hostname: 'static.wixstatic.com',
              port: '',
              pathname: '/media/**',
            },
        ],
      },
}

module.exports = nextConfig
