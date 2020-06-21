import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from './src/components/code';
import styled from '@emotion/styled';

const InlineCode = styled.code`
  background-color: rgb(1, 22, 39);
  color: rgb(214, 222, 235);
  padding: 0.2rem 0.3rem;
  border-radius: 4px;
  font-weight: bold;
`;

const StyledImage = styled.img`
  max-width: 100%;
`;

const StyledText = styled.text`
  font-size: 16px;
`;

const StyledP = styled.p`
  font-size: 18px;
`;

const components = {
  pre: ({ children: { props } }) => {
    if (props.mdxType === 'code') {
      return (
        <Code
          fileName={props.metastring}
          codeString={props.children.trim()}
          language={props.className && props.className.replace('language-', '')}
          {...props}
        />
      );
    }
  },
  // eslint-disable-next-line react/display-name
  inlineCode: (a) => {
    return <InlineCode {...a} />;
  },
  // eslint-disable-next-line react/display-name
  img: (props) => <StyledImage {...props} />,
  // eslint-disable-next-line react/display-name
  text: (props) => <StyledText {...props} />,
  // eslint-disable-next-line react/display-name
  p: (props) => <StyledP {...props} />,
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
