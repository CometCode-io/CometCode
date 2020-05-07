/* eslint-disable @typescript-eslint/no-var-requires */
const path = require('path');
const { createFilePath } = require('gatsby-source-filesystem');
const _ = require('lodash');

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === 'Mdx') {
    const { permaLink, layout } = node.frontmatter;
    let slug = permaLink;
    if (!slug) {
      slug = createFilePath({ node, getNode, basePath: 'content' });
    }
    createNodeField({
      node,
      name: 'slug',
      value: slug,
    });

    createNodeField({
      node,
      name: 'layout',
      value: layout || '',
    });
  }
};

exports.createPages = async ({ graphql, actions }) => {
  const { createPage } = actions;
  const result = await graphql(`
    query {
      allPosts: allMdx {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
      }
      allTags: allMdx {
        group(field: frontmatter___tags) {
          tag: fieldValue
        }
      }
    }
  `);

  const posts = result.data.allPosts.edges;

  posts.forEach(({ node }, index) => {
    const { slug, layout } = node.fields;
    const prev = index === 0 ? null : posts[index - 1].node;
    const next = index === posts.length - 1 ? null : posts[index + 1].node;

    createPage({
      path: slug,
      // Note that the template has to exist first, or else the build will fail.
      component: path.resolve(`./src/templates/${layout || 'post'}.tsx`),
      context: {
        // Data passed to context is available in page queries as GraphQL variables.
        slug,
        prev,
        next,
      },
    });
  });

  const tags = result.data.allTags.group;

  tags.forEach((v) => {
    createPage({
      path: `/tags/${_.kebabCase(v.tag)}/`,
      component: path.resolve('./src/templates/tag.tsx'),
      context: {
        tag: v.tag,
      },
    });
  });
};
