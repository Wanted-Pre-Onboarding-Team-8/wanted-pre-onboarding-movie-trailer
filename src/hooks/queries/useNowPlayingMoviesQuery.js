import { useInfiniteQuery } from 'react-query';
import { getNowPlayingMovies } from '../../apis';
import { queryKey } from '../../consts';

export default function useNowPlayingMoviesQuery(payload, option) {
  const { page } = payload;
  return useInfiniteQuery(
    [queryKey.getNowPlayingMovie, page],
    ({ pageParam = 1 }) => {
      return getNowPlayingMovies({ page: pageParam });
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
