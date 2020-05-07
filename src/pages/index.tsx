import { graphql, Link } from 'gatsby';
import * as React from 'react';
import { Layout } from 'antd';
import { Col, Row } from 'antd/lib/grid';
import { GatsbyGenericNode, IndexPageProps, TagData } from '../interfaces';
import BigTag from '../components/big-tag';
import NavComponent from '../components/nav';
import PostCard from '../components/post-card';
import styled from '@emotion/styled';

const { Content } = Layout;

export const query = graphql`
  query {
    posts: allMdx(filter: { frontmatter: { layout: { eq: "post" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            layout
            tags
            image {
              childImageSharp {
                fluid(maxWidth: 3720) {
                  ...GatsbyImageSharpFluid
                }
              }
            }
            date
            excerpt
          }
        }
      }
    }
    tagsGroup: allMdx(limit: 2000) {
      group(field: frontmatter___tags) {
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

export default class IndexPage extends React.Component<
  IndexPageProps,
  Record<string, unknown>
> {
  render() {
    const allTags: TagData[] = this.props.data.tagsGroup.group.map(
      (tagInfo) => {
        const tagData:
          | GatsbyGenericNode<TagData>
          | undefined = this.props.data.tagInformation.edges.find(
          (tagD) => tagD?.node.id === tagInfo.tag
        );
        if (tagData) {
          return tagData.node;
        } else {
          return { id: tagInfo.tag, color: '#666666' } as TagData;
        }
      }
    );
    return (
      <NavComponent activeLink="/">
        <Content style={{ margin: '0 16px' }}>
          <div className="container">
            <Row>
              <Col className="text-center" span={24}>
                <LogoImage src="/logo-full.svg" alt="" />
              </Col>
              <Col span={24}>
                <TagTitle>What Would you like to read about today?</TagTitle>
                <TagContainer>
                  {allTags.map((tag) => (
                    <BigTag tag={tag} key={tag.id} size="large">
                      #{tag.id}
                    </BigTag>
                  ))}
                </TagContainer>
              </Col>
            </Row>
            <Row>
              <h1>Recent</h1>
            </Row>
            <Row>
              {this.props.data.posts.edges.map((post) => (
                <Col
                  span={12}
                  xl={12}
                  lg={12}
                  md={12}
                  sm={24}
                  xs={24}
                  key={post.node.frontmatter.title}
                >
                  <PostCard
                    post={post.node.frontmatter}
                    postUrl={post.node.fields.slug}
                    tagData={this.props.data.tagInformation.edges.map(
                      (tagNode) => tagNode.node
                    )}
                  />
                </Col>
              ))}
            </Row>
          </div>
        </Content>
      </NavComponent>
    );
  }
}

const LogoImage = styled.img`
  width: 100%;
  margin: 2rem 0;
`;
const TagTitle = styled.h2`
  font-size: 2rem;
  font-weight: bold;
  text-align: center;
`;

const TagContainer = styled.div`
  text-center: auto;
  margin-bottom: 1.5rem;
`;
