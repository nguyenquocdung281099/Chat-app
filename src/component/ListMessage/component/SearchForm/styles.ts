import theme from "constant/theme";
import styled from "styled-components";

export const SearchFormWrap = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;

  padding: 10px;
  background: ${theme.graySoft11};
  border-radius: 15px;
`;

export const Input = styled.input`
  width: 90%;
  border: none;
  outline: none;
  background: none;
`;
