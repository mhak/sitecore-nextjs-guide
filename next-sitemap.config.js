/** @type {import('next-sitemap').IConfig} */
module.exports = {
    siteUrl: process.env.SITE_URL || 'https://sitecore-nextjs-guide.vercel.app',
    generateRobotsTxt: true, // (optional)
    // ...other options
  }