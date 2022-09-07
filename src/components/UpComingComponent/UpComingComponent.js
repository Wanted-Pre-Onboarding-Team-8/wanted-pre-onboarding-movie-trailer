import React, { useEffect, useState } from 'react';
import base from '../../apis/base';
import { Card } from '../common';

export default function UpComing() {
  const [movieList, setMovieList] = useState([]);
  const getUpComingMovie = async (page) => {
    const response = await base.get({
      url: '/movie/upcoming',
      params: { page },
    });
    return setMovieList(response.data);
  };
  useEffect(() => {
    getUpComingMovie();
  }, [movieList]);
  
  console.log(movieList);
  return <Card />;
}
