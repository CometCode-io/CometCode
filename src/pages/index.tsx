import { graphql } from 'gatsby';
import * as React from 'react';
import * as styles from './index.module.scss';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
} from '@ant-design/icons/lib';
import { PostNode } from '../templates/post';
import { Col, Row } from 'antd/lib/grid';
import Tag from 'antd/lib/tag';
import styled from '@emotion/styled';
import { CSSProperties } from 'react';

const { Header, Content, Footer, Sider } = Layout;

export interface IndexProps {
  data: {
    posts: {
      edges: PostNode[];
    };
    tagsGroup: {
      group: Array<{
        tag: string;
      }>;
    };
    tagInformation: {
      edges: TagNode[];
    };
  };
}

interface TagNode {
  node: {
    id: string;
    color: string;
  };
}

export const query = graphql`
  query {
    posts: allMarkdownRemark {
      edges {
        node {
          frontmatter {
            title
            layout
            image
            date
            excerpt
          }
        }
      }
    }
    tagsGroup: allMarkdownRemark(limit: 2000) {
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
  IndexProps,
  Record<string, unknown>
> {
  state = {
    collapsed: true,
    collapsedWidth: 80,
  };

  componentDidMount() {
    window.addEventListener('resize', this.resize.bind(this));
    this.resize();
  }

  resize() {
    this.setState({
      collapsedWidth: window.innerWidth <= 700 ? 0 : 80,
    });
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  clickToggle = () => {
    if (window.innerWidth <= 700) {
      this.setState({
        collapsed: !this.state.collapsed,
      });
    }
  };

  siderStyle(): CSSProperties {
    let styles: CSSProperties = {};
    if (window.innerWidth <= 700) {
      styles = {
        position: 'absolute',
        height: '100vh',
        zIndex: 1000,
      };
    }

    return styles;
  }

  changeMenuType = (v: any) => {
    console.log(v);
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider
          collapsible
          trigger={null}
          collapsed={this.state.collapsed}
          collapsedWidth={this.state.collapsedWidth}
          style={this.siderStyle()}
          onClick={this.clickToggle}
          onBreakpoint={this.changeMenuType}
        >
          <div className="logo" />
          <Menu theme="dark" mode="inline" defaultSelectedKeys={['1']}>
            <Menu.Item
              key="1"
              icon={
                <HomeOutlined
                  style={{ fontSize: '30px', fontWeight: 'bolder' }}
                />
              }
            >
              <NavText>Home</NavText>
            </Menu.Item>
            <Menu.Item
              key="2"
              icon={
                <HomeOutlined
                  style={{ fontSize: '30px', fontWeight: 'bolder' }}
                />
              }
            >
              <NavText>Home 2</NavText>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={styles.header} style={{ float: 'right' }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: styles.menuButton,
                onClick: this.toggle,
              }
            )}
          </Header>

          <Content style={{ margin: '0 16px' }}>
            <div className="container">
              <Row>
                <Col className="text-center" span={24}>
                  <LogoImage src="/logo-full.svg" alt="" />
                </Col>
                <Col span={24}>
                  <TagTitle>What Would you like to read about today?</TagTitle>
                  <TagContainer>
                    {this.props.data.tagInformation.edges.map((tag) => (
                      <Tag
                        key={tag.node.id}
                        color={tag.node.color}
                        className={styles.bigTag}
                      >
                        #{tag.node.id}
                      </Tag>
                    ))}
                  </TagContainer>
                </Col>
              </Row>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>
            Caelin Sutch ©{Date.now()}
          </Footer>
        </Layout>
      </Layout>
    );
  }
}

const NavText = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-left: 0.5rem;
`;

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
`;
