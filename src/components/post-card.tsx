import React from 'react';
import { PostFrontMatter, TagData } from '../interfaces';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Img from 'gatsby-image';
import { Link } from 'gatsby';
import BigTag from './big-tag';
import styled from '@emotion/styled';
import { Button } from 'antd';

interface PostCardTemplateProps {
  post: PostFrontMatter;
  postUrl: string;
  tagData: TagData[];
}

const TagContainer = styled.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 0.5rem;
`;

const PostCard: React.FC<PostCardTemplateProps> = (props) => {
  const postTags = props.tagData
  return (
    <Card
      hoverable
      cover={
        <Img
          alt="Post Image"
          fluid={props.post.image.childImageSharp.fluid}
        />
      }
    >
      <TagContainer>
        {postTags
          ? postTags.map((tag) => (
              <BigTag tag={tag} size="small" key={tag.id}>
                #{tag.id}
              </BigTag>
            ))
          : null}
      </TagContainer>
      <Meta title={props.post.title} description={props.post.excerpt} />
      <Button type="primary" shape="round" size="large" className="mt2">
        <Link to={props.postUrl}>See Article</Link>
      </Button>
    </Card>
  );
};
export default PostCard;
