import React from 'react';
import { PostNode } from '../interfaces';
import { Col, Row } from 'antd/lib/grid';
import PostCard from './post-card';

interface ReadNextProps {
  relatedContent: PostNode[];
}

const ReadNext: React.FC<ReadNextProps> = ({ relatedContent }) => {
  return (
    <div>
      <Row>
        <Col span={24} className="text-center">
          <h2>Related Content</h2>
        </Col>
        {relatedContent.map((post) => (
          <Col
            span={12}
            xl={8}
            lg={8}
            md={12}
            sm={24}
            xs={24}
            key={post.frontmatter.title}
            className="p1"
          >
            <PostCard
              post={post.frontmatter}
              layout={post.fields.layout}
              postUrl={post.fields.slug}
              tagData={post.frontmatter.tags}
              size="small"
            />
          </Col>
        ))}
      </Row>
    </div>
  );
};

export default ReadNext;
