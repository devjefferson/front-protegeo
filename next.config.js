/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    serverComponentsExternalPackages: ["@mapbox/mapbox-sdk"],
  },
}

module.exports = nextConfig
