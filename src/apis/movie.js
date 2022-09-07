import {
  MOVIE_NOW_PLAYING_URI,
  MOVIE_POPULAR_URI,
  MOVIE_TOP_RATED_URI,
  MOVIE_UPCOMING_URI,
} from '../consts';
import http from './base';

const LANGUAGE = 'ko-KR';
const REGION = 'KR';

export const getPopularMovies = async ({
  page,
  language = LANGUAGE,
  region = REGION,
}) => {
  const response = await http.get({
    url: MOVIE_POPULAR_URI,
    params: { page, language, region },
  });
  return response.data;
};

export const getNowPlayingMovies = async ({
  page,
  language = LANGUAGE,
  region = REGION,
}) => {
  const response = await http.get({
    url: MOVIE_NOW_PLAYING_URI,
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
    url: MOVIE_TOP_RATED_URI,
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
    url: MOVIE_UPCOMING_URI,
    params: { page, language, region },
  });
  return response.data;
};
