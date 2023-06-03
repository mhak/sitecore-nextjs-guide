const { promises: fs } = require('fs');
const { format } = require('date-fns');

/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://sitecore-nextjs-guide.hakmeng.com',
    generateRobotsTxt: true, // (optional)
    generateIndexSitemap: false,
    autoLastmod: false,
    priority: false,
    changefreq: false,
    transform: async (config, path) => {
      let file = path == "/"
        ? "/index"
        : path;
      let computedPath = `./pages${file}.mdx`;
      let lastmod = format((await fs.stat(computedPath)).mtime, "yyyy-MM-dd");
      console.log(`${computedPath} ${lastmod}`);
      return {
        loc: path,
        lastmod,
      }
    }
  }