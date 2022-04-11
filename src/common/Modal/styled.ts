import styled from "styled-components";

export const Modal = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 100;
  transition: all 0.3s ease-in-out;
`;

export const BackDrop = styled.div`
  background-color: rgba(255, 255, 255, 0.7);
  position: absolute;
  inset: 0;
`;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: max-content;
  max-width: 680px;
  height: max-content;
  max-height: 72vh;
  text-align: center;
  background: ${({ theme }) => theme.whitePrimary};
  box-shadow: 0 3px 15px -3px rgba(0, 0, 0, 0.3);
  border-radius: 10px;
  z-index: 1;
`;

export const Header = styled.div`
  padding: 18px 58px;
  font-size: 20px;
  font-weight: bold;
  border-bottom: 1px solid ${({ theme }) => theme.graySoft2};
  position: relative;
`;

export const CloseButton = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 36px;
  height: 36px;
  background: ${({ theme }) => theme.graySoft2};
  color: ${({ theme }) => theme.graySoft9};
  border-radius: 50%;
  outline: none;
  border: none;
  cursor: pointer;
  transition: 0.3s;
  position: absolute;
  top: 50%;
  right: 12px;
  transform: translateY(-50%);

  &:hover {
    background: ${({ theme }) => theme.graySoft3};
  }
`;

export const Content = styled.div`
  flex: 1;
  overflow: hidden;
`;
