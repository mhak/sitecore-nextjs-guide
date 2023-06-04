/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://sitecore-nextjs-guide.hakmeng.com',
  generateRobotsTxt: true, // (optional)
  generateIndexSitemap: false,
  autoLastmod: false,
  priority: false,
  changefreq: false
}