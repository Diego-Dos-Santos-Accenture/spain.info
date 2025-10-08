/** @type { import('@storybook/html-vite').StorybookConfig } */
export default {
  stories: [
    "../stories/**/*.mdx",
    "../stories/**/*.stories.@(js|jsx|mjs|ts|tsx)"
  ],
  addons: [
    "@storybook/addon-docs",
    "@storybook/addon-essentials"
  ],
  framework: {
    name: "@storybook/html-vite",
    options: {}
  }
};