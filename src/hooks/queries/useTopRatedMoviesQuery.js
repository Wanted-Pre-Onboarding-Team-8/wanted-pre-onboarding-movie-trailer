import { useInfiniteQuery } from 'react-query';
import { getTopRatedMovies } from '../../apis';
import { queryKey } from '../../consts';

export default function useTopRatedMoviesQuery(payload, option) {
  const { page } = payload;
  return useInfiniteQuery(
    [queryKey.getTopRatedMovie, page],
    ({ pageParam = 1 }) => {
      return getTopRatedMovies({ page: pageParam });
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
