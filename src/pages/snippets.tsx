import React from 'react';
import NavComponent from '../components/nav';
import { Layout } from 'antd';
import { GatsbyGenericNode, SnippetNode, TagData } from '../interfaces';
import { graphql } from 'gatsby';
import { Col, Row } from 'antd/lib/grid';
import SnippetCard from '../components/snippet-card';
const { Content } = Layout;

interface SnippetsPageProps {
  data: {
    allMdx: {
      edges: GatsbyGenericNode<SnippetNode>[];
    };
    tagInformation: {
      edges: GatsbyGenericNode<TagData>[];
    };
  };
}

const SnippetsPage: React.FC<SnippetsPageProps> = (props) => {
  return (
    <NavComponent activeLink={'/snippets'}>
      <Content>
        <div className="container">
          <Row>
            <h1>Recent</h1>
          </Row>
          <Row>
            {props.data.allMdx.edges.map((snippet) => (
              <Col
                span={12}
                xl={12}
                lg={12}
                md={12}
                sm={24}
                xs={24}
                key={snippet.node.frontmatter.title}
              >
                <SnippetCard
                  snippet={snippet.node.frontmatter}
                  snippetUrl={snippet.node.fields.slug}
                />
              </Col>
            ))}
          </Row>
        </div>
      </Content>
    </NavComponent>
  );
};

export const query = graphql`
  query {
    allMdx(filter: { frontmatter: { layout: { eq: "snippet" } } }) {
      edges {
        node {
          fields {
            slug
          }
          frontmatter {
            title
            layout
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
            date
            excerpt
          }
        }
      }
    }
  }
`;

export default SnippetsPage;
