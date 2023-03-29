/* eslint-disable @typescript-eslint/ban-ts-comment */
/* eslint-disable @typescript-eslint/no-var-requires */
// @ts-nocheck
/**
 * Run `build` or `dev` with `SKIP_ENV_VALIDATION` to skip env validation.
 * This is especially useful for Docker builds.
 */
const { TailwindCSSWebpackPlugin } = require("tailwindcss-webpack-plugin");

/** @type {import("next").NextConfig} */
const config = {
  reactStrictMode: true,

  webpack: (config) => {
    config.plugins.push(
      new TailwindCSSWebpackPlugin({
        entry: "./src/styles/globals.css",
        config: "./tailwind-config.cjs",
      })
    );
    return config;
  },

  /**
   * If you have the "experimental: { appDir: true }" setting enabled, then you
   * must comment the below `i18n` config out.
   *
   * @see https://github.com/vercel/next.js/issues/41980
   */
  i18n: {
    locales: ["en"],
    defaultLocale: "en",
  },
};
module.exports = config;
