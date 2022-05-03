import React from "react";
import { Picker } from "emoji-mart";

import Modal from "src/common/Modal";

interface Props {
  show: boolean;
  emoji: string;
  onConfirm: (selectedEmoji: any) => void;
  onClose: () => void;
}

const ChangeEmojiModal: React.FC<Props> = ({ show, emoji, onConfirm, onClose, children }) => {
  return (
    <Modal show={show} title="Emoji" onClose={onClose}>
      <Picker title="" set="facebook" emoji={emoji} onSelect={onConfirm} />
      {children}
    </Modal>
  );
};

export default ChangeEmojiModal;
