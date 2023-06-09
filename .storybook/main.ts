import type { StorybookConfig } from '@storybook/react-vite';

const config: StorybookConfig = {
  stories: [
    '../src/stories/**/*.stories.mdx',
    '../src/stories/**/*.stories.tsx',
  ],
  staticDirs: ['../public'],
  addons: ['@storybook/addon-essentials', '@storybook/addon-a11y'],
  core: {
    builder: '@storybook/builder-vite',
    disableTelemetry: true,
  },
  framework: {
    name: '@storybook/react-vite',
    options: {},
  },
  docs: {
    autodocs: true,
  },
};
export default config;
