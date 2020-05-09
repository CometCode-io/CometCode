import React from 'react';
import { graphql } from 'gatsby';
import NavComponent from '../components/nav';
import { Layout } from 'antd';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { GatsbyGenericNode, PostFrontMatter, PostNode } from '../interfaces';
import AuthorComponent from '../components/authorComponent';
import TagsContainer from '../components/tags-container';
import { Helmet } from 'react-helmet';
import config from '../website-config';
import ReadNext from '../components/read-next';
import { css } from '@emotion/core';
import Card from 'antd/lib/card';
import { Col, Row } from 'antd/lib/grid';

const { Content } = Layout;

interface PostPageProps {
  path: string;
  data: {
    mdx: {
      body: string;
      frontmatter: PostFrontMatter;
      tableOfContents: {
        items: Array<{ url: string; title: string }>;
      };
    };
    relatedPosts: {
      totalCount: number;
      edges: GatsbyGenericNode<PostNode>[];
    };
  };
}

const PostTitle = styled.h1`
  margin-bottom: 0.5rem;
`;

const DatePublished = styled.h4`
  color: grey;
  font-weight: normal;
`;

const Toc = css`
  right: 1rem;
  max-height: 300px;
  width: 310px;
  display: flex;
  border-radius: 20px;
  margin-left: auto;
`;

const TocLink = styled.a`
  color: #141f35;
  text-decoration: underline;
`;

const InnerScroll = styled.div`
  overflow: hidden;
  overflow-y: scroll;
`;

const PostPageTemplate: React.FC<PostPageProps> = (props) => {
  const { body, frontmatter, tableOfContents } = props.data.mdx;
  const pageDescription = frontmatter.excerpt;
  const pageUrl = `${config.siteUrl}/${props.path}`;
  console.log(frontmatter);
  const pageTitle = frontmatter.title + ' - ' + config.title;
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
        {frontmatter.image ? (
          <meta
            property="og:image"
            content={`${config.siteUrl}${frontmatter.image.childImageSharp.fixed.src}`}
          />
        ) : null}
        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Snippets" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:url" content={pageUrl} />
        {frontmatter.image ? (
          <meta
            name="twitter:image"
            content={`${config.siteUrl}${frontmatter.image.childImageSharp.fixed.src}`}
          />
        ) : null}
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
      </Helmet>
      <NavComponent activeLink="/tutorials">
        <Content>
          {frontmatter.image ? (
            <Img
              alt="Post Image"
              fluid={frontmatter.image.childImageSharp.fluid}
            />
          ) : null}
          <div className="container">
            <Row>
              <Col xs={24} sm={24} md={12} lg={12} xl={12}>
                <PostTitle>{frontmatter.title}</PostTitle>
                <TagsContainer tags={frontmatter.tags} size={'small'} />
                <AuthorComponent author={frontmatter.author[0]} />
                <DatePublished>{frontmatter.date}</DatePublished>
              </Col>
              <Col xs={24} sm={24} md={12} lg={12} xl={12} className="py1">
                {typeof tableOfContents.items === 'undefined' ? null : (
                  <Card css={Toc}>
                    <InnerScroll>
                      <h2 style={{ color: '#141f35', fontWeight: 'bold' }}>
                        Table of contents
                      </h2>
                      {tableOfContents.items.map((i) => (
                        <li key={i.url}>
                          <TocLink href={i.url} key={i.url}>
                            # {i.title}
                          </TocLink>
                        </li>
                      ))}
                    </InnerScroll>
                  </Card>
                )}
              </Col>
            </Row>
            <MDXRenderer>{body}</MDXRenderer>
            <ReadNext
              relatedContent={props.data.relatedPosts.edges
                .filter((p) => p.node.frontmatter.title !== frontmatter.title)
                .map((a) => a.node)}
            />
          </div>
        </Content>
      </NavComponent>
    </div>
  );
};

export const query = graphql`
  query($slug: String, $primaryTag: String) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      tableOfContents
      frontmatter {
        title
        layout
        tags {
          id
          color
        }
        excerpt
        image {
          childImageSharp {
            fluid(maxWidth: 3720) {
              ...GatsbyImageSharpFluid
            }
            fixed {
              ...GatsbyImageSharpFixed
            }
          }
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
      }
    }
    relatedPosts: allMdx(
      filter: {
        frontmatter: { tags: { elemMatch: { id: { in: [$primaryTag] } } } }
      }
      limit: 3
    ) {
      totalCount
      edges {
        node {
          timeToRead
          excerpt
          frontmatter {
            title
            date
            excerpt
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
          }
          fields {
            slug
            layout
          }
        }
      }
    }
  }
`;

export default PostPageTemplate;
