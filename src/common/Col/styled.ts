import styled, { css } from "styled-components";
import { IColProps } from "./index";

const handleWidth = (colNum: number) => {
  switch (colNum) {
    case 1:
      return "8.33333%";
    case 2:
      return "16.66667%";
    case 3:
      return "25%";
    case 4:
      return "33.33333%";
    case 5:
      return "41.66667%";
    case 6:
      return "50%";
    case 7:
      return "58.33333%";
    case 8:
      return "66.66667%";
    case 9:
      return "75%";
    case 10:
      return "83.33333%";
    case 11:
      return "91.66667%";
    case 12:
    default:
      return "100%";
  }
};

export const Col = styled.div<IColProps>`
  display: flex;
  flex-grow: 0;
  flex-shrink: 0;
  flex-basis: 100%;
  justify-content: center;
  max-width: 100%;
  padding-left: 4px;
  padding-right: 4px;
  box-sizing: border-box;

  @media (min-width: ${({ theme }) => theme.smallTabletWidth}) {
    ${(props) =>
      props.smallTablet &&
      css`
        flex-basis: ${handleWidth(props.smallTablet)};
        max-width: ${handleWidth(props.smallTablet)};
      `}
  }

  @media (min-width: ${({ theme }) => theme.tablet}) {
    ${(props) =>
      props.tablet &&
      css`
        flex-basis: ${handleWidth(props.tablet)};
        max-width: ${handleWidth(props.tablet)};
      `}
    padding-left: 8px;
    padding-right: 8px;
  }

  @media (min-width: ${({ theme }) => theme.laptop}) {
    ${(props) =>
      props.laptop &&
      css`
        flex-basis: ${handleWidth(props.laptop)};
        max-width: ${handleWidth(props.laptop)};
      `}
    padding-left: 12px;
    padding-right: 12px;
  }
`;
