import Highlight, { defaultProps } from 'prism-react-renderer';
import theme from 'prism-react-renderer/themes/nightOwl';
import React from 'react';
import { copyToClipboard } from '../utils/copy-to-clipboard';
import styled from '@emotion/styled';
import { LiveEditor, LiveError, LivePreview, LiveProvider } from 'react-live';

export const Pre = styled.pre`
  text-align: left;
  margin: 1rem 0;
  padding: 1rem;
  overflow-x: auto;
  border-radius: 10px;

  & .token-line {
    line-height: 1.3rem;
    height: 1.3rem;
  }
  font-family: 'Courier New', Courier, monospace;
  position: relative;
`;

export const LineNo = styled.span`
  display: inline-block;
  width: 2rem;
  user-select: none;
  opacity: 0.3;
`;

const CopyCode = styled.button`
  position: absolute;
  right: 1rem;
  border: 0;
  border-radius: 3px;
  color: white;
  background-color: #6334bf;
  opacity: 0.7;
  &:hover {
    opacity: 1;
  }
  font-family: 'Berlin Rounded', sans-serif;
  font-weight: bold;
`;

// eslint-disable-next-line @typescript-eslint/ban-ts-ignore
// @ts-ignore
export const Code = ({ fileName, codeString, language, ...props }) => {
  console.log(fileName);
  if (props['react-live']) {
    return (
      <LiveProvider code={codeString} noInline={true} theme={theme}>
        <LiveEditor style={{ borderRadius: 10 }} />
        <LiveError />
        <LivePreview />
      </LiveProvider>
    );
  }
  const handleClick = () => {
    copyToClipboard(codeString);
  };
  return (
    <Highlight
      {...defaultProps}
      code={codeString}
      language={language}
      theme={theme}
    >
      {({ className, style, tokens, getLineProps, getTokenProps }) => (
        <>
          <Pre className={className} style={style}>
            <CopyCode onClick={handleClick}>Copy</CopyCode>
            {fileName ? <h3 style={{ color: 'white' }}>{fileName}</h3> : null}
            {tokens.map((line, i) => (
              <div {...getLineProps({ line, key: i })} key={i}>
                <LineNo>{i + 1}</LineNo>
                {line.map((token, key) => (
                  <span {...getTokenProps({ token, key })} key={key} />
                ))}
              </div>
            ))}
          </Pre>
        </>
      )}
    </Highlight>
  );
};

export default Code;
