import theme from "constant/theme";
import styled from "styled-components";

export const MessageItemWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 10px;
  border-radius: 10px;

  &:hover {
    background: ${theme.graySoft12};
  }

  &.active{
    background: ${theme.blueSoft9};
  }
`;

export const ContentMessage = styled.div`
  margin-left: 10px;
  text-align: start;
  width: 290px;
`;

export const ContentMessageTop = styled.div`
  margin-bottom: 10px;
`;

export const ContentMessageBottom = styled.div`
  display: flex;
`;

export const StatusMessage = styled.div`

`;
