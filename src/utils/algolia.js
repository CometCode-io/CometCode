const postQuery = `{
  posts: allMdx {
    edges {
      node {
        objectID: id
        frontmatter {
          title
          excerpt
        }
        fields {
          slug
        }
      }
    }
  }
}`;

const flatten = (arr) =>
  arr.map(({ node: { frontmatter, fields, objectID } }) => ({
    ...frontmatter,
    ...fields,
    objectID,
  }));
const settings = { attributesToSnippet: [`excerpt:20`] };

const queries = [
  {
    query: postQuery,
    transformer: ({ data }) => flatten(data.posts.edges),
    indexName: `Posts`,
    settings,
  },
];

module.exports = queries;
