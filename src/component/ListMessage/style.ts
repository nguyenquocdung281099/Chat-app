import styled from "styled-components";
import theme from "../../constant/theme";

export const WrapperListMessage = styled.div`
  max-width: 400px;
  height: 100vh;

  padding: 12px;

  border: 1px solid ${theme.graySoft11};
  overflow: hidden;
`;

export const HeaderListMessage = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 15px;
  p {
    font-size: 30px;
    font-weight: 600;
  }
`;

export const WrapIconHeader = styled.div`
  svg {
    padding: 10px;
    border-radius: 50%;
    margin-left: 10px;
    background: ${theme.graySoft11};
  }
`;
