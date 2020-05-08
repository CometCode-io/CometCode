import React from 'react';
import NavComponent from '../components/nav';
import { Layout } from 'antd';
import algoliasearch from 'algoliasearch/lite';
import {
  connectHits,
  Highlight,
  InstantSearch,
  SearchBox,
  PoweredBy,
} from 'react-instantsearch-dom';
import { Link } from 'gatsby';
import 'instantsearch.css/themes/algolia.css';
import Card from 'antd/lib/card';
import Col from 'antd/lib/grid/col';
import { Helmet } from 'react-helmet';
import config from '../website-config';
import { css } from '@emotion/core';
import styled from '@emotion/styled';

const { Content } = Layout;

const searchClient = algoliasearch(
  process.env.GATSBY_ALGOLIA_APP_ID as string,
  process.env.GATSBY_ALGOLIA_SEARCH_KEY as string
);

const fontHeavy = css`
  font-weight: 900;
`;

const pageDescription = 'Search Articles';
const pageUrl = `${config.siteUrl}/search`;
const pageTitle = 'Search - ' + config.title;

const HitsWrapper = styled.div`
  display: block;
`;

const Hits = connectHits(({ hits }) => (
  <HitsWrapper>
    {hits.length ? (
      hits.map((hit) => {
        return (
          <Col span={24} className="md-p1 py1" key={hit.objectID}>
            <Link css={{ display: 'block' }} to={hit.slug}>
              <Card hoverable>
                <Highlight
                  attribute="title"
                  hit={hit}
                  tagName="strong"
                  css={fontHeavy}
                />
                <br />
                <Highlight attribute="excerpt" hit={hit} tagName="strong" />
              </Card>
            </Link>
          </Col>
        );
      })
    ) : (
      <p>There were no results for your query. Please try again.</p>
    )}
  </HitsWrapper>
));

const SearchPage: React.FC<any> = () => {
  return (
    <>
      <Helmet>
        <html lang={config.lang} />
        <title>{pageTitle}</title>
        <meta name="description" content={pageDescription} />
        <meta property="og:site_name" content={config.title} />
        <meta property="og:type" content="website" />
        <meta property="og:title" content={pageTitle} />
        <meta property="og:description" content={pageDescription} />
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
      <NavComponent activeLink={'/search'}>
        <Content>
          <div className="container">
            <InstantSearch indexName="Posts" searchClient={searchClient}>
              <SearchBox />
              <Hits />
              <PoweredBy />
            </InstantSearch>
          </div>
        </Content>
      </NavComponent>
    </>
  );
};

export default SearchPage;
