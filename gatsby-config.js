const aliasImports = {
  resolve: 'gatsby-plugin-alias-imports',
  options: {
    alias: {
      '@cmp': 'src/components',
      '@styles': 'src/styles',
      '@hooks': 'src/hooks',
      '@prismic': 'src/prismic',
      '@types': 'src/types.ts',
      '@store': 'src/store',
      '@utils': 'src/utils.ts',
    },
    extensions: ['js', 'ts', 'tsx', 'jsx'],
  },
}

const layout = {
  resolve: 'gatsby-plugin-layout',
  options: {
    component: require.resolve('./src/components/Layout/Layout.tsx'),
  },
}

module.exports = {
  plugins: [
    layout,
    aliasImports,
    'gatsby-plugin-image',
    'gatsby-plugin-sharp',
    'gatsby-transformer-sharp',
  ],
}
