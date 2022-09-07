import styled from 'styled-components';
import { Card } from '../common';

export default function NowPlayingItem({ movie }) {
  const {
    id,
    poster_path: imgSrc,
    title,
    vote_average: voteAverage,
    vote_count: voteCount,
  } = movie;
  return (
    <Wrapper>
      <Card
        id={id}
        imgSrc={imgSrc}
        title={title}
        voteAverage={voteAverage}
        voteCount={voteCount}
      />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
`;
