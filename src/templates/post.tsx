import React from 'react';
import { graphql } from 'gatsby';
import NavComponent from '../components/nav';
import { Layout } from 'antd';
import { MDXRenderer } from 'gatsby-plugin-mdx';
import Img from 'gatsby-image';
import styled from '@emotion/styled';
import { PostFrontMatter } from '../interfaces';
import AuthorComponent from '../components/authorComponent';

const { Content } = Layout;

interface PostPageProps {
  data: {
    mdx: {
      body: string;
      frontmatter: PostFrontMatter;
    };
  };
}

const PostTitle = styled.h1`
  margin-bottom: 0.5rem;
`;

const DatePublished = styled.h4`
  color: grey;
  font-weight: normal;
`

const PostAuthor = styled.h2``;

const PostPageTemplate: React.FC<PostPageProps> = (props) => {
  const post = props.data.mdx;
  console.log(props.data.mdx.frontmatter.author);
  return (
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
          <AuthorComponent author={props.data.mdx.frontmatter.author[0]} />
          <DatePublished>{post.frontmatter.date}</DatePublished>
          <MDXRenderer>{post.body}</MDXRenderer>
        </div>
      </Content>
    </NavComponent>
  );
};

export const query = graphql`
  query($slug: String!) {
    mdx(fields: { slug: { eq: $slug } }) {
      body
      frontmatter {
        title
        layout
        tags {
          id
          color
        }
        image {
          childImageSharp {
            fluid(maxWidth: 3720) {
              ...GatsbyImageSharpFluid
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
  }
`;

export default PostPageTemplate;
