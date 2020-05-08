import React from 'react';
import { Result } from 'antd';
import { Button } from 'antd/lib/radio';
import NavComponent from '../components/nav';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import config from '../website-config';

const notFoundPage: React.FC = () => {
  const pageDescription = 'You got lost somehow :/';
  const pageUrl = `${config.siteUrl}/tags`;
  const pageTitle = '404 - ' + config.title;
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
        {config.facebook && (
          <meta property="article:publisher" content={config.facebook} />
        )}
        <meta name="twitter:card" content="summary_large_image" />
        <meta name="twitter:title" content="Snippets" />
        <meta name="twitter:description" content={pageDescription} />
        <meta name="twitter:url" content={pageUrl} />
        {config.twitter && (
          <meta
            name="twitter:site"
            content={`@${config.twitter.split('https://twitter.com/')[1]}`}
          />
        )}
      </Helmet>
      <NavComponent activeLink={'/404'}>
        <Result
          status="404"
          title="404"
          subTitle="Sorry, the page you visited does not exist."
          extra={
            <Button>
              <Link to="/">Back Home</Link>
            </Button>
          }
        />
      </NavComponent>
    </div>
  );
};

export default notFoundPage;
