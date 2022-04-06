import React, { useState } from "react";
import { IoIosArrowDown } from "react-icons/io";

import * as S from "./styled";

interface Props {
  title: string;
}

const Collapse: React.FC<Props> = ({ title, children }) => {
  const [active, setActive] = useState(false);

  return (
    <S.Collapse active={active}>
      <S.Title onClick={() => setActive((s) => !s)}>
        <span>{title}</span>
        <IoIosArrowDown size={20} />
      </S.Title>
      <S.Content>{children}</S.Content>
    </S.Collapse>
  );
};

export default Collapse;
