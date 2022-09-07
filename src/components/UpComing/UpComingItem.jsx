import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { useIntersection, useUpcomingMoviesQuery } from '../../hooks';
import { Card, CardSkeleton } from '../common';

export default function UpComingItem() {
  const { data, isFetching, hasNextPage, fetchNextPage } =
    useUpcomingMoviesQuery(
      { page: 1 },
      {
        staleTime: 300000,
      },
    );
  const [observerElement, setObserverElement] = useState(null);
  const isShowObserve = useIntersection(observerElement);

  useEffect(() => {
    isShowObserve && fetchNextPage();
  }, [isShowObserve, fetchNextPage]);

  const skeletonCards = Array.from({ length: 20 })
    .fill('')
    .map((_, index) => {
      return (
        <CardWrapper key={index}>
          <CardSkeleton />
        </CardWrapper>
      );
    });

  return (
    <MovieWrapper>
      {data?.pages?.map((movies) => {
        return movies.results.map((movie) => {
          const { id, title, poster_path, vote_average, vote_count } = movie;
          return (
            <CardWrapper key={id}>
              <Card
                id={id}
                title={title}
                imgSrc={poster_path}
                voteAverage={vote_average}
                voteCount={vote_count}
              />
            </CardWrapper>
          );
        });
      })}
      {isFetching && skeletonCards}
      {hasNextPage && <div ref={setObserverElement}></div>}
    </MovieWrapper>
  );
}

const MovieWrapper = styled.div`
  margin: 0 auto;
  height: 100vh;
  max-width: 1200px;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  flex-wrap: wrap;
`;

const CardWrapper = styled.div`
  padding: 24px;
`;
