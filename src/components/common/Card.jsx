import React from 'react';
import { useNavigate } from 'react-router-dom';
import styled, { keyframes } from 'styled-components';
import { colors } from '../../style/colors';
import { FaStar } from 'react-icons/fa';

export default function Card({ id, imgSrc, title, voteAverage, voteCount }) {
  const navigate = useNavigate();
  const handleClickCard = () => navigate(`/detail/${id}`);

  return (
    <Wrapper onClick={handleClickCard}>
      <ImageWrapper>
        <img src={`https://image.tmdb.org/t/p/w500/${imgSrc}`} alt={title} />
      </ImageWrapper>
      <MovieData>
        <p>{title}</p>
        <div>
          <FaStar className="faStar" />
          <p>{voteAverage}</p>
          <p className="voteCount">({voteCount})</p>
        </div>
      </MovieData>
    </Wrapper>
  );
}

const SlideUp = keyframes`
  from {
    opacity:0;
    transform: translateY(5%);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
`;

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: 2%;
  width: 240px;
  aspect-ratio: 4 / 5;
  border-radius: 5px;
  background-color: ${colors.white};
  cursor: pointer;
  transition: all 0.25s;
  animation: ${SlideUp} 0.5s;

  &:hover {
    z-index: 10;
    transform: scale(1.25);
    -webkit-box-shadow: 4px 3px 15px 0px rgba(0, 0, 0, 0.25);
    box-shadow: 4px 3px 15px 0px rgba(0, 0, 0, 0.25);
  }
`;

const ImageWrapper = styled.div`
  width: 100%;

  img {
    width: 100%;
    aspect-ratio: 4 / 5;
    border-radius: 5px 5px 0 0;
    background-repeat: no-repeat;
    background-size: cover;
    background: center;
  }
`;

const MovieData = styled.div`
  width: 100%;

  p {
    font-weight: bold;
    text-align: center;
    margin: 1em 0.5em;
    font-size: 1.1em;
    white-space: nowrap;
    word-break: break-all;
    overflow: hidden;
    text-overflow: ellipsis;
  }

  div {
    width: 100%;
    display: flex;
    align-items: baseline;
    justify-content: center;
  }

  div > p {
    margin: 4px;
  }

  .faStar {
    color: ${colors.yellow};
  }

  .voteCount {
    color: ${colors.darkBlue};
    font-size: 0.85em;
    text-decoration: underline;
  }
`;
