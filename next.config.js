/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["junseong-bucket.s3.ap-northeast-2.amazonaws.com"],
    minimumCacheTTL: 60,
  },
};

module.exports = nextConfig;
