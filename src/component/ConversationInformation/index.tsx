import React, { useCallback, useState } from "react";
import { BsRecordCircleFill, BsFillFileEarmarkTextFill, BsLink45Deg, BsBellFill } from "react-icons/bs";
import { IoIosCloudOutline } from "react-icons/io";
import { IoText, IoImagesOutline } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { BiMessageRoundedX } from "react-icons/bi";
import { MdBlock, MdReportProblem } from "react-icons/md";

import Collapse from "../../component/Collapse";
import Avatar from "common/Avatar";
import ChangeThemeModal from "component/ChangeThemeModal";

import * as S from "./styled";

enum modalType {
  changeTheme = "changeTheme",
  changeEmoji = "changeEmoji",
  editNickname = "editNickname",
  muteNotifications = "muteNotifications",
  ignoreMessages = "ignoreMessages",
  block = "block",
  report = "report",
}

const ConversationInformation: React.FC = () => {
  const [state, setState] = useState<{
    modal: modalType | "";
  }>({ modal: "" });
  const onShowModal = useCallback((e) => setState((s) => ({ ...s, modal: e.target.id })), []);
  const onCloseModal = useCallback(() => setState((s) => ({ ...s, modal: "" })), []);

  return (
    <S.Wrapper>
      <S.UserInfo>
        <Avatar url="https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg" size={"80px"} />
        <S.UserName>Phước Trần</S.UserName>
      </S.UserInfo>
      <S.SettingGroup>
        <Collapse title="Customise chat">
          <S.SettingOption>
            <li id="changeTheme" onClick={onShowModal}>
              <BsRecordCircleFill size={16} />
              Change theme
            </li>
            <li id="changeEmoji" onClick={onShowModal}>
              <IoIosCloudOutline size={16} />
              Change emoji
            </li>
            <li id="editNickname" onClick={onShowModal}>
              <IoText size={16} />
              Edit nicknames
            </li>
            <li>
              <ImSearch size={16} />
              Search index conversion
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
            <li>
              <BiMessageRoundedX size={16} />
              Ignore messages
            </li>
            <li id="block" onClick={onShowModal}>
              <MdBlock size={16} />
              Block
            </li>
            <li id="report" onClick={onShowModal}>
              <MdReportProblem size={16} />
              <div>
                <p>Report</p>
                <p>Give feedback and report the conversation</p>
              </div>
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
    </S.Wrapper>
  );
};

export default ConversationInformation;
