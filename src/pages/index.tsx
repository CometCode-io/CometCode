import { graphql } from 'gatsby';
import * as React from 'react';
import * as styles from './Index.module.scss';
import { Layout, Menu } from 'antd';
import { HomeOutlined } from '@ant-design/icons/lib';

const { Content, Footer, Sider } = Layout;

interface IndexPageProps {
  data: {
    site: {
      siteMetadata: {
        name: string;
        tagline: string;
      },
    },
  };
}

export const indexPageQuery = graphql`
  query IndexPageQuery {
    site {
      siteMetadata {
        name
        tagline
      }
    }
  }
`;

export default class IndexPage extends React.Component<IndexPageProps, {}> {
  state = {
    collapsed: true,
  };

  onCollapse = (collapsed: boolean) => {
    this.setState({ collapsed });
  };

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Sider collapsible collapsed={this.state.collapsed} onCollapse={this.onCollapse}>
          <div className="logo" />
          <Menu theme="dark" defaultSelectedKeys={['1']} mode="inline">
            <Menu.Item key="1" icon={<HomeOutlined />}>
              Home
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Content style={{ margin: '0 16px' }}>
            <div>
              <h1>Test</h1>
            </div>
          </Content>
          <Footer style={{ textAlign: 'center' }}>Caelin SUtch ©{ Date.now() }</Footer>
        </Layout>
      </Layout>
    );
  }
}
