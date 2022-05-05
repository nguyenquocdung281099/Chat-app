import styled, { css } from "styled-components";

export const Collapse = styled.div<{ active: boolean }>`
  width: 100%;
  color: ${({ theme }) => theme.darkBlack};

  ${({ active }) =>
    active &&
    css`
      ${Title} {
        > svg {
          transform: rotate(180deg);
        }
      }
      ${Content} {
        max-height: 500px;
      }
    `}
`;

export const Title = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 12px 8px;
  font-weight: 600;
  font-size: 16px;
  color: #000;
  border-radius: 8px;
  transition: 0.3s;
  cursor: pointer;

  &:hover {
    background: rgba(0, 0, 0, 0.05);
  }

  &:focus {
    background: rgba(0, 0, 0, 0.4);
  }

  > svg {
    transition: 0.3s ease-in-out;
  }
`;

export const Content = styled.div`
  max-height: 0;
  overflow: hidden;
  transition: 0.6s ease-in-out;
`;
