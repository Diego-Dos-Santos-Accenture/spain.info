/** @type { import('@storybook/html-vite').Preview } */
export const parameters = {
  actions: { argTypesRegex: '^on[A-Z].*' },
  controls: {
    matchers: {
      color: /(background|color)$/i,
      date: /Date$/,
    },
  },
  docs: {
    source: { type: 'dynamic' },
  },
  options: {
    storySort: {
      method: 'alphabetical',
      order: ['Components', 'Foundations'],
    },
  },
};