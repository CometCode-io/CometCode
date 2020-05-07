import React from 'react';
import { SnippetFrontMatter, TagData } from '../interfaces';
import { Button, Card } from 'antd';
import BigTag from './big-tag';
import styled from '@emotion/styled';
import { Link } from 'gatsby';

interface SnippetCardTemplateProps {
  snippet: SnippetFrontMatter;
  snippetUrl: string;
  tagData: TagData[];
}

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const SnippetCard: React.FC<SnippetCardTemplateProps> = (props) => {
  const snippetTags = props.snippet.tags.map((tag) => {
    const tagData: TagData = props.tagData.find(
      (tagD) => tagD.id === tag
    ) as TagData;
    if (tagData) {
      return tagData;
    } else {
      return { id: tag, color: '#666666' };
    }
  }) as TagData[];

  const snippetData = props.snippet;

  return (
    <Card title={snippetData.title} hoverable>
      <TagContainer>
        {snippetTags
          ? snippetTags.map((tag) => (
              <BigTag tag={tag} size="small" key={tag.id}>
                #{tag.id}
              </BigTag>
            ))
          : null}
      </TagContainer>
      {snippetData.excerpt}
      <br/>
      <Button type="primary" shape="round" size="large" className="mt2">
        <Link to={props.snippetUrl}>See Article</Link>
      </Button>
    </Card>
  );
};

export default SnippetCard;
