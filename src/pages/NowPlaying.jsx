import { useEffect } from 'react';
import { useInfiniteQuery } from 'react-query';
import styled from 'styled-components';
import { NowPlayingItem } from '../components';
import { getNowPlayingMovies } from '../apis/movie';

const INITIAL_PAGE_NUMBER = 1;

export default function NowPlaying() {
  const { data, isLoading, isFetching, hasNextPage, fetchNextPage } =
    useInfiniteQuery(
      'getNowPlayingMoives',
      ({ pageParam = INITIAL_PAGE_NUMBER }) => {
        return getNowPlayingMovies(pageParam);
      },
      {
        getNextPageParam: (lastPage) => {
          if (lastPage.data.page === lastPage.data.total_pages) return;
          return lastPage.data.page + 1;
        },
      },
    );

  const onScroll = async (event) => {
    const { scrollHeight, scrollTop, clientHeight } =
      event.target.scrollingElement;

    if (scrollHeight - scrollTop <= clientHeight * 1.25) {
      if (!isFetching && hasNextPage) {
        await fetchNextPage();
      }
    }
  };

  useEffect(() => {
    document.addEventListener('scroll', onScroll);

    return () => {
      document.removeEventListener('scroll', onScroll);
    };
  }, [data]);

  return (
    <Wrapper>
      {!isLoading ? (
        data?.pages?.map((page) => {
          return page?.data?.results?.map((movie) => {
            return <NowPlayingItem key={movie.id} movie={movie} />;
          });
        })
      ) : 
        <h1>로딩 중입니다.</h1>
      }
      <div></div>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 1200px;

  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;