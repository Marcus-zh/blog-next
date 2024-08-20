import createMDX from '@next/mdx'

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote-client'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins :[],
    rehypePlugins :[],
  }
})

export default withMDX(nextConfig)