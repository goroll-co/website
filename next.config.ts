// next.config.ts
import withNextIntl from "next-intl/plugin";
import type { NextConfig } from "next";

// สร้าง config พื้นฐาน
const config: NextConfig = {
  /* config options here */
};

// ใช้ withNextIntl ครอบ config
const nextConfig = withNextIntl()(config);

export default nextConfig;
