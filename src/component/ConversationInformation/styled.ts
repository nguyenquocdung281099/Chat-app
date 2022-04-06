import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  flex-basis: 33.33%;
  min-width: 250px;
  max-width: 380px;
  margin-left: auto;
  padding: 0 8px;
  border-left: 1px solid ${({ theme }) => theme.graySoft2};
`;

export const UserInfo = styled.div`
  width: 100%;
`;

export const UserAvatar = styled.img`
  margin: 16px 0 12px;
  width: 80px;
  height: 80px;
  object-fit: contain;
  border-radius: 50%;
`;

export const UserName = styled.p`
  font-weight: bold;
  font-size: 20px;
  padding: 0 16px;
`;

export const SettingGroup = styled.div`
  width: 100%;
  padding: 20px 0;
`;

export const SettingOption = styled.ul`
  > li {
    display: flex;
    align-items: center;
    padding: 12px 8px;
    font-size: 16px;
    font-weight: 600;
    text-align: left;
    color: ${({ theme }) => theme.darkBlack};
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
      margin-right: 14px;
    }

    &:last-child {
      > svg {
        align-self: flex-start;
      }

      > div {
        display: flex;
        flex-direction: column;

        > p:last-child {
          margin-top: 4px;
          font-size: 13px;
          font-weight: normal;
          color: ${({ theme }) => theme.grayDark};
        }
      }
    }
  }
`;
