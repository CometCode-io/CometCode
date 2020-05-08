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

const { Content } = Layout;

interface PostPageProps {
  path: string;
  data: {
    mdx: {
      body: string;
      frontmatter: PostFrontMatter;
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

const PostPageTemplate: React.FC<PostPageProps> = (props) => {
  console.log(props);
  const post = props.data.mdx;
  const pageDescription = props.data.mdx.frontmatter.excerpt;
  const pageUrl = `${config.siteUrl}/${props.path}`;
  const pageTitle = props.data.mdx.frontmatter.title + ' - ' + config.title;
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
        {props.data.mdx.frontmatter.image ? (
          <meta
            property="og:image"
            content={`${config.siteUrl}${props.data.mdx.frontmatter.image.childImageSharp.fixed.src}`}
          />
        ) : null}
        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Snippets" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:url" content={pageUrl} />
        {props.data.mdx.frontmatter.image ? (
          <meta
            name="twitter:image"
            content={`${config.siteUrl}${props.data.mdx.frontmatter.image.childImageSharp.fixed.src}`}
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
          {props.data.mdx.frontmatter.image ? (
            <Img
              alt="Post Image"
              fluid={props.data.mdx.frontmatter.image.childImageSharp.fluid}
            />
          ) : null}
          <div className="container">
            <PostTitle>{props.data.mdx.frontmatter.title}</PostTitle>
            <TagsContainer
              tags={props.data.mdx.frontmatter.tags}
              size={'small'}
            />
            <AuthorComponent author={props.data.mdx.frontmatter.author[0]} />
            <DatePublished>{post.frontmatter.date}</DatePublished>
            <MDXRenderer>{post.body}</MDXRenderer>
            <ReadNext
              relatedContent={props.data.relatedPosts.edges
                .filter(
                  (p) =>
                    p.node.frontmatter.title !==
                    props.data.mdx.frontmatter.title
                )
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
