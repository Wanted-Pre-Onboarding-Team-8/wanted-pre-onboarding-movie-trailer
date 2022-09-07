import { useInfiniteQuery } from 'react-query';
import { getUpcomingMovie } from '../../apis/movie';
import queryKey from '../../consts/queryKey';

export default function useUpcomingMoviesQuery(payload, option) {
  const { page } = payload;
  return useInfiniteQuery(
    [queryKey.getUpcomingMovie, page],
    ({ pageParam = 1 }) => {
      return getUpcomingMovie({ page: pageParam });
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
