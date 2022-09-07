import { useInfiniteQuery } from 'react-query';
import { getTopRatedMovie } from '../../apis/movie';
import queryKey from '../../consts/queryKey';

export default function useTopRatedMoviesQuery(payload, option) {
  const { page } = payload;
  return useInfiniteQuery(
    [queryKey.getTopRatedMovie, page],
    ({ pageParam = 1 }) => {
      return getTopRatedMovie({ page: pageParam });
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
