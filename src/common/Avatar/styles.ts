import styled, { css } from "styled-components";

export const AvatarContent = styled.div<{ size: any; online: boolean }>`
  position: relative;
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

  ${({ online }) =>
    online &&
    css`
      &::before {
        content: "";
        position: absolute;
        right: 0;
        bottom: 0px;
        width: 12px;
        height: 12px;
        background: ${({ theme }) => theme.greenMedium3};
        border-radius: 50%;
      }
    `}
`;

export const AvatarImg = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  object-fit: cover;
`;
