import http from './base';

const LANGUAGE = 'ko-KR';
const REGION = 'KR';

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
