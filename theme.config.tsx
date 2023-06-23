import React from 'react'
import { useRouter } from 'next/router'
import { DocsThemeConfig } from 'nextra-theme-docs'

const config: DocsThemeConfig = {
  logo: <strong>Sitecore Next.js Guide</strong>,
  head: () => {
    const { asPath } = useRouter()
    let path = asPath === '/'
      ? ''
      : asPath;
    const canonicalUrl = `https://sitecore-nextjs-guide.hakmeng.com${path}`;
    return <>
      <link rel="canonical" href={canonicalUrl} />
      <meta property="og:url" content={canonicalUrl} />
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
  sidebar: {
    defaultMenuCollapseLevel: 1
  },
  footer: {
    text: 'Sitecore Next.js Guide',
  },
}

export default config