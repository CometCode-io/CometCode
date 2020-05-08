/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');

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
    'gatsby-plugin-sass',
    'gatsby-plugin-less',
    'gatsby-plugin-typescript',
    'gatsby-plugin-tslint',
    'gatsby-plugin-antd',
    'gatsby-transformer-yaml',
    'gatsby-plugin-emotion',
    'gatsby-transformer-sharp',
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
      resolve: 'gatsby-plugin-sharp',
      options: {
        quality: 100,
        stripMetadata: true,
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
  ],
};
