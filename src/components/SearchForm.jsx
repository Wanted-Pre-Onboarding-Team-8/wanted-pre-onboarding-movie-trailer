import React from 'react';
import styled from 'styled-components';
import { getMoviesBySearchKeyword } from '../apis';
import { colors } from '../style';
import { BsSearch as SearchIcon } from 'react-icons/bs';

export default function SearchForm() {
  const handleSubmitSearchForm = async (event) => {
    event.preventDefault();

    const { searchKeywordInput } = event.currentTarget;
    const keyword = searchKeywordInput.value;

    try {
      const { data } = await getMoviesBySearchKeyword(keyword);
      console.log(data);
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <Wrapper onSubmit={handleSubmitSearchForm}>
      <legend className="a11yHidden">검색어 입력폼</legend>
      <fieldset>
        <label htmlFor="keyword" className="a11yHidden">
          검색어 입력
        </label>
        <SearchInput type="text" name="searchKeywordInput" id="keyword" />
        <SubmitButton type="submit" aria-label="검색">
          <SearchIcon />
        </SubmitButton>
      </fieldset>
    </Wrapper>
  );
}

const Wrapper = styled.form`
  display: flex;
  justify-content: center;
  padding: 0;
`;

const SearchInput = styled.input`
  display: inline-block;
  background-color: ${colors.white};
  border: none;
  width: 70%;
  min-width: 230px;
  height: 24px;
  padding: 0 10px;
  line-height: 20px;
`;

const SubmitButton = styled.button`
  border: none;
  cursor: pointer;
  height: 24px;
  line-height: 20px;
  background-color: ${colors.white};
`;
