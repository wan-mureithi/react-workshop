import type { StorybookConfig } from '@storybook/react-vite'

const config: StorybookConfig = {
  //stories: ['../src/**/*.mdx', '../src/**/*.stories.@(js|jsx|mjs|ts|tsx)'], //how to look for stories
  stories: ['../src/components/**/*.stories.@(ts|tsx|js|jsx)'],
  addons: [
    '@storybook/addon-onboarding',
    '@storybook/addon-links',
    '@storybook/addon-essentials',
    '@chromatic-com/storybook',
    '@storybook/addon-interactions',
    '@storybook/addon-a11y',
  ],
  framework: {
    name: '@storybook/react-vite',
    options: {}
  }
}
export default config
