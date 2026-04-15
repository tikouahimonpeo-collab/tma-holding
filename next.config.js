/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
      { protocol: "https", hostname: "d22po4pjz3o32e.cloudfront.net" },
      { protocol: "https", hostname: "relume-assets.s3.us-east-1.amazonaws.com" },
    ],
  },
};

module.exports = nextConfig;
