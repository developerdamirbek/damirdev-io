/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    dirs: ['src'],
  },
  images: {
    domains: ['download.logo.wine', 'static.vecteezy.com', 'i.pravatar.cc', 'loremflickr.com'],
  },

  reactStrictMode: true,
  swcMinify: true,

  webpack(config, options) {
    config.module.rules.push({
      test: /\.svg$/,
      issuer: { and: [/\.(js|ts)x?$/] },
      use: ['@svgr/webpack'],
    })

    return config
  },
}

export default nextConfig
