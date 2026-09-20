/** @type {import('next').NextConfig} */
const cache = "public, max-age=86400, stale-while-revalidate=604800";

const nextConfig = {
  poweredByHeader: false,
  images: { formats: ["image/avif", "image/webp"] },
  async headers() {
    return [
      { source: "/videos/:path*", headers: [{ key: "Cache-Control", value: cache }] },
      { source: "/images/:path*", headers: [{ key: "Cache-Control", value: cache }] },
    ];
  },
};

export default nextConfig;
