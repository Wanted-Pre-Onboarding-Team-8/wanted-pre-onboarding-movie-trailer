import { SEARCH_MOVIE_URL } from '../consts';
import http from './base';

export const getMoviesBySearchKeyword = (query, page = 1) => {
  return http.get({
    url: `${SEARCH_MOVIE_URL}`,
    params: { query, page },
  });
};
