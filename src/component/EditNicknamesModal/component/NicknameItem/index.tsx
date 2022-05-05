import React, { useEffect, useState } from "react";
import { IoMdCheckmark } from "react-icons/io";
import { RiEdit2Fill } from "react-icons/ri";

import Avatar from "src/common/Avatar";

import * as S from "./styled";

interface Props {
  imgUrl: string;
  nickname: string;
  username: string;
  onSave: (nickname: string) => void;
}

const NicknameItem: React.FC<Props> = ({ imgUrl, nickname, username, onSave }) => {
  const [state, setState] = useState({
    nicknameValue: nickname || "Set nickname",
    isEditting: false,
  });

  useEffect(() => {
    setState((s) => ({ ...s, nicknameValue: nickname || "Set nickname" }));
  }, [nickname]);

  return (
    <S.Wrapper>
      <Avatar url={imgUrl} size={"36px"} />
      {!state.isEditting ? (
        <>
          <S.Names>
            <S.Nickname>{state.nicknameValue}</S.Nickname>
            <S.Username>{username}</S.Username>
          </S.Names>
          <S.IconWrapper onClick={() => setState((s) => ({ ...s, isEditting: !s.isEditting }))}>
            <RiEdit2Fill size={20} />
          </S.IconWrapper>
        </>
      ) : (
        <>
          <S.Names>
            <S.NicknameInput
              type="text"
              placeholder={nickname}
              onChange={(e) => setState((s) => ({ ...s, nicknameValue: e.target.value || "Set nickname" }))}
            />
          </S.Names>
          <S.IconWrapper
            onClick={() => {
              setState((s) => ({ ...s, isEditting: !s.isEditting }));
              nickname !== state.nicknameValue && onSave(state.nicknameValue || "");
            }}
          >
            <IoMdCheckmark size={20} />
          </S.IconWrapper>
        </>
      )}
    </S.Wrapper>
  );
};

export default NicknameItem;
