import React from 'react';
import { SnippetFrontMatter } from '../interfaces';
import { Card } from 'antd';
import TagsContainer from './tags-container';
import { navigate} from 'gatsby';
import Meta from 'antd/lib/card/Meta';
import AuthorComponent from './authorComponent';

interface SnippetCardTemplateProps {
  snippet: SnippetFrontMatter;
  snippetUrl: string;
}

const SnippetCard: React.FC<SnippetCardTemplateProps> = (props) => {
  const snippetTags = props.snippet.tags;
  const snippetData = props.snippet;

  const goToLink = () => navigate(props.snippetUrl);

  return (
    <Card title={snippetData.title} hoverable onClick={goToLink}>
      <TagsContainer tags={snippetTags} size={'small'} />
      <p className="mb2">{snippetData.excerpt}</p>
      <AuthorComponent author={props.snippet.author[0]} />
    </Card>
  );
};

export default SnippetCard;
