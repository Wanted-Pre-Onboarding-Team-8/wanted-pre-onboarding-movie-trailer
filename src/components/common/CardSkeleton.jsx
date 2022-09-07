import React from 'react';
import styled from 'styled-components';
import { colors } from '../../style/colors';

export default function CardSkeleton() {
  return (
    <Wrapper>
      <Image />
      <MovieInfo />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  margin-top: 50px;
  margin-left: 2%;
  width: 240px;
  aspect-ratio: 4 / 5;
  border-radius: 5px;
`;

const Image = styled.div`
  width: 100%;
  height: 300px;
  background-color: ${colors.gray3};
`;

const MovieInfo = styled.div`
  width: 100%;
  height: 78px;
  background-color: ${colors.gray2};
`;
