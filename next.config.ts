import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  output: "export",
  images: {
    unoptimized: true,
  },
  // Hapus komentar di bawah jika Anda menggunakan URL github.io/portofilio-mine (tanpa custom domain)
  // basePath: "/portofilio-mine",
};

export default nextConfig;
