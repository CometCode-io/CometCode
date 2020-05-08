import React from 'react';
import NavComponent from '../components/nav';
import { Layout } from 'antd';
import { GatsbyGenericNode, Image, PostNode, TagData } from '../interfaces';
import { graphql } from 'gatsby';
import { Col, Row } from 'antd/lib/grid';
import styled from '@emotion/styled';
import { Helmet } from 'react-helmet';
import config from '../website-config';
import PostCard from '../components/post-card';
const { Content } = Layout;

interface SnippetsPageProps {
  data: {
    allMdx: {
      edges: GatsbyGenericNode<PostNode>[];
    };
    tagInformation: {
      edges: GatsbyGenericNode<TagData>[];
    };
    pageBanner: Image;
  };
}

const PageTitle = styled.h1`
  font-size: 48px;
`;

const SnippetsPage: React.FC<SnippetsPageProps> = (props) => {
  const pageDescription =
    'Various code snippets. Bite size code to solve big problems';
  const pageUrl = `${config.siteUrl}/snippets`;
  const pageTitle = 'Snippets - ' + config.title;
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
          content={`${config.siteUrl}${props.data.pageBanner.childImageSharp.fixed.src}`}
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
          content={`${config.siteUrl}${props.data.pageBanner.childImageSharp.fixed.src}`}
        />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
      </Helmet>
      <NavComponent activeLink={'/snippets'}>
        <Content>
          <div className="container">
            <Row style={{ display: 'block' }}>
              <PageTitle>Snippets</PageTitle>
              <h2>What the hell are snippets?</h2>
              <p>
                These are little baby pieces of code that solve problems that
                you may run into. Not enough clout to be actual tutorials or
                lessons, but enough clout to be on this website.
              </p>
            </Row>
            <Row>
              <h1>Recent</h1>
            </Row>
            <Row>
              {props.data.allMdx.edges.map((snippet) => (
                <Col
                  span={12}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={24}
                  xs={24}
                  key={snippet.node.frontmatter.title}
                >
                  <PostCard
                    post={snippet.node.frontmatter}
                    postUrl={snippet.node.fields.slug}
                    layout={snippet.node.fields.layout}
                    tagData={snippet.node.frontmatter.tags}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </NavComponent>
    </div>
  );
};

export const query = graphql`
  query {
    pageBanner: file(relativePath: { eq: "img/code-snippets-banner.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allMdx(filter: { frontmatter: { layout: { eq: "snippet" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
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
  }
`;

export default SnippetsPage;
