import React from 'react';
import styled from 'styled-components';
import { colors } from '../style';

export default function SearchForm() {
  return (
    <form>
      <legend className="a11yHidden">검색어 입력폼</legend>
      <fieldset>
        <label htmlFor="keyword" className="a11yHidden">
          검색어 입력
        </label>
        <SearchInput type="text" name="searchKeywordInput" id="keyword" />
        <label htmlFor="search" className="a11yHidden">
          검색
        </label>
        <SubmitInput type="submit" value="검색" id="search" />
      </fieldset>
    </form>
  );
}

const SearchInput = styled.input`
  display: inline-block;
  background-color: ${colors.white};
  border: none;
  width: 250px;
  height: 22px;
  line-height: 20px;
`;

const SubmitInput = styled.input`
  border: none;
  margin-left: -2px;
  cursor: pointer;
  width: 50px;
  height: 24px;
  line-height: 20px;
  background-color: ${colors.white};
`;
