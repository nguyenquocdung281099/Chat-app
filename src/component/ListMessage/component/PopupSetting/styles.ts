import styled from "styled-components";

export const PopupSettingWrapper = styled.div`
  position: absolute;
  top: 50px;
  width: 340px;
  height: 280px;
  padding: 10px;
  background: white;
  border-radius: 10px;
  z-index: 1;
  box-shadow: -25px 25px 134px -16px rgba(54, 45, 45, 0.49);
  -webkit-box-shadow: -25px 25px 134px -16px rgba(54, 45, 45, 0.49);
  -moz-box-shadow: -25px 25px 134px -16px rgba(54, 45, 45, 0.49);

  & hr {
    border-top: 1px solid ${({ theme }) => theme.graySoft12};
  }

  &::before {
    content: "";
    position: absolute;
    top: -10px;
    left: 20px;
    border-bottom: 10px solid #fff;
    border-right: 10px solid transparent;
    border-left: 10px solid transparent;
  }
`;

export const ListSetting = styled.ul``;

export const SettingItem = styled.li`
  display: flex;
  align-items: center;
  font-size: 18px;

  & > p {
    margin-left: 10px;
  }
`;
