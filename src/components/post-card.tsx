import React from 'react';
import { PostFrontMatter, TagData } from '../interfaces';
import { Card } from 'antd';
import Img from 'gatsby-image';
import { navigate } from 'gatsby';
import TagsContainer from './tags-container';
import AuthorComponent from './authorComponent';
import { css } from '@emotion/core';
import * as _ from 'lodash';

interface PostCardTemplateProps {
  post: PostFrontMatter;
  postUrl: string;
  tagData: TagData[];
  layout: string;
  size?: 'small' | 'large';
}

const PostCard: React.FC<PostCardTemplateProps> = (props) => {
  const postTags = props.tagData;
  const goToLink = () => navigate(props.postUrl);

  let CardCss;

  if (props.size === 'small') {
    CardCss = css`
      .ant-card-head-title {
        font-size: 16px;
      }
    `;
  }
  const layout = _.upperFirst(_.toLower(props.layout));

  return (
    <Card
      css={CardCss}
      hoverable
      title={`${props.post.title} - ${layout}`}
      cover={
        props.post.image ? (
          <Img
            alt="Post Image"
            fluid={props.post.image.childImageSharp.fluid}
          />
        ) : null
      }
      onClick={goToLink}
    >
      <TagsContainer tags={postTags} size={'small'} />
      {props.size !== 'small' ? (
        <p className="mb2">{props.post.excerpt}</p>
      ) : null}
      <AuthorComponent author={props.post.author[0]} size="small" />
    </Card>
  );
};
export default PostCard;
