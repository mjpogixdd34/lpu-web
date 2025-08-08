/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
    domains: ['lighthousepolytechnicuniversity.netlify.app'],
  },
  output: 'standalone',
  distDir: '.next',
}

export default nextConfig
