import { useInfiniteQuery } from 'react-query';
import { getPopularMovies } from '../../apis/movie';
import queryKey from '../../consts/queryKey';

export default function usePopularMoviesQuery(payload, option) {
  const { page } = payload;
  return useInfiniteQuery(
    [queryKey.getPopularMovie, page],
    ({ pageParam = 1 }) => {
      return getPopularMovies({ page: pageParam });
    },
    {
      ...option,
      getNextPageParam: (lastPage, pages) => {
        if (lastPage.page === lastPage.total_pages) return;
        return pages.length + 1;
      },
    },
  );
}
