import styled, { css } from "styled-components";
import { darken } from "polished";

import { IButtonProps } from ".";

export const Button = styled.button<IButtonProps>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${(props) => (props.fullWidth ? "100%" : "auto")};
  height: 36px;
  padding: 0 12px;
  font-size: 15px;
  font-weight: bold;
  border-radius: 5px;
  border: none;
  outline: 0;
  transition: 0.3s;
  cursor: pointer;

  ${({ color, theme }) => {
    switch (color) {
      case "primary":
        return css`
          color: ${theme.whitePrimary};
          background: ${theme.blueDefault};
          &:not(:disabled) {
            &:hover {
              background: ${darken(0.06, theme.blueDefault)};
            }
          }
        `;
      case "light":
        return css`
          color: ${theme.blueDefault};
          background: ${theme.whitePrimary};
          &:not(:disabled) {
            &:hover {
              background: ${darken(0.06, theme.whitePrimary)};
            }
          }
        `;
    }
  }}
`;
