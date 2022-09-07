import styled from 'styled-components';
import { Card } from '../common';

export default function NowPlayingItem() {
  return (
    <Wrapper>
      <Card />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  padding: 24px;
`;
