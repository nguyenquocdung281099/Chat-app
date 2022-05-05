import React from "react";
import moment from "moment";
import Avatar from "common/Avatar";
import { BsFillCheckCircleFill, BsCircle } from "react-icons/bs";
import { AiOutlineCheckCircle } from "react-icons/ai";

import * as S from "./styles";
import theme from "constant/theme";
import { statusSentMessage } from "constant/const";
import { Text } from "common/Text";
interface MessageItemProps {
  name: string;
  content: string;
  status: number;
  time: string;
  active: boolean;
}

const MessageItem: React.FC<MessageItemProps> = ({
  name,
  content,
  status,
  time,
  active,
}) => {
  const renderIconStatus = (status: number) => {
    switch (status) {
      case statusSentMessage.waiting:
        return <BsCircle color={theme.graySoft10} />;
      case statusSentMessage.sent:
        return <AiOutlineCheckCircle color={theme.graySoft10} />;
      case statusSentMessage.received:
        return <BsFillCheckCircleFill color={theme.graySoft10} />;
      case statusSentMessage.watched:
        return <BsFillCheckCircleFill color={theme.graySoft10} />;
      default:
        break;
    }
  };
  return (
    <S.MessageItemWrap className={active ? "active" : ""}>
      <Avatar
        url="https://tophinhanh.com/wp-content/uploads/2021/12/anh-avatar-dep-cho-con-gai.jpg"
        size={"50px"}
      />
      <S.ContentMessage>
        <S.ContentMessageTop>
          <Text truncate font-size={20} width={"270px"}>
            {name}
          </Text>
        </S.ContentMessageTop>
        <S.ContentMessageBottom>
          <Text truncate width={"190px"} color={theme.grayPrimary1}>
            {content}
          </Text>
          <Text color={theme.grayPrimary1}>
            {moment().fromNow(true)}
          </Text>
        </S.ContentMessageBottom>
      </S.ContentMessage>
      <S.StatusMessage>{renderIconStatus(status)}</S.StatusMessage>
    </S.MessageItemWrap>
  );
};
export default MessageItem;
