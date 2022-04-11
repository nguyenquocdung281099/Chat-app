import styled from "styled-components";

export const Row = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-left: -4px;
  margin-right: -4px;

  @media (min-width: ${({ theme }) => theme.tablet}) {
    margin-left: -8px;
    margin-right: -8px;
  }

  @media (min-width: ${({ theme }) => theme.laptop}) {
    margin-left: -12px;
    margin-right: -12px;
  }
`;
