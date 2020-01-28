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
        name: `Christian Holman Portfolio`,
        short_name: `portfolio`,
        start_url: `/`,
        icon: `src/images/icon.png`,
      },
    },
   `gatsby-plugin-sharp`, 
   `gatsby-transformer-sharp`
    {
      resolve: 'gatsby-plugin-google-analytics',
      options: {
        trackingId: 'UA-134919186-1'
      }
    }
  ],
}
