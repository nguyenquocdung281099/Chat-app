import styled, { css } from "styled-components";

export const Text = styled.div<any>`
  margin: ${(props) => props.margin || 0};
  padding: ${(props) => props.padding || 0};
  width: ${(props) => props.width || "auto"};
  color: ${(props) => props.color || 'black'};
  font-size: ${(props) => props.fontSize || "14px"};
  line-height: ${(props) => props.lineHeight};
  white-space: pre-line;
  word-break: break-word;
  /*truncate*/
  ${(props) =>
    props.truncate &&
    css`
      overflow: hidden;
      text-overflow: ellipsis;
      white-space: nowrap;
    `}
  ${(props) =>
    props.truncateMultiLine &&
    css`
      display: block;
      display: -webkit-box;
      -webkit-line-clamp: ${props.truncateMultiLine};
      -webkit-box-orient: vertical;
      overflow: hidden;
      text-overflow: ellipsis;
    `}
`;
