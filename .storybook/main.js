/** @type { import('@storybook/nextjs').StorybookConfig } */
const path = require("path");
const fs   = require("fs");

const publicDir = path.join(__dirname, "..", "public");
const staticDirs = fs.existsSync(publicDir) ? ["../public"] : [];

const config = {
  stories: [
    "../src/stories/**/*.mdx",
    "../src/stories/**/*.stories.@(js|jsx|mjs|ts|tsx)",
    "../src/**/*.stories.@(js|jsx|mjs|ts|tsx)",
  ],
  addons: [
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-links",
    "@storybook/addon-a11y",
    "@storybook/addon-themes",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  staticDirs,
};

module.exports = config;
