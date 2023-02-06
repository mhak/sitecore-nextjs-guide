import React from 'react'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <span>Sitecore Next.js Guide</span>,
  useNextSeoProps() {
    return {
      titleTemplate: '%s – Sitecore Next.js Guide'
    }
  },
  project: {
    link: 'https://github.com/mhak/sitecore-nextjs-guide',
  },
  docsRepositoryBase: 'https://github.com/mhak/sitecore-nextjs-guide/tree/main',
  footer: {
    text: 'Sitecore Next.js Guide',
  },
}

export default config
