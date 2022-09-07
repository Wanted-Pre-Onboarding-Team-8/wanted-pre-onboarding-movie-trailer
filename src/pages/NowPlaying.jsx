/* eslint-disable */

import { useEffect, useState } from 'react';
import { useInfiniteQuery, useQuery } from 'react-query';
import styled from 'styled-components';
import { NowPlayingItem } from '../components';
import http from '../apis/base';

const INITIAL_PAGE_NUMBER = 1;
const LANGUAGE = 'ko-KR';
const REGION = 'KR';

const getNowPlayingMovies = async (currentPage) => {
  return await http.get({
    url: '/movie/now_playing',
    params: {
      page: currentPage,
      language: LANGUAGE,
      region: REGION,
    },
  });
};

export default function NowPlaying() {
  const [currentPage, setCurrentPage] = useState(INITIAL_PAGE_NUMBER);
  const { data, isLoading, isFetching} = useQuery('get', (currentPage) => getNowPlayingMovies(currentPage));
  // const { data, isLoading, isFetching } = useInfiniteQuery(
  //   'getNowPlayingMoives',
  //   ({ pageParams = INITIAL_PAGE_NUMBER }) => getNowPlayingMovies(pageParams),
  // );

  const movies = data?.data?.results;

  const onScroll = (event) => {
    const { scrollHeight, scrollTop, clientHeight } =
      event.target.scrollingElement;

    if (!isFetching && scrollHeight - scrollTop <= clientHeight * 1.5) {
      console.log('hi');
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <Wrapper>
      {!isLoading ? (
        movies?.map((movie) => <NowPlayingItem key={movie.id} />)
      ) : (
        <h1 style={{ color: 'white' }}>loading...</h1>
      )}
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 1200px;

  display: flex;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
`;
