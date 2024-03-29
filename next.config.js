const withNextra = require('nextra')({
  theme: 'nextra-theme-docs',
  themeConfig: './theme.config.tsx',
})

const config = {
  async redirects() {
    return [
      {
        source: '/create-your-first-component/create-a-component',
        destination: '/build/create-your-first-nextjs-component',
        permanent: true,
      },
      {
        source: '/create-your-first-component',
        destination: '/build/create-your-first-nextjs-component',
        permanent: true,
      },
      {
        source: '/create-your-first-component/content-editable-component',
        destination: '/build/sitecore-nextjs-component-content-editable',
        permanent: true,
      },
      {
        source: '/environment/installing',
        destination: '/environment/installing-and-running-the-sitecore-environment',
        permanent: true,
      },
      {
        source: '/graphql',
        destination: '/graphql/overview',
        permanent: true,
      },
      {
        source: '/helix',
        destination: '/sitecore-helix',
        permanent: true,
      },
    ]
  },
}

module.exports = withNextra(config)
