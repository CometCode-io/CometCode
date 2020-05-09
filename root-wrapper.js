import { MDXProvider } from '@mdx-js/react';
import React from 'react';
import Code from './src/components/code';
import styled from '@emotion/styled';

const InlineCode = styled.code`
  background-color: rgb(1, 22, 39);
  color: rgb(214, 222, 235);
  padding: 0.2rem 0.3rem;
  font-family: 'Courier New', Courier, monospace;
  border-radius: 4px;
  font-weight: bold;
`;

const components = {
  pre: ({ children: { props } }) => {
    console.log(props.metastring);
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
};

export const wrapRootElement = ({ element }) => (
  <MDXProvider components={components}>{element}</MDXProvider>
);
