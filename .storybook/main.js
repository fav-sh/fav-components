module.exports = {
  stories: ['../stories/**/*.stories.tsx', '../stories/**/*.stories.ts'],

  addons: ['@storybook/addon-knobs/register'],

  webpackFinal: async (config) => {
    config.module.rules.push({
      test: /\.(ts|tsx)$/,
      loader: require.resolve('babel-loader'),
      options: {
        presets: [['react-app', { flow: false, typescript: true }]],
      },
    })
    config.resolve.extensions.push('.ts', '.tsx')
    return config
  },
}
