import { useInfiniteQuery } from 'react-query';
import { getUpcomingMovies } from '../../apis';
import { queryKey } from '../../consts';

export default function useUpcomingMoviesQuery(payload, option) {
  const { page } = payload;
  return useInfiniteQuery(
    [queryKey.getUpcomingMovie, page],
    ({ pageParam = 1 }) => {
      return getUpcomingMovies({ page: pageParam });
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
