/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    reactCompiler: true,
    ppr: 'incremental'
  },
  images:{
    remotePatterns:[
      {
        protocol:'https',
        hostname:'upload.wikimedia.org'
      },
      {
        protocol:'https',
        hostname:'img.freepik.com'
      }
    ]
  }
};

export default nextConfig;
