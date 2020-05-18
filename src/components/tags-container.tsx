import React from 'react';
import { TagData } from '../interfaces';
import styled from '@emotion/styled';
import BigTag from './big-tag';

interface TagsContainerProps {
  tags: TagData[];
  size: 'large' | 'small';
  align: 'center' | 'left';
}

let TagContainer;

const TagsContainer: React.FC<TagsContainerProps> = ({
  tags,
  size,
  align = 'left',
}) => {
  align === 'left'
    ? (TagContainer = styled.div`
        display: flex;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      `)
    : (TagContainer = styled.div`
        display: flex;
        justify-content: center;
        flex-direction: row;
        flex-wrap: wrap;
        margin-bottom: 0.5rem;
      `);
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
