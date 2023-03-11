import React from 'react'
import { useRouter } from 'next/router'
import { useConfig } from 'nextra-theme-docs'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>Sitecore Next.js Guide</strong>,
  head: () => {
    const { asPath } = useRouter()
    const { frontMatter } = useConfig()
    return <>
      <meta property="og:url" content={`https://sitecore-nextjs-guide.hakmeng.com${asPath}`} />
      <meta property="og:title" content={frontMatter.title} />
      <meta property="og:description" content={frontMatter.description} />
    </>
  },
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
