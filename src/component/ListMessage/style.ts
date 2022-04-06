import styled from "styled-components";
import theme from "../../constant/theme";

export const WrapperListMessage = styled.div`
  width: 400px;
  height: 100vh;

  border: 1px solid ${theme.graySoft11};
  overflow: scroll;
`;

export const HeaderListMessageWrap = styled.div`
  position: -webkit-sticky;
  position: sticky;
  top: 0;
  padding-bottom: 15px;
  padding-top: 15px;
  background: white;
  border-bottom: 1px solid ${theme.graySoft12};
  padding: 12px;
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

export const ListMessageContent = styled.div`
  margin-top: 24px;
  padding: 0 0 12px 12px;
`;
