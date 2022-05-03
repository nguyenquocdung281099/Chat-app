import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  padding: 10px;
  border-radius: 10px;
  transition: 0.3s;

  &:hover {
    background-color: ${({ theme }) => theme.graySoft2};
  }
`;

export const Names = styled.div`
  flex: 1;
  margin: 0 12px;
  text-align: left;
`;

export const Nickname = styled.p`
  margin-bottom: 4px;
  font-size: 15px;
  font-weight: 500;
`;

export const Username = styled.p`
  font-size: 13px;
`;

export const NicknameInput = styled.input`
  display: inline-block;
  width: 100%;
  height: 100%;
  padding: 8px;
  font-size: 15px;
  box-sizing: border-box;
  border: none;
  outline: none;
  border-radius: 5px;
  transition: 0.3s;

  &:focus {
    outline: 1px solid ${({ theme }) => theme.blueDefault};
  }

  &:hover {
    background: ${({ theme }) => theme.graySoft8};
  }
`;

export const IconWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 6px;
  border-radius: 50%;

  &:hover,
  &:focus {
    background: ${({ theme }) => theme.graySoft8};
  }
`;
