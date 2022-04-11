import styled, { css } from "styled-components";

export const Content = styled.div`
  padding: 16px;
`;

export const ThemeColors = styled.div`
  max-height: 500px;
  overflow-y: auto;
  overflow-x: hidden;
`;

export const ThemeItemWrapper = styled.div<{ selected: boolean }>`
  padding: 8px;
  border-radius: 20px;
  cursor: pointer;

  ${({ selected, theme }) =>
    selected &&
    css`
      background: ${theme.graySoft2};
    `}

  &:hover {
    background: ${({ theme }) => theme.graySoft2};
  }
`;

export const ThemeItem = styled.div<{ bgColor?: string; bgImg?: string }>`
  width: 48px;
  height: 48px;
  background-color: ${({ bgColor }) => bgColor};
  background-image: ${({ bgImg }) => bgImg};
  border-radius: 50%;
`;

export const ActionButtons = styled.div`
  display: flex;
  justify-content: flex-end;
  margin-top: 16px;

  > button {
    &:not(last-child) {
      margin-right: 10px;
    }
  }
`;
