import React from 'react';
import { Author } from '../interfaces';
import styled from '@emotion/styled';
import Img from 'gatsby-image';
import { css } from '@emotion/core';

interface AuthorProps {
  author: Author;
  size?: 'small' | 'large';
}

const AuthorComponent: React.FC<AuthorProps> = (props) => {
  const AuthorWrapper = styled.div`
    display: flex;
    flex-direction: row;
  `;
  let AuthorName = styled.h2`
    margin-left: 0.75rem;
    font-weight: normal;
  `;

  const AuthorImage = css`
    height: 30px;
    width: 30px;
    border-radius: 25px;
  `;

  if (props.size === 'small') {
    AuthorName = styled.h3`
      margin-left: 0.75rem;
      font-weight: normal;
    `;
  }

  return (
    <AuthorWrapper>
      <Img
        fluid={props.author.profileImage.childImageSharp.fluid}
        css={AuthorImage}
      />
      <AuthorName>{props.author.name}</AuthorName>
    </AuthorWrapper>
  );
};

export default AuthorComponent;
