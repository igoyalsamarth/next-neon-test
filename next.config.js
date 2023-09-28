/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        domains: ['res.cloudinary.com']
      },
    experimental: {
      esmExternals: false,
      }
}

module.exports = nextConfig


