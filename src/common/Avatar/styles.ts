import styled, { css } from "styled-components";

export const AvatarContent = styled.img<{ size: any }>`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 30px;
  height: 30px;

  border-radius: 50%;
  
  ${({ size }) =>
    size &&
    css`
      width: ${size};
      height: ${size};
    `};
`;
