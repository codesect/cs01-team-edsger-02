const siteConfig = require('./config/site');

module.exports = {
  siteMetadata: {
    title: siteConfig.title,
    author: siteConfig.author,
    description: siteConfig.description,
    siteUrl: siteConfig.siteUrl,
    social: { twitter: siteConfig.twitter, facebook: siteConfig.facebook },
  },
  plugins: [
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'blog', path: `${__dirname}/content/blog` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'shop', path: `${__dirname}/content/shop` },
    },
    {
      resolve: 'gatsby-source-filesystem',
      options: { name: 'assests', path: `${__dirname}/content/assets` },
    },
    {
      resolve: 'gatsby-transformer-remark',
      options: {
        plugins: [
          { resolve: 'gatsby-remark-images', options: { maxWidth: 1200 } },
          {
            resolve: 'gatsby-remark-responsive-iframe',
            options: { wrapperStyle: 'margin-bottom: 1rem' },
          },
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
        ],
      },
    },
    'gatsby-transformer-sharp',
    'gatsby-plugin-sharp',
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: siteConfig.title,
        short_name: siteConfig.shortName,
        start_url: siteConfig.startUrl,
        background_color: siteConfig.backgroundColor,
        theme_color: siteConfig.themeColor,
        display: siteConfig.display,
        icon: siteConfig.icon,
      },
    },
    'gatsby-plugin-offline',
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-prefetch-google-fonts`,
      options: {
        fonts: [
          {
            family: 'Libre Franklin',
            variants: ['300', '300i', '400', '400i', '600', '600i'],
          },
        ],
      },
    },
  ],
};
