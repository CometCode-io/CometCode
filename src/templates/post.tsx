import React from 'react';
import { graphql } from 'gatsby';

export interface PostNode {
  node: {
    frontmatter: RawPost;
  };
}

export interface RawPost {
  title: string;
  layout: string;
  image: string;
  date: string;
  excerpt: string;
}

interface PageTemplateProps {
  data: {
    markdownRemark: {
      html: string;
      frontmatter: RawPost;
    };
  };
}

const PageTemplate: React.FC<PageTemplateProps> = (props) => {
  const post = props.data.markdownRemark;
  return (
    <main>
      <div>
        <h1>{post.frontmatter.title}</h1>
        <div dangerouslySetInnerHTML={{ __html: post.html }} />
      </div>
    </main>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
      }
    }
  }
`;

export default PageTemplate;
