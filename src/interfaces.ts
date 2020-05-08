import { FixedObject, FluidObject } from 'gatsby-image';

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
  tags: TagData[];
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
  author: Author[];
  excerpt: string;
  tags: TagData[];
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

export interface Image {
  childImageSharp: {
    fixed: FixedObject;
    fluid: FluidObject;
  };
}
