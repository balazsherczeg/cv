import type { GatsbyConfig } from 'gatsby';
import path from 'path';

const config: GatsbyConfig = {
  siteMetadata: {
    title: 'CV',
    siteUrl: 'https://www.yourdomain.tld',
  },
  // More easily incorporate content into your pages through automatic TypeScript type generation and better GraphQL IntelliSense.
  // If you use VSCode you can also use the GraphQL plugin
  // Learn more at: https://gatsby.dev/graphql-typegen
  graphqlTypegen: true,
  plugins: [
    'gatsby-plugin-styled-components',
    {
      resolve: 'gatsby-plugin-root-import',
      options: {
        utils: path.join(__dirname, 'src', 'utils'),
        data: path.join(__dirname, 'src', 'data'),
        assets: path.join(__dirname, 'src', 'assets'),
      },
    },
    {
      resolve: 'gatsby-plugin-google-fonts',
      options: {
        fonts: ['source sans pro', 'source serif pro'],
        display: 'swap',
      },
    },
  ],
};

export default config;
