import React, { useCallback, useState } from "react";
import { BsRecordCircleFill, BsFillFileEarmarkTextFill, BsLink45Deg, BsBellFill } from "react-icons/bs";
import { IoText, IoImagesOutline } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { MdBlock } from "react-icons/md";
import { Emoji } from "emoji-mart";

import Avatar from "src/common/Avatar";
import Collapse from "src/common/Collapse";
import ChangeThemeModal from "../ChangeThemeModal";
import ChangeEmojiModal from "../ChangeEmojiModal";
import EditNicknamesModal from "../EditNicknamesModal";
import MuteNotificationModal from "../MuteNotificationModal";
import BlockModal from "../BlockModal";

import * as S from "./styled";

enum modalType {
  changeTheme = "changeTheme",
  changeEmoji = "changeEmoji",
  editNickname = "editNickname",
  muteNotifications = "muteNotifications",
  block = "block",
}

interface IConversationInformationProps {
  onToggleSearchMessage: () => void;
}

const ConversationInformation: React.FC<IConversationInformationProps> = ({ onToggleSearchMessage }) => {
  const [state, setState] = useState<{
    modal: modalType | "";
  }>({ modal: "" });
  const onShowModal = useCallback((e) => setState((s) => ({ ...s, modal: e.target.id })), []);
  const onCloseModal = useCallback(() => setState((s) => ({ ...s, modal: "" })), []);

  return (
    <S.Wrapper>
      <S.UserInfo>
        <Avatar url="https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg" size={"80px"} />
        <S.UserName>Nguyễn Quốc Dũng</S.UserName>
      </S.UserInfo>
      <S.SettingGroup>
        <Collapse title="Customise chat">
          <S.SettingOption>
            <li id="changeTheme" onClick={onShowModal}>
              <BsRecordCircleFill color={"red"} size={16} />
              Change theme
            </li>
            <li id="changeEmoji" onClick={onShowModal}>
              <Emoji emoji="cloud" size={16} />
              Change emoji
            </li>
            <li id="editNickname" onClick={onShowModal}>
              <IoText size={16} />
              Edit nicknames
            </li>
            <li onClick={onToggleSearchMessage}>
              <ImSearch size={16} />
              Search in conversion
            </li>
          </S.SettingOption>
        </Collapse>
        <Collapse title="Media, files and links">
          <S.SettingOption>
            <li>
              <IoImagesOutline size={16} />
              Media
            </li>
            <li>
              <BsFillFileEarmarkTextFill size={16} />
              Files
            </li>
            <li>
              <BsLink45Deg size={16} />
              Links
            </li>
          </S.SettingOption>
        </Collapse>
        <Collapse title="Privacy and support">
          <S.SettingOption>
            <li id="muteNotifications" onClick={onShowModal}>
              <BsBellFill size={16} />
              Mute notifications
            </li>
            <li id="block" onClick={onShowModal}>
              <MdBlock size={16} />
              Block
            </li>
          </S.SettingOption>
        </Collapse>
      </S.SettingGroup>
      <ChangeThemeModal
        show={state.modal === modalType.changeTheme}
        onClose={onCloseModal}
        onConfirm={() => {
          onCloseModal();
        }}
      />
      <ChangeEmojiModal
        show={state.modal === modalType.changeEmoji}
        emoji={"cloud"}
        onClose={onCloseModal}
        onConfirm={(value: any) => {
          console.log({value});
          
          onCloseModal();
        }}
      />
      <EditNicknamesModal
        show={state.modal === modalType.editNickname}
        myData={{
          imgUrl: "https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg",
          nickname: "Charles",
          username: "Trung Lê",
        }}
        friendData={{
          imgUrl: "https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg",
          nickname: "b0y l4nk lunq",
          username: "Nguyễn Quốc Dũng",
        }}
        onSaveMyNickname={(value: string) => alert(value)}
        onSaveFriendNickname={(value: string) => alert(value)}
        onClose={onCloseModal}
      />
      <MuteNotificationModal
        show={state.modal === modalType.muteNotifications}
        onConfirm={(muteType, muteTime) => {
          alert(`muteType: ${muteType}, muteTime: ${muteTime}`);
          onCloseModal();
        }}
        onClose={onCloseModal}
      />
      <BlockModal
        show={state.modal === modalType.block}
        onConfirm={() => {
          alert("blocked");
          onCloseModal();
        }}
        onClose={onCloseModal}
      />
    </S.Wrapper>
  );
};

export default ConversationInformation;
