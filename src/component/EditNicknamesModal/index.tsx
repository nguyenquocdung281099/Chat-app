import React from "react";

import NicknameItem from "./component/NicknameItem";
import Modal from "src/common/Modal";

import * as S from "./styled";

interface IUserData {
  nickname: string;
  username: string;
  imgUrl: string;
}

interface Props {
  show: boolean;
  myData: IUserData;
  friendData: IUserData;
  onSaveMyNickname: (value: string) => void;
  onSaveFriendNickname: (value: string) => void;
  onClose: () => void;
}

const ChangeNicknamesModal: React.FC<Props> = ({
  show,
  myData,
  friendData,
  onSaveMyNickname,
  onSaveFriendNickname,
  onClose,
}) => {
  return (
    <Modal show={show} title="Nicknames" onClose={onClose}>
      <S.Content>
        <NicknameItem
          imgUrl={myData.imgUrl}
          nickname={myData.nickname}
          username={myData.username}
          onSave={onSaveMyNickname}
        />
        <NicknameItem
          imgUrl={friendData.imgUrl}
          nickname={friendData.nickname}
          username={friendData.username}
          onSave={onSaveFriendNickname}
        />
      </S.Content>
    </Modal>
  );
};

export default ChangeNicknamesModal;
