import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdStar } from 'react-icons/io';
import Api from '../../apis/base';
import { useParams } from 'react-router-dom';
import DetailTab from './DetailTab';

export default function Detail() {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();

  const IMG_PATH = 'https://www.themoviedb.org/t/p/w500';

  const getMovieDetail = async () => {
    const { data: results } = await Api.get({
      url: `/movie/${id}`,
      params: {
        language: 'ko',
        append_to_response: 'videos',
      },
    });
    setMovieDetail(results);
    return results;
  };
  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <Wrapper>
      <HeadBox>
        <InfoPoster>
          {movieDetail.poster_path ? (
            <img
              src={`${IMG_PATH}${movieDetail.poster_path}`}
              alt="포스터 이미지"
            />
          ) : null}
        </InfoPoster>
        <InfoDetail>
          <DetailTitle>
            <h3>{movieDetail.title}</h3>
            <h5>{movieDetail.original_title}</h5>
          </DetailTitle>
          <DetailContents>
            <InnerDetail>
              <dl>
                <dt>개봉</dt>
                <dd>{movieDetail.release_date}</dd>
              </dl>
              <dl>
                <dt>장르</dt>
                <dd key={movieDetail.genres[0]?.id}>
                  {movieDetail.genres[0]?.name}
                </dd>
              </dl>
              <dl>
                <dt>국가</dt>
                <dd key={movieDetail.production_countries[0]?.id}>
                  {movieDetail.production_countries[0]?.name}
                </dd>
              </dl>
              <dl>
                <dt>등급</dt>
                <dd>12세이상 관람가</dd>
              </dl>
              <dl>
                <dt>러닝타임</dt>
                <dd>{movieDetail.runtime}분</dd>
              </dl>
            </InnerDetail>
            <InnerDetail>
              <dl>
                <dt>평점</dt>
                <dd>
                  <StarIcon />
                  {movieDetail.vote_average}
                </dd>
              </dl>
            </InnerDetail>
          </DetailContents>
        </InfoDetail>
      </HeadBox>
      <DetailTab movieDetail={movieDetail} />
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 0px 0 0 135px;
`;

const HeadBox = styled.div`
  position: relative;
  padding: 70px 0 60px 0;
`;

const InfoPoster = styled.div`
  img {
    float: left;
    width: 210px;
    height: 308px;
    margin-right: 40px;
  }
`;

const InfoDetail = styled.div``;

const DetailTitle = styled.div`
  h3 {
    font-weight: 600;
    font-size: 30px;
    line-height: 36px;
  }
  h5 {
    font-weight: 600;
  }
`;

const DetailContents = styled.div`
  display: flex;
  align-items: flex-start;
  padding: 20px 0 48px;
`;

const InnerDetail = styled.div`
  display: table;
  max-width: 60%;
  margin-right: 60px;
  dl {
    display: table-row;
  }
  dt {
    float: left;
    max-width: 100px;
    color: #98989c;
  }
  dd {
    display: table-cell;
    text-indent: 20px;
    line-height: 27px;
  }
`;

const StarIcon = styled(IoMdStar)`
  color: red;
`;
