/** @type {import('next').NextConfig} */

const { withSentryConfig } = require("@sentry/nextjs");

const nextConfig = {
  reactStrictMode: false,
  swcMinify: true,
  compiler: {
    styledComponents: true,
  },
  images: {
    domains: ["junseong-bucket.s3.ap-northeast-2.amazonaws.com"],
    minimumCacheTTL: 60,
  },
  sentry: {
    hideSourceMaps: true,
  },
};

const sentryWebpackPluginOptions = {
  org: "eatitdog",
  project: "eatitdog-front",
  slient: true,
};

module.exports = withSentryConfig(nextConfig, sentryWebpackPluginOptions);
