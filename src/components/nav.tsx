import React, { CSSProperties } from 'react';
import { Layout, Menu } from 'antd';
import {
  HomeOutlined,
  MenuFoldOutlined,
  MenuUnfoldOutlined,
  TagOutlined,
  ToolOutlined,
} from '@ant-design/icons/lib';
import styled from '@emotion/styled';
import * as styles from '../pages/index.module.scss';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';

const { Header, Footer, Sider } = Layout;

interface NavProps {
  activeLink: string;
}

class NavComponent extends React.Component<NavProps, Record<string, unknown>> {
  state = {
    collapsed: true,
    collapsedWidth: 80,
    leftPadding: 0,
  };

  resizeListener: any;

  componentDidMount() {
    if (typeof window !== 'undefined') {
      this.resizeListener = window.addEventListener(
        'resize',
        this.resize.bind(this)
      );
    }
    this.resize();
  }

  componentWillUnmount() {
    if (typeof window !== 'undefined') {
      window.removeEventListener('resize', this.resizeListener);
    }
  }

  resize() {
    this.setState({
      collapsedWidth: window.innerWidth <= 700 ? 0 : 80,
    });
  }

  isMobile() {
    if (typeof window !== 'undefined') {
      return window.innerWidth <= 700;
    }
  }

  toggle = () => {
    this.setState({
      collapsed: !this.state.collapsed,
    });
  };

  clickToggle = () => {
    if (this.isMobile()) {
      this.toggle();
    }
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

  children(): CSSProperties {
    return { paddingLeft: this.state.collapsedWidth };
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
          collapsed={this.state.collapsed}
          collapsedWidth={this.state.collapsedWidth}
          style={this.siderStyle()}
          onClick={this.clickToggle}
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
                <Link to="/">
                  <HomeOutlined
                    style={{ fontSize: '30px', fontWeight: 'bolder' }}
                  />
                </Link>
              }
              title="Home"
            >
              <NavText style={this.labelStyle()}>Home</NavText>
            </Menu.Item>
            <Menu.Item
              key="/tags"
              icon={
                <Link to="/tags">
                  <TagOutlined
                    style={{ fontSize: '30px', fontWeight: 'bolder' }}
                  />
                </Link>
              }
              title="Tags"
            >
              <NavText style={this.labelStyle()}>Tags</NavText>
            </Menu.Item>
            <Menu.Item
              key="/snippets"
              icon={
                <Link to="/snippets">
                  <ToolOutlined
                    style={{ fontSize: '30px', fontWeight: 'bolder' }}
                  />
                </Link>
              }
              title="Tags"
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
          <div style={this.children()}>
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
