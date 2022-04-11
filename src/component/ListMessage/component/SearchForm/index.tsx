import React from "react";
import { BsSearch } from "react-icons/bs";

import * as S from "./styles";

interface SearchFormProps {
  handleActiveForm: (value: boolean) => void
}

const SearchForm: React.FC<SearchFormProps> = ({ handleActiveForm }) => {
  return (
    <S.SearchFormWrap>
      <BsSearch />
      <S.Input
        type="text"
        placeholder="Tìm kiếm trên Mesenger"
        onFocus={() => handleActiveForm(true)}
        onBlur={() => handleActiveForm(false)}
      />
    </S.SearchFormWrap>
  );
};
export default SearchForm;
