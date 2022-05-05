import styled from "styled-components";

export const Radio = styled.label`
  display: block;
  position: relative;
  margin-bottom: 14px;
  padding-left: 35px;
  text-align: left;
  font-size: 16px;
  line-height: 24px;
  font-weight: 500;
  user-select: none;
  cursor: pointer;

  > span {
    position: absolute;
    top: 0;
    left: 0;
    height: 20px;
    width: 20px;
    background: transparent;
    border: 2px solid #000;
    border-radius: 50%;

    &:before {
      content: "";
      display: none;
      width: 34px;
      height: 34px;
      background: #ececec;
      position: absolute;
      top: -7px;
      left: -7px;
      border-radius: 50%;
      z-index: -1;
    }

    &:after {
      content: "";
      display: none;
      width: 12px;
      height: 12px;
      background: #000;
      position: absolute;
      top: 4px;
      left: 4px;
      border-radius: 50%;
    }
  }

  > input {
    position: absolute;
    opacity: 0;
    cursor: pointer;
    height: 0;
    width: 0;

    &:checked ~ span {
      &:after {
        display: block;
      }
    }
  }

  &:hover {
    input ~ span {
      &:before {
        display: block;
      }
    }
  }
`;
