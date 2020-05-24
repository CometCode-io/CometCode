import React, { CSSProperties } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  SearchOutlined,
  TagOutlined,
  ToolOutlined,
} from '@ant-design/icons/lib';
import styled from '@emotion/styled';
import * as styles from '../pages/index.module.scss';
import { Helmet } from 'react-helmet';
// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
import AniLink from 'gatsby-plugin-transition-link/AniLink';

const { Header, Footer, Sider } = Layout;

interface NavProps {
  activeLink: string;
}

class NavComponent extends React.Component<NavProps, Record<string, unknown>> {
  resizeListener: any;

  constructor(props: any) {
    super(props);

    this.state = {
      collapsed: true,
    };
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  siderStyle(): CSSProperties {
    return {
      position: 'fixed',
      height: '100vh',
      zIndex: 1000,
    };
  }

  labelStyle(): CSSProperties {
    let styles: CSSProperties = {};
    if (this.state.collapsed) {
      styles = { display: 'none' };
    }
    return styles;
  }

  render() {
    return (
      <Layout style={{ minHeight: '100vh' }}>
        <Helmet>
          <link rel="icon" href="/favicon.ico" />
        </Helmet>
        <Sider
          collapsible
          trigger={null}
          collapsed={this.state.collapsed as boolean}
          collapsedWidth={0}
          style={this.siderStyle()}
        >
          <div className="logo" />
          <Menu
            theme="dark"
            mode="inline"
            defaultSelectedKeys={['/']}
            selectedKeys={[this.props.activeLink]}
          >
            <Menu.Item
              key="/"
              icon={
                <AniLink cover to="/" direction="right" bg="#141f35">
                  <HomeOutlined
                    style={{ fontSize: '30px', fontWeight: 'bolder' }}
                  />
                </AniLink>
              }
              title="Home"
            >
              <NavText style={this.labelStyle()}>Home</NavText>
            </Menu.Item>
            <Menu.Item
              key="/search"
              icon={
                <AniLink cover to="/search" direction="right" bg="#141f35">
                  <SearchOutlined
                    style={{ fontSize: '30px', fontWeight: 'bolder' }}
                  />
                </AniLink>
              }
              title="Search"
            >
              <NavText style={this.labelStyle()}>Search</NavText>
            </Menu.Item>
            <Menu.Item
              key="/tags"
              icon={
                <AniLink cover direction="right" bg="#141f35" to="/tags">
                  <TagOutlined
                    style={{ fontSize: '30px', fontWeight: 'bolder' }}
                  />
                </AniLink>
              }
              title="Tags"
            >
              <NavText style={this.labelStyle()}>Tags</NavText>
            </Menu.Item>
            <Menu.Item
              key="/snippets"
              icon={
                <AniLink cover to="/snippets" direction="right" bg="#141f35">
                  <ToolOutlined
                    style={{ fontSize: '30px', fontWeight: 'bolder' }}
                  />
                </AniLink>
              }
              title="Snippets"
            >
              <NavText style={this.labelStyle()}>Snippets</NavText>
            </Menu.Item>
          </Menu>
        </Sider>
        <Layout className="site-layout">
          <Header className={styles.header} style={{ display: 'flex' }}>
            {React.createElement(
              this.state.collapsed ? MenuUnfoldOutlined : MenuFoldOutlined,
              {
                className: styles.menuButton,
                onClick: this.toggle,
              }
            )}
            <HeaderLogoContainer>
              <HeaderLogo src="/logo.svg" />
              <SiteTitle>Comet Code</SiteTitle>
            </HeaderLogoContainer>
          </Header>
          <div>
            {this.props.children}
            <Footer style={{ textAlign: 'center' }}>
              Caelin Sutch ©{new Date().getFullYear()}
            </Footer>
          </div>
        </Layout>
      </Layout>
    );
  }
}

const HeaderLogoContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

const HeaderLogo = styled.img`
  width: 60px;
  margin: 0.5rem 0 0.5rem 2rem;
`;

const SiteTitle = styled.h1`
  font-size: 24px;
  margin-top: 0.5rem;
  margin-left: 1rem;
  color: white;
`;

const NavText = styled.span`
  font-weight: bold;
  font-size: 24px;
  margin-left: 0.5rem;
`;

export default NavComponent;
