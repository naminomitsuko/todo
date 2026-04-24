import type { NextConfig } from 'next'

const nextConfig: NextConfig = {
  output: 'export',
  basePath: process.env.GITHUB_ACTIONS ? '/todo' : '',
  trailingSlash: true,
}

export default nextConfig
