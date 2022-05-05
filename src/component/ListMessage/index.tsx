import React, { useCallback, useEffect, useRef, useState } from "react";
import { BsThreeDots, BsFillCameraReelsFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";
import MessageItem from "./component/messageItem";
import PopupSetting from "./component/PopupSetting";
import SearchForm from "./component/SearchForm";

import * as S from "./style";
import { mockData } from "./_mockDataMessage";

const ListMessage = () => {
  const [isShowPopup, setIsShowPopup] = useState<boolean>(false);
  const [isSearchMessage, setIsSearchMessage] = useState<boolean>(false);

  const handleOpenPopup = useCallback(() => setIsShowPopup(true), []);
  const handleClosePopup = useCallback(() => setIsShowPopup(false), []);

  useEffect(() => {
    const listMessageElement = document.getElementById("list-messages");
    listMessageElement?.addEventListener("scroll", handleScroll)
    
    return () => {
      listMessageElement?.removeEventListener("scroll", handleScroll)
    }
  }, []);

  const handleScroll = (e:Event) => {
    const target = e.target as Element
    if(target.clientHeight + target.scrollTop ===  target.scrollHeight){
      // call api load more
    }
  }

  return (
    <S.WrapperListMessage>
      <S.HeaderListMessageWrap>
        <S.HeaderListMessage>
          <p>Chat</p>
          <S.WrapIconHeader>
            <S.IconContent onClick={handleOpenPopup}>
              <BsThreeDots size={20} />
              {isShowPopup && (
                <PopupSetting handleClickOutSide={handleClosePopup} />
              )}
            </S.IconContent>
            <S.IconContent>
              <BsFillCameraReelsFill size={20} />
            </S.IconContent>
            <S.IconContent>
              <FiEdit size={20} />
            </S.IconContent>
            <BsThreeDots size={20} />
           
            <FiEdit size={20} />
          </S.WrapIconHeader>
        </S.HeaderListMessage>
        <SearchForm
          handleActiveForm={(value: boolean) => setIsSearchMessage(value)}
        />
      </S.HeaderListMessageWrap>
      <S.ListMessageContent id="list-messages">
        {!isSearchMessage &&
          mockData.map((item, key) => (
            <MessageItem {...item} key={`message-${key + 1}`} />
          ))}
      </S.ListMessageContent>
    </S.WrapperListMessage>
  );
};
export default ListMessage;
