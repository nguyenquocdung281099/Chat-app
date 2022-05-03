import React from "react";

import * as S from "./styled";

export interface IProps {
  name: string;
  label: string;
  checked?: boolean;
  onClick: () => void;
}

const Radio: React.FC<IProps> = ({ name, label, checked, onClick }) => {
  return (
    <S.Radio onClick={onClick}>
      {label}
      <input type="radio" name={name} checked={checked} />
      <span />
    </S.Radio>
  );
};

export default Radio;
