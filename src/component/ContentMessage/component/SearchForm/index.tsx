import React, { useState } from "react";
import { BsSearch } from "react-icons/bs";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

import * as S from "./styles";

interface SearchFormProps {
  onSearch: (value: string) => void;
  onCloseSearchMessage: () => void;
}

const SearchForm: React.FC<SearchFormProps> = ({ onSearch, onCloseSearchMessage }) => {
  const [value, setValue] = useState("");
  return (
    <S.SearchForm>
      <S.SearchFormWrap>
        <BsSearch />
        <S.Input
          type="text"
          placeholder="Seach"
          value={value}
          onKeyPress={(e) => e.key === "Enter" && onSearch(value)}
          onChange={(e) => setValue(e.target.value)}
        />
      </S.SearchFormWrap>
      <S.NavigateButton>
        <IoIosArrowUp size={16} />
      </S.NavigateButton>
      <S.NavigateButton disabled>
        <IoIosArrowDown size={16} />
      </S.NavigateButton>
      <S.CloseButton onClick={onCloseSearchMessage}>Close</S.CloseButton>
    </S.SearchForm>
  );
};
export default SearchForm;
