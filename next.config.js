/** @type {import('next').NextConfig} */

const dns = require("dns");
dns.setDefaultResultOrder("ipv4first")

const nextConfig = {
    images: {
        domains: ['res.cloudinary.com']
      },
    experimental: {
      esmExternals: false,
      },
      
}

module.exports = nextConfig


