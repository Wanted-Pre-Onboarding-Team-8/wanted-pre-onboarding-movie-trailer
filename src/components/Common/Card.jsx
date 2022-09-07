import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled from 'styled-components';
import { colors } from '../../style/colors';

export default function Card({ id, imgSrc, title, star, voteCount }) {
  const navigate = useNavigate();
  const handleClickWrapperComponent = () => navigate(`/detail/${id}`);

  return (
    <Wrapper onClick={handleClickWrapperComponent}>
      <ImageWrapper>
        <img src={`https://image.tmdb.org/t/p/w500/${imgSrc}`} alt={title} />
      </ImageWrapper>
      <MovieData>
        <p>제목: {title}</p>
        <p>
          별점: ★ {star}({voteCount})
        </p>
      </MovieData>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: 2%;
  width: 20%;
  height: 330px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  background-color: ${colors.white};
  cursor: pointer;
  transition: 0.5s;

  &:hover {
    filter: invert(30%);
  }
`;
const ImageWrapper = styled.div`
  width: 100%;
  height: 80%;

  img {
    width: 100%;
    height: 100%;
    border-radius: 5px 5px 0 0;
  }
`;

const MovieData = styled.div`
  width: 100%;
  height: 18%;
  padding: 0px 15px;

  p {
    margin-top: 10px;
    font-size: 14px;
  }
`;
