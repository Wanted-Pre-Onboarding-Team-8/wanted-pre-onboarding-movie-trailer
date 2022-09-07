import http from './base';
import {
  MOVIE_NOW_PLAYING_URL,
  MOVIE_POPULAR_URL,
  MOVIE_TOP_RATED_URL,
  MOVIE_UPCOMING_URL,
  SEARCH_MOVIE_URL,
} from '../consts';
const LANGUAGE = 'ko-KR';
const REGION = 'KR';

export const getPopularMovies = async ({
  page,
  language = LANGUAGE,
  region = REGION,
}) => {
  const response = await http.get({
    url: MOVIE_POPULAR_URL,
    params: { page, language, region },
  });

  return response.data;
};

export const getMoviesBySearchKeyword = (query, page = 1) => {
  return http.get({
    url: `${SEARCH_MOVIE_URL}`,
    params: { query, page },
  });
};

export const getNowPlayingMovies = async ({
  page,
  language = LANGUAGE,
  region = REGION,
}) => {
  const response = await http.get({
    url: MOVIE_NOW_PLAYING_URL,
    params: { page, language, region },
  });
  return response.data;
};

export const getTopRatedMovies = async ({
  page,
  language = LANGUAGE,
  region = REGION,
}) => {
  const response = await http.get({
    url: MOVIE_TOP_RATED_URL,
    params: { page, language, region },
  });
  return response.data;
};

export const getUpcomingMovies = async ({
  page,
  language = LANGUAGE,
  region = REGION,
}) => {
  const response = await http.get({
    url: MOVIE_UPCOMING_URL,
    params: { page, language, region },
  });
  return response.data;
};
