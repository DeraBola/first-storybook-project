const path = require('path');
const tailwindcss = require('tailwindcss');

/** @type { import('@storybook/nextjs').StorybookConfig } */
const config = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: {},
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    // ...
  
    // Find and update the existing CSS rule to include tailwindcss
    const cssRule = config.module.rules.find((rule) => rule.test && rule.test.toString() === '/\\.css$/');
    if (cssRule) {
      cssRule.use.push({
        loader: 'postcss-loader',
        options: {
          postcssOptions: {
            ident: 'postcss',
            plugins: [tailwindcss],
          },
        },
      });
    }
  
    // ...
  
    return config;
  },
  
};
export default config;
