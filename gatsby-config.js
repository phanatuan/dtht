module.exports = {
  siteMetadata: {
    title: `Dong Trung Ha Thao`,
    description: `Ecommerce Site`,
    author: `@gatsbyjs`,
  },
  plugins: [
    `gatsby-transformer-remark`,
    `gatsby-plugin-netlify-cms`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    { resolve:`gatsby-source-filesystem`,
      options: { 
        name: `blog`, 
        path: `${__dirname}/content/blog`
      } 
  },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
  ],
}
