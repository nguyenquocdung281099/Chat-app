import React from "react";
import Button from "src/common/Button";

import Modal from "src/common/Modal";

import * as S from "./styled";

interface Props {
  show: boolean;
  onConfirm: (selectedEmoji: any) => void;
  onClose: () => void;
}

const BlockModal: React.FC<Props> = ({ show, onConfirm, onClose }) => {
  return (
    <Modal show={show} title="Block messages and calls?" onClose={onClose}>
      <S.Content>
        <p>The conversation will stay in Chats unless you hide it.</p>
        <S.ActionButtons>
          <Button onClick={onClose} color="light">
            Cancel
          </Button>
          <Button onClick={onConfirm}>Block</Button>
        </S.ActionButtons>
      </S.Content>
    </Modal>
  );
};

export default BlockModal;
