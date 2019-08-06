module.exports = {
  siteMetadata: {
    title: `Christian Holman`,
    description: "Christian Holman's home on the internet. Portfolio and blog.",
    author: `@bigluxio`,
  },
  plugins: [
    'gatsby-plugin-postcss',
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: 'gatsby-source-sanity',
      options: {
        projectId: 'yod7bsm9',
        dataset: 'production',
        watchMode: true,
      }
    },  
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/icon.png`,
      },
    },
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-134919186-1'
      }
    }
  ],
}
