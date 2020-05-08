import React from 'react';
import { PostFrontMatter, TagData } from '../interfaces';
import { Card } from 'antd';
import Meta from 'antd/lib/card/Meta';
import Img from 'gatsby-image';
import { navigate } from 'gatsby';
import TagsContainer from './tags-container';
import AuthorComponent from './authorComponent';

interface PostCardTemplateProps {
  post: PostFrontMatter;
  postUrl: string;
  tagData: TagData[];
}

const PostCard: React.FC<PostCardTemplateProps> = (props) => {
  const postTags = props.tagData;
  const goToLink = () => navigate(props.postUrl);
  return (
    <Card
      hoverable
      title={props.post.title}
      cover={
        <Img
          alt="Post Image"
          fluid={props.post.image.childImageSharp.fluid}
        />
      }
      onClick={goToLink}
    >
      <TagsContainer tags={postTags} size={'small'} />
      <p className="mb2">{props.post.excerpt}</p>
      <AuthorComponent author={props.post.author[0]} />
    </Card>
  );
};
export default PostCard;
