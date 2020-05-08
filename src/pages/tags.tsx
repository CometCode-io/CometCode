import React from 'react';
import NavComponent from '../components/nav';
import { graphql } from 'gatsby';
import styled from '@emotion/styled';
import { Layout } from 'antd';
import { GatsbyGenericNode, TagData } from '../interfaces';
import BigTag from '../components/big-tag';

const { Content } = Layout;

export const query = graphql`
  query {
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
  return (
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
  );
};

export default TagsPage;
