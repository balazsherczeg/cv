module.exports = {
    siteMetadata: {
        siteUrl: `https://www.yourdomain.tld`,
    },
    plugins: [
        `gatsby-plugin-styled-components`,
        {
          resolve: `gatsby-plugin-google-fonts`,
          options: {
            fonts: [
              `source sans pro`,
              `source serif pro`,
            ],
            display: 'swap'
          }
        }
    ],
};
