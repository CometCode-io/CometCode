import { FixedObject, FluidObject } from 'gatsby-image';

export interface TagData {
  id: string;
  color: string;
  totalCount?: number;
  description: string;
}

export interface PostFrontMatter {
  title: string;
  date: string;
  excerpt: string;
  tags: TagData[];
  author: Author[];
  image?: Image;
}

export interface Author {
  name: string;
  github: string;
  website: string;
  profileImage: Image;
}

export interface PostNode {
  fields: {
    slug: string;
    layout: string;
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
