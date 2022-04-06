import React from "react";
import { BsRecordCircleFill, BsFillFileEarmarkTextFill, BsLink45Deg, BsBellFill } from "react-icons/bs";
import { IoIosCloudOutline } from "react-icons/io";
import { IoText, IoImagesOutline } from "react-icons/io5";
import { ImSearch } from "react-icons/im";
import { BiMessageRoundedX } from "react-icons/bi";
import { MdBlock, MdReportProblem } from "react-icons/md";

import Collapse from "../../component/Collapse";

import * as S from "./styled";

const ConversationInformation: React.FC = () => {
  return (
    <S.Wrapper>
      <S.UserInfo>
        <S.UserAvatar src="https://scontent.fhan14-1.fna.fbcdn.net/v/t1.6435-1/118244176_2152507448228419_5331734896671917476_n.jpg?stp=dst-jpg_p100x100&_nc_cat=107&ccb=1-5&_nc_sid=7206a8&_nc_ohc=nNAPxG9UA54AX93cW7N&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.fhan14-1.fna&oh=00_AT_skkiE7gvrvcDAtvBbU4Ceoe-ydlv3C9KuwuUSRq0QfA&oe=6272C7C7" />
        <S.UserName>Phước Trần</S.UserName>
      </S.UserInfo>
      <S.SettingGroup>
        <Collapse title="Customise chat">
          <S.SettingOption>
            <li>
              <BsRecordCircleFill size={16} />
              Change theme
            </li>
            <li>
              <IoIosCloudOutline size={16} />
              Change emoji
            </li>
            <li>
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
            <li>
              <BsBellFill size={16} />
              Mute notifications
            </li>
            <li>
              <BiMessageRoundedX size={16} />
              Ignore messages
            </li>
            <li>
              <MdBlock size={16} />
              Block
            </li>
            <li>
              <MdReportProblem size={16} />
              <div>
                <p>Report</p>
                <p>Give feedback and report the conversation</p>
              </div>
            </li>
          </S.SettingOption>
        </Collapse>
      </S.SettingGroup>
    </S.Wrapper>
  );
};

export default ConversationInformation;
