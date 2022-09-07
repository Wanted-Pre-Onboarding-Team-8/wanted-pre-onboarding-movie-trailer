import { SEARCH_MOVIE_URL } from '../consts';
import http from './base';

const LANGUAGE = 'ko-KR';
const REGION = 'KR';

export const getMoviesBySearchKeyword = (query, page = 1) => {
  return http.get({
    url: `${SEARCH_MOVIE_URL}`,
    params: { query, page },
  });
};

export const getNowPlayingMovies = async (currentPage) => {
  return await http.get({
    url: '/movie/now_playing',
    params: {
      page: currentPage,
      language: LANGUAGE,
      region: REGION,
    },
  });
};
