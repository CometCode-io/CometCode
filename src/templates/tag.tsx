import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyGenericNode, PostNode, TagData } from '../interfaces';
import NavComponent from '../components/nav';
import { Layout } from 'antd';
const { Content } = Layout;
import { Col, Row } from 'antd/lib/grid';
import PostCard from '../components/post-card';
import styled from '@emotion/styled';
import SnippetCard from '../components/snippet-card';

export const query = graphql`
  query($tag: String) {
    filteredPosts: allMdx(filter: { frontmatter: { tags: { in: [$tag] } } }) {
      totalCount
      edges {
        node {
          fields {
            slug
          }
          body
          frontmatter {
            title
            layout
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
            excerpt
          }
        }
      }
    }
    tagInformation: allTagsYaml {
      edges {
        node {
          id
          color
        }
      }
    }
    allTagsYaml(filter: { id: { eq: $tag } }) {
      edges {
        node {
          id
          color
          description
        }
      }
    }
  }
`;

interface TagPageProps {
  data: {
    filteredPosts: {
      totalCount: number;
      edges: GatsbyGenericNode<PostNode>[];
    };
    allTagsYaml: {
      edges: GatsbyGenericNode<TagData>[];
    };
    tagInformation: {
      edges: GatsbyGenericNode<TagData>[];
    };
  };
  pageContext: {
    tag: string;
  };
}

const TagPageTemplate: React.FC<TagPageProps> = ({ data, pageContext }) => {
  const tagInfo = data.allTagsYaml.edges[0]?.node;
  const posts = data.filteredPosts.edges.filter(
    (item) => item.node.frontmatter.layout === 'post'
  );
  const snippets = data.filteredPosts.edges.filter(
    (item) => item.node.frontmatter.layout === 'snippet'
  );
  return (
    <NavComponent activeLink={'/tags'}>
      <Content>
        <div className="container">
          <Row>
            <Col className="text-center" span={24}>
              <h1>{pageContext.tag}</h1>
              <p>{tagInfo?.description ?? 'No Description'}</p>
            </Col>
          </Row>
          <Row>
            <h2>Posts</h2>
          </Row>
          <Row>
            {posts.length !== 0 ? (
              posts.map((post) => (
                <Col
                  span={12}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={24}
                  xs={24}
                  key={post.node.frontmatter.title}
                >
                  <PostCard
                    post={post.node.frontmatter}
                    postUrl={post.node.fields.slug}
                    tagData={data.tagInformation.edges.map(
                      (tagNode) => tagNode.node
                    )}
                  />
                </Col>
              ))
            ) : (
              <Message>Nothing Written Yet :(</Message>
            )}
          </Row>
          <Row>
            <h2>Snippets</h2>
          </Row>
          <Row>
            {snippets.length !== 0 ? (
              snippets.map((snippet) => (
                <Col
                  span={12}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={24}
                  xs={24}
                  key={snippet.node.frontmatter.title}
                >
                  <SnippetCard
                    tagData={data.allTagsYaml.edges.map((t) => t.node)}
                    snippet={snippet.node.frontmatter}
                    snippetUrl={snippet.node.fields.slug}
                  />
                </Col>
              ))
            ) : (
              <Message>Nothing Written Yet :(</Message>
            )}
          </Row>
        </div>
      </Content>
    </NavComponent>
  );
};

const Message = styled.p`
  font-weight: bold;
  color: grey;
`;

export default TagPageTemplate;
