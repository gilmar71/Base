import('next').NextConfig;

const nextConfig = {
  trailingSlash: true,
  pageExtensions: ['mdx', 'md', 'jsx', 'js', 'tsx', 'ts'],
  images: {
    minimumCacheTTL: 60 * 60,
    domains: [
      'localhost',
      'apiagencia.codie.com.br',
      'painelagencia.codie.com.br',
    ],
  },
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
};

module.exports = nextConfig;
