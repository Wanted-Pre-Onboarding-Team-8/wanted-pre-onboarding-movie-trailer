import React from 'react';
import styled from 'styled-components';
import { colors } from '../../style/colors';

export default function Card() {
  return (
    <Wrapper>
      <Image>
        <img src="img/poster.jpg" alt="Avatar" />
      </Image>
      <MovieData>
        <h4>
          <b>스파이더맨</b>
        </h4>
        <p>2022-06-11</p>
      </MovieData>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  margin-top: 50px;
  width: 230px;
  height: 330px;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19);
  border-radius: 5px;
  background-color: ${colors.white};
`;
const Image = styled.div`
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
  padding: 2px 16px;
  margin-top: 12px;

  p {
    margin-top: 10px;
  }
`;
