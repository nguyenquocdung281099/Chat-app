import styled from "styled-components";

export const SearchForm = styled.div`
  display: flex;
`;

export const SearchFormWrap = styled.div`
  display: flex;
  flex: 1;
  justify-content: space-between;
  align-items: center;
  margin-right: 10px;
  padding: 10px;
  background: ${({ theme }) => theme.graySoft11};
  border-radius: 15px;
`;

export const Input = styled.input`
  flex: 1;
  margin-left: 10px;
  width: 90%;
  border: none;
  outline: none;
  background: none;
`;

export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  outline: none;
  border: none;
  background: transparent;
  cursor: pointer;
  transition: 0.3s;

  &:hover:not([disabled]) {
    background: ${({ theme }) => theme.graySoft11};
  }

  &:disabled {
    cursor: not-allowed;
  }
`;

export const NavigateButton = styled(Button)`
  margin-right: 6px;
  width: 36px;
  height: 36px;
  border-radius: 50%;
  color: ${({ theme }) => theme.blueDefault};

  &:disabled {
    color: ${({ theme }) => theme.graySoft12};
  }
`;

export const CloseButton = styled(Button)`
  height: 36px;
  padding: 12px 20px;
  font-size: 15px;
  font-weight: 600;
  border-radius: 5px;
`;
