/** @type {import('next').NextConfig} */
require("dotenv").config();
const withImages = require("next-images");
// const webpack = require("webpack");
// const nextConfig = {
//   reactStrictMode: true,
//   webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
//     config.plugins.push(
//       new webpack.ProvidePlugin({
//         $: "jquery",
//         jQuery: "jquery",
//         "window.jQuery": "jquery",
//       })
//     );
//     return config;
//   },
// };

(module.exports = {
  i18n: {
    locales: ["vi-VN", "en"],
    defaultLocale: "vi-VN",
  },
  env: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },

  publicRuntimeConfig: {
    API_URL: process.env.API_URL,
    IMAGES_DOMAIN: process.env.IMAGES_DOMAIN,
  },

  images: {
    deviceSizes: [640, 768, 1024, 1280, 1600],
    imageSizes: [16, 32, 48, 64, 96],
    domains: [process.env.IMAGES_DOMAIN],
    path: "/_next/image",
    loader: "default",
  },
  // reactStrictMode: false,
}),
  withImages();
