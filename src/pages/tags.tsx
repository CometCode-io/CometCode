import React from 'react';
import NavComponent from '../components/nav';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import { GatsbyGenericNode, Image, TagData } from '../interfaces';
import BigTag from '../components/big-tag';
import { Helmet } from 'react-helmet';
import config from '../website-config';

const { Content } = Layout;

export const query = graphql`
  query {
    pageBanner: file(relativePath: { eq: "img/sort-by-tag-banner.png" }) {
      childImageSharp {
        fixed {
          ...GatsbyImageSharpFixed
        }
      }
    }
    allTags: allMdx {
      group(field: frontmatter___tags___id) {
        tag: fieldValue
        totalCount
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

interface TagsPageProps {
  data: {
    allTags: {
      group: Array<{ tag: string; totalCount: number; description: string }>;
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

const TagContainer = styled.div`
  text-center: auto;
  margin-bottom: 1.5rem;
`;

const TagsPage: React.FC<TagsPageProps> = (props) => {
  const allTags: TagData[] = props.data.allTags.group.map((tagInfo) => {
    const tagData:
      | GatsbyGenericNode<TagData>
      | undefined = props.data.tagInformation.edges.find(
      (tagD) => tagD?.node.id === tagInfo.tag
    );
    if (tagData) {
      tagData.node['totalCount'] = tagInfo.totalCount;
      return tagData.node;
    } else {
      return {
        id: tagInfo.tag,
        color: '#666666',
        totalCount: tagInfo.totalCount,
      } as TagData;
    }
  });
  const pageDescription =
    'See all the different tags/topics that are discussed on this site';
  const pageUrl = `${config.siteUrl}/tags`;
  const pageTitle = 'Tags - ' + config.title;
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
      <NavComponent activeLink={'/tags'}>
        <Content>
          <div className="container text-center">
            <PageTitle>All Tags</PageTitle>
            <TagContainer>
              {allTags.map((tag) => (
                <BigTag tag={tag} key={tag.id} size="large">
                  #{tag.id} {tag.totalCount}
                </BigTag>
              ))}
            </TagContainer>
          </div>
        </Content>
      </NavComponent>
    </div>
  );
};

export default TagsPage;
