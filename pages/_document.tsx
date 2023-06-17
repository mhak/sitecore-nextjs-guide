import Document, { Head, Html, Main, NextScript } from 'next/document'

class MyDocument extends Document {
  render() {
    return (
      <Html lang='en-US'>
        <Head>
          <link
            href="/favicon-light.svg"
            rel="shortcut icon"
            media="(prefers-color-scheme: light)"
          />
          <link
            href="/favicon-dark.svg"
            rel="shortcut icon"
            media="(prefers-color-scheme: dark)"
          />
          <script type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html:`
              {
                "@context" : "https://schema.org",
                "@type" : "WebSite",
                "name" : "${process.env.SITE_NAME}",
                "url" : "${process.env.SITE_URL}"
              }
              `
            }}
          />
          <script async src={`https://www.googletagmanager.com/gtag/js?id=G-MG47WVEFHL`} />
          <script
            dangerouslySetInnerHTML={{
              __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
            
              gtag('config', 'G-MG47WVEFHL');
              `,
            }}
          />
        </Head>
        <body>
          <Main />
          <NextScript />
        </body>
      </Html>
    )
  }
}

export default MyDocument