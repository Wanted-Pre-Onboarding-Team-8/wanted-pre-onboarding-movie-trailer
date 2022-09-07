import styled from 'styled-components';
import { Card } from '../common';

export default function NowPlayingItem({movie}) {
  
  return (
    <Wrapper>
      <Card id={movie.id} imgSrc={movie.poster_path} title={movie.title} star={movie.vote_average} voteCount={movie.vote_count}/>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
`;
