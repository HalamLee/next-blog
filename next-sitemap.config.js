/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: process.env.SITE_URL || 'https://lami-next-blog.vercel.app/',
  generateRobotsTxt: true, // (optional)
  // ...other options
};
