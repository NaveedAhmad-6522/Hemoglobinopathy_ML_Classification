import type { NextConfig } from "next";

const isProd = process.env.NODE_ENV === "production";

const nextConfig: NextConfig = {
  output: "export",

  trailingSlash: true,

  images: {
    unoptimized: true,
  },

  basePath: isProd ? "/Hemoglobinopathy_ML_Classification" : "",

  assetPrefix: isProd
    ? "/Hemoglobinopathy_ML_Classification/"
    : "",
};

export default nextConfig;
