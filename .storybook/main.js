module.exports = {
  stories: ['../stories/**/*.stories.tsx', '../stories/**/*.stories.ts'],

  addons: ['@storybook/addon-knobs/register'],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      use: [
        {
          loader: require.resolve('ts-loader'),
        },
      ],
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
