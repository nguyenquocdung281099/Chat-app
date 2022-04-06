import React from "react";
import { BsSearch } from "react-icons/bs";

import * as S from "./styles";

const SearchForm = () => {
  return (
    <S.SearchFormWrap>
      <BsSearch />
      <S.Input type='text' placeholder="Tìm kiếm trên Mesenger"/>
    </S.SearchFormWrap>
  );
};
export default SearchForm;
