/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote-client','next-mdx-remote'],
  async rewrites() {
    return [
      {
        source: '/rss',
        destination: '/atom.xml',
      },
      {
        source: '/rss.xml',
        destination: '/atom.xml',
      },
      {
        source: '/feed',
        destination: '/atom.xml',
      },
      {
        source: '/feed.xml',
        destination: '/atom.xml',
      }
    ]
  },
};

export default nextConfig