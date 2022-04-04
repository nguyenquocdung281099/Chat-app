import React from "react";
import { BsThreeDots, BsFillCameraReelsFill } from "react-icons/bs";
import { FiEdit } from "react-icons/fi";

import * as S from "./style";

const ListMessage = () => {
  return (
    <S.WrapperListMessage>
      <S.HeaderListMessage>
        <p>Chat</p>
        <S.WrapIconHeader>
          <BsThreeDots size={20} />
          <BsFillCameraReelsFill size={20} />
          <FiEdit size={20} />
        </S.WrapIconHeader>
      </S.HeaderListMessage>
    </S.WrapperListMessage>
  );
};
export default ListMessage;
