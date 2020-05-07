import React from 'react';
import { css } from '@emotion/core';
import * as styles from '../pages/index.module.scss';
import { Tag } from 'antd';
import { TagData } from '../interfaces';
import { Link } from 'gatsby';
import * as _ from 'lodash';

interface BigTagTemplateProps {
  tag: TagData;
  size: 'large' | 'small';
}

const BigTag: React.FC<BigTagTemplateProps> = ({ tag, size, children }) => {
  let bigTag;
  if (size == 'small') {
    bigTag = css`
      font-size: 14px;
      padding: 4px 6px;
      font-weight: bold;
      border-radius: 8px;
      margin-bottom: 0.5rem;
    `;
  } else {
    bigTag = css`
      font-size: 24px;
      padding: 8px;
      font-weight: bold;
      border-radius: 12px;
      margin: 0.5rem;
      margin-bottom: 0.5rem;
    `;
  }

  return (
    <Tag
      css={[bigTag]}
      key={tag.id}
      color={tag.color}
      className={styles.bigTag}
    >
      <Link to={'/tags/' + _.kebabCase(tag.id)}>{children}</Link>
    </Tag>
  );
};

export default BigTag;
