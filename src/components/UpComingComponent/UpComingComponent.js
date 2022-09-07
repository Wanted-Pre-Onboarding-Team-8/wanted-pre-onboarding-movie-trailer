import React, { useEffect, useState } from 'react';
import base from '../../apis/base';

export default function UpComing() {
  const [movieList, setMovieList] = useState([]);
  const getUpCominMovie = async (page) => {
    const response = await base.get({
      url: '/movie/upcoming',
      params: { page },
    });
    return setMovieList(response.data);
  };
  useEffect(() => {
    getUpCominMovie();
  }, [movieList]);
  console.log(movieList);
  return <div>UpComing</div>;
}
