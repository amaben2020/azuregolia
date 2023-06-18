/** @type {import('next').NextConfig} */
const nextConfig = {
  serverActions: true,
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "images.dog.ceo",
        // port: "",
        // pathname: "/account123/**",
      },
    ],
  },
};

module.exports = nextConfig;
