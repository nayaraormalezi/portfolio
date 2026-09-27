import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  poweredByHeader: false,
  async redirects() {
    return [
      { source: "/resume", destination: "/curriculo", permanent: false },
      { source: "/trajetoria", destination: "/curriculo", permanent: false },
      {
        source: "/work/enterprise-digital-product",
        destination: "/projetos/trajetoria-totvs",
        permanent: false,
      },
      { source: "/projetos/totvs", destination: "/projetos/trajetoria-totvs", permanent: false },
    ];
  },
};

export default nextConfig;
