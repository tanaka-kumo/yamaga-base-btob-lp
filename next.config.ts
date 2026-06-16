import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // 画像の外部ホストは利用が決まり次第追記する（例：Firebase Storage / CMS 等）
  images: {
    remotePatterns: [],
  },
};

export default nextConfig;
