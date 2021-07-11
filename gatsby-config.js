module.exports = {
  siteMetadata: {
    siteUrl: "https://www.yourdomain.tld",
    title: "gatsby-sample",
  },
  plugins: [
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [
          'lato:100,300,400'
        ]
      }
    },
    `gatsby-plugin-styled-components`
  ],
};
