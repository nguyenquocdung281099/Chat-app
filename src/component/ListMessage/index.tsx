import React from "react";
import { BsThreeDots, BsFillCameraReelsFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import MessageItem from "./component/messageItem";
import SearchForm from "./component/SearchForm";

import * as S from "./style";
import { mockData } from "./_mockDataMessage";

const ListMessage = () => {
  return (
    <S.WrapperListMessage>
      <S.HeaderListMessageWrap>
        <S.HeaderListMessage>
          <p>Chat</p>
          <S.WrapIconHeader>
            <BsThreeDots size={20} />
            <BsFillCameraReelsFill size={20} />
            <FiEdit size={20} />
          </S.WrapIconHeader>
        </S.HeaderListMessage>
        <SearchForm />
      </S.HeaderListMessageWrap>
      <S.ListMessageContent>
        {mockData.map((item, key) => (
          <MessageItem {...item} key={`message-${key + 1}`} />
        ))}
      </S.ListMessageContent>
    </S.WrapperListMessage>
  );
};
export default ListMessage;
