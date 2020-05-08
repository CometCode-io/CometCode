import React from 'react';
import { TagData } from '../interfaces';
import styled from '@emotion/styled';
import BigTag from './big-tag';
import { Card } from 'antd';

interface TagsContainerProps {
  tags: TagData[];
  size: 'large' | 'small';
}

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const TagsContainer: React.FC<TagsContainerProps> = ({ tags, size }) => {
  return (
    <TagContainer>
      {tags
        ? tags.map((tag) => (
            <BigTag tag={tag} size={size} key={tag.id}>
              #{tag.id}
            </BigTag>
          ))
        : null}
    </TagContainer>
  );
};

export default TagsContainer;
