import React from 'react';
import { graphql } from 'gatsby';
import { GatsbyGenericNode, PostNode, TagData } from '../interfaces';
import NavComponent from '../components/nav';
import { Layout } from 'antd';
const { Content } = Layout;
import { Col, Row } from 'antd/lib/grid';
import PostCard from '../components/post-card';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import config from '../website-config';

export const query = graphql`
  query($tag: String) {
    pageBanner: file(relativePath: { eq: "img/site-banner.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    filteredPosts: allMdx(
      filter: { frontmatter: { tags: { elemMatch: { id: { eq: $tag } } } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            excerpt
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            tags {
              color
              id
            }
            author {
              name
              profileImage {
                childImageSharp {
                  fluid(maxWidth: 300) {
                    ...GatsbyImageSharpFluid
                  }
                }
              }
            }
          }
          fields {
            slug
            layout
          }
        }
      }
    }
    tagInformation: allTagsYaml(filter: { id: { eq: $tag } }) {
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
  path: string;
  data: {
    pageBanner: any;
    filteredPosts: {
      totalCount: number;
      edges: GatsbyGenericNode<PostNode>[];
    };
    tagInformation: {
      edges: GatsbyGenericNode<TagData>[];
    };
  };
}

const TagPageTemplate: React.FC<TagPageProps> = ({ data, path }) => {
  const tag = data.tagInformation.edges[0].node;
  const posts = data.filteredPosts?.edges.filter(
    (item) => item.node.fields.layout === 'post'
  );
  const snippets = data.filteredPosts?.edges.filter(
    (item) => item.node.fields.layout === 'snippet'
  );

  const pageDescription = tag.description;
  const pageUrl = `${config.siteUrl}/${path}`;
  const pageTitle = tag.id + ' - ' + config.title;
  return (
    <div>
      <Helmet>
        <html lang={config.lang} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
        <meta property="og:url" content={pageUrl} />
        <meta
          property="og:image"
          content={`${config.siteUrl}${data.pageBanner.childImageSharp.fixed.src}`}
        />
        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Snippets" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:url" content={pageUrl} />
        <meta
          name="twitter:image"
          content={`${config.siteUrl}${data.pageBanner.childImageSharp.fixed.src}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
      </Helmet>
      <NavComponent activeLink={'/tags'}>
        <Content>
          <div className="container">
            <Row>
              <Col className="text-center" span={24}>
                <h1>{tag.id}</h1>
                <p>{tag.description ?? 'No Description'}</p>
              </Col>
            </Row>
            <Row>
              <h2>Posts</h2>
            </Row>
            <Row>
              {posts && posts?.length !== 0 ? (
                posts.map((post) => (
                  <Col
                    span={12}
                    xl={8}
                    lg={8}
                    md={12}
                    sm={24}
                    xs={24}
                    key={post.node.frontmatter.title}
                    className="p1"
                  >
                    <PostCard
                      post={post.node.frontmatter}
                      postUrl={post.node.fields.slug}
                      tagData={data.tagInformation.edges.map(
                        (tagNode) => tagNode.node
                      )}
                      size="small"
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
              {snippets && snippets?.length !== 0 ? (
                snippets.map((snippet) => (
                  <Col
                    span={12}
                    xl={8}
                    lg={8}
                    md={12}
                    sm={24}
                    xs={24}
                    key={snippet.node.frontmatter.title}
                    className="p1"
                  >
                    <PostCard
                      post={snippet.node.frontmatter}
                      postUrl={snippet.node.fields.slug}
                      tagData={snippet.node.frontmatter.tags}
                      size="small"
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
    </div>
  );
};

const Message = styled.p`
  font-weight: bold;
  color: grey;
`;

export default TagPageTemplate;
