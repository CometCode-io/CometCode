import { FluidObject } from 'gatsby-image';

export interface IndexPageProps {
  data: {
    posts: {
      edges: GatsbyGenericNode<PostNode>[];
    };
    tagsGroup: {
      group: Array<{
        tag: string;
      }>;
    };
    tagInformation: {
      edges: GatsbyGenericNode<TagData>[];
    };
  };
}

export interface TagData {
  id: string;
  color: string;
  totalCount?: number;
  description: string;
}

export interface PostFrontMatter {
  title: string;
  layout: string;
  date: string;
  excerpt: string;
  tags: string[];
  author: Author[];
  image: Image;
}

export interface Author {
  name: string;
  github: string;
  website: string;
  profileImage: Image;
}

export interface SnippetFrontMatter {
  title: string;
  layout: string;
  date: string;
  excerpt: string;
  tags: string[];
}

export interface SnippetNode {
  fields: {
    slug: string;
  };
  frontmatter: SnippetFrontMatter;
}

export interface PostNode {
  fields: {
    slug: string;
  };
  frontmatter: PostFrontMatter;
}

// GENERICS
export interface GatsbyGenericNode<T> {
  node: T;
}

interface Image {
  childImageSharp: {
    fluid: FluidObject;
  };
}

// interface FrontMatter<T> {
//   fields: {
//     slug: string;
//   };
//   node: {
//     frontmatter: T;
//   };
// }
