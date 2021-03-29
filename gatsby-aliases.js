const path = require('path');

const createAlias = (from, useArr) => useArr.reduce((acc, cur) => ({
  ...acc,
  [`@${cur}`]: path.resolve(__dirname, from, cur)
}), {});


module.exports = {
  resolve: 'gatsby-plugin-alias-imports',
  options: {
    alias: {
      '~': path.resolve(__dirname, 'src'),
      ...createAlias('src', [
        'pages',
        'components',
        'hooks',
        'helpers',
        'assets',
        'providers',
        'interfaces',
      ]),
      ...createAlias('src/assets', ['style']),
      ...createAlias('src/components', [
        '.',
        'atoms',
        'molecules',
        'organisms',
      ])
    },
    extensions: ['js', 'ts', 'tsx']
  }
};
