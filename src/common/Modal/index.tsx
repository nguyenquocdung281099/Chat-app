import React from "react";
import Portal from "../Portal/index";

import { IoClose } from "react-icons/io5";

import * as S from "./styled";

export interface IModalProps {
  show: boolean;
  title: string;
  onClose?: () => void;
  children: React.ReactNode;
}

const Modal: React.FC<IModalProps> = ({ show, title, onClose, children }) => {
  return (
    <Portal>
      {show && (
        <S.Modal>
          <S.BackDrop onClick={onClose} />
          <S.Wrapper>
            <S.Header>
              {title}
              <S.CloseButton onClick={onClose}>
                <IoClose size={32} />
              </S.CloseButton>
            </S.Header>
            <S.Content>{children}</S.Content>
          </S.Wrapper>
        </S.Modal>
      )}
    </Portal>
  );
};
export default Modal;
