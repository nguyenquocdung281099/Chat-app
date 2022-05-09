import React from "react";
import { Picker } from "emoji-mart";

import * as S from "./styles";
import { useClickOutSide } from "src/hook/useOutSide";

interface Props {
  emoji: string;
  onConfirm: (selectedEmoji: any) => void;
  closeEmoij: () => void
}

const ModalChooseEmoji: React.FC<Props> = ({ emoji, onConfirm, closeEmoij }) => {

  const { ref } = useClickOutSide( closeEmoij);

  return (
    <S.EmoijWrapper ref={ref}>
      <Picker emoji={emoji} onSelect={onConfirm} />
    </S.EmoijWrapper>
  );
};
export default ModalChooseEmoji;
