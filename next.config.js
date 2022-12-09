/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
}

module.exports = nextConfig

const withAntdLess = require('next-plugin-antd-less')

module.exports = withAntdLess({
  webpack(config) {
    return config
  },
})

const withLess = require('next-with-less')

module.exports = withLess({})
