import { graphql } from 'gatsby';
import * as React from 'react';
import { Layout } from 'antd';
import { Col, Row } from 'antd/lib/grid';
import { GatsbyGenericNode, Image, PostNode, TagData } from '../interfaces';
import NavComponent from '../components/nav';
import PostCard from '../components/post-card';
import styled from '@emotion/styled';
import TagsContainer from '../components/tags-container';
import config from '../website-config';
import { Helmet } from 'react-helmet';
import Masonry from 'react-masonry-css';
import firebase from 'gatsby-plugin-firebase';

const { Content } = Layout;

export const query = graphql`
  query {
    siteBanner: file(relativePath: { eq: "img/site-banner.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    posts: allMdx(
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { layout: { eq: "post" } } }
    ) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            title
            layout
            tags {
              id
              color
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
  }
`;

export interface IndexPageProps {
  data: {
    siteBanner: Image;
    posts: {
      edges: GatsbyGenericNode<PostNode>[];
    };
    tagsGroup: {
      group: Array<{
        tag: any;
      }>;
    };
    tagInformation: {
      edges: GatsbyGenericNode<TagData>[];
    };
  };
}

export default class IndexPage extends React.Component<
  IndexPageProps,
  Record<string, unknown>
> {
  render() {
    const allTags: TagData[] = this.props.data.tagInformation.edges.map(
      (tag: GatsbyGenericNode<TagData>) => tag.node
    );
    return (
      <div>
        <Helmet>
          <html lang={config.lang} />
          <title>{config.title}</title>
          <meta name="description" content={config.description} />
          <meta property="og:site_name" content={config.title} />
          <meta property="og:type" content="website" />
          <meta property="og:title" content={config.title} />
          <meta property="og:description" content={config.description} />
          <meta property="og:url" content={config.siteUrl} />
          <meta
            property="og:image"
            content={`${config.siteUrl}${this.props.data.siteBanner.childImageSharp.fixed.src}`}
          />
          {config.facebook && (
            <meta property="article:publisher" content={config.facebook} />
          )}
          {config.googleSiteVerification && (
            <meta
              name="google-site-verification"
              content={config.googleSiteVerification}
            />
          )}
          <meta name="twitter:card" content="summary_large_image" />
          <meta name="twitter:title" content={config.title} />
          <meta name="twitter:description" content={config.description} />
          <meta name="twitter:url" content={config.siteUrl} />
          <meta
            name="twitter:image"
            content={`${config.siteUrl}${this.props.data.siteBanner.childImageSharp.fixed.src}`}
          />
          {config.twitter && (
            <meta
              name="twitter:site"
              content={`@${config.twitter.split('https://twitter.com/')[1]}`}
            />
          )}
        </Helmet>
        <NavComponent activeLink="/">
          <Content style={{ margin: '0 16px' }}>
            <div className="container">
              <Row>
                <Col className="text-center" span={24}>
                  <LogoImage src="/logo.svg" alt="" />
                </Col>
                <Col span={24}>
                  <TagTitle>What do you want to learn about today?</TagTitle>
                  <TagsContainer
                    tags={allTags}
                    size={'large'}
                    align={'center'}
                  />
                </Col>
              </Row>
              <Row>
                <h1>Recent</h1>
              </Row>
              <Masonry
                breakpointCols={{
                  default: 2,
                  769: 1,
                }}
                className="my-masonry-grid"
                columnClassName="my-masonry-grid_column"
              >
                {this.props.data.posts.edges.map(
                  (post: GatsbyGenericNode<PostNode>) => (
                    <Col
                      span={24}
                      key={post.node.frontmatter.title}
                      className="md-p2 py1"
                    >
                      <PostCard
                        post={post.node.frontmatter}
                        postUrl={post.node.fields.slug}
                        tagData={post.node.frontmatter.tags}
                      />
                    </Col>
                  )
                )}
              </Masonry>
            </div>
          </Content>
        </NavComponent>
      </div>
    );
  }
}

const LogoImage = styled.img`
  width: 100%;
  max-width: 300px;
  margin: 2rem 0;
`;
const TagTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;
