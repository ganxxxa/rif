/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "rifpersia.com",
        port: "",
        pathname: "/**",
      },
    ],
    unoptimized: true,
  },
  trailingSlash: true,
};

export default nextConfig;
