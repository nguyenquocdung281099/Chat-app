import React, { useEffect } from "react";
import { AiFillSetting } from "react-icons/ai";
import { GrUserSettings } from "react-icons/gr";
import { HiOutlineChatAlt2 } from "react-icons/hi";
import { MdOutlineMarkChatRead } from "react-icons/md";
import { RiMessengerLine } from "react-icons/ri";
import { FiHelpCircle } from "react-icons/fi";

import * as S from "./styles";
import { useClickOutSide } from "src/hook/useOutSide";

interface PopupProps {
  handleClickOutSide: () => void;
}

const PopupSetting: React.FC<PopupProps> = ({ handleClickOutSide }) => {
  let device = "Windown";

  if (navigator.userAgent.includes("Mac")) {
    device = "Mac";
  }
  const { ref } = useClickOutSide(handleClickOutSide);

  return (
    <S.PopupSettingWrapper ref={ref}>
      <S.ListSetting>
        <S.SettingItem>
          <AiFillSetting />
          <p>Tuỳ chọn</p>
        </S.SettingItem>
        <hr />
        <S.SettingItem>
          <GrUserSettings />
          <p>Người liên hệ đang hoạt động </p>
        </S.SettingItem>
        <S.SettingItem>
          <HiOutlineChatAlt2 />
          <p>Tin nhắn đang chờ</p>
        </S.SettingItem>
        <S.SettingItem>
          <MdOutlineMarkChatRead />
          <p>Đoạn chat đang lưu trữ</p>
        </S.SettingItem>
        <hr />
        <S.SettingItem>
          <FiHelpCircle />
          <p>Trợ giúp</p>
        </S.SettingItem>
        <hr />
        <S.SettingItem>
          <RiMessengerLine />
          <p>Mới! Mesenger dành cho máy {device}</p>
        </S.SettingItem>
      </S.ListSetting>
    </S.PopupSettingWrapper>
  );
};
export default PopupSetting;
