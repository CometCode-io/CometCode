/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const queries = require('./src/utils/algolia');
require('dotenv').config();

module.exports = {
  siteMetadata: {
    name: 'Comet  Code',
    tagline: 'Tutorials and Projects for the Modern Developer💪',
  },
  mapping: {
    'Mdx.frontmatter.author': 'ContributorYaml',
    'Mdx.frontmatter.tags': 'TagsYaml',
  },
  plugins: [
    {
      resolve: 'gatsby-plugin-sharp',
      options: {
        quality: 100,
        stripMetadata: true,
      },
    },
    'gatsby-transformer-sharp',
    {
      resolve: `gatsby-plugin-google-analytics`,
      options: {
        // The property ID; the tracking code won't be generated without it
        trackingId: process.env.GOOGLE_ID,
        // Defines where to place the tracking script - `true` in the head and `false` in the body
        head: true, // Any additional optional fields
        sampleRate: 5,
        siteSpeedSampleRate: 10,
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-less',
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-antd',
    'gatsby-transformer-yaml',
    'gatsby-plugin-emotion',
    'gatsby-plugin-react-helmet',
    `gatsby-plugin-transition-link`,
    {
      resolve: 'gatsby-source-filesystem',
      options: {
        name: 'content',
        path: path.join(__dirname, 'src', 'content'),
      },
    },
    {
      resolve: 'gatsby-plugin-mdx',
      options: {
        gatsbyRemarkPlugins: [`gatsby-remark-autolink-headers`],
        extensions: ['.mdx', '.md'],
        plugins: [
          'gatsby-remark-prismjs',
          'gatsby-remark-copy-linked-files',
          'gatsby-remark-smartypants',
          'gatsby-remark-abbr',
          {
            resolve: 'gatsby-remark-images',
            options: {
              maxWidth: 2000,
              quality: 100,
            },
          },
        ],
      },
    },
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.GATSBY_ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_ADMIN_KEY,
        indexName: 'Posts',
        queries,
        chunkSize: 10000, // default: 1000
      },
    },
  ],
};
