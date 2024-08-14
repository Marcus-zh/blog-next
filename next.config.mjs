import createMDX from '@next/mdx'
import { remarkMdxToc } from "remark-mdx-toc";

/** @type {import('next').NextConfig} */
const nextConfig = {
  pageExtensions: ['js', 'jsx', 'mdx', 'ts', 'tsx'],
  transpilePackages: ['next-mdx-remote-client'],
};

const withMDX = createMDX({
  options: {
    remarkPlugins :[remarkMdxToc,{name: "toc"}],
    rehypePlugins :[],
  }
})

export default withMDX(nextConfig)