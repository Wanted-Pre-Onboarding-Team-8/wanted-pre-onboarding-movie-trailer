import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { IoMdStar } from 'react-icons/io';
import Api from '../apis/base';
import { useParams } from 'react-router-dom';

export default function DetailMovie() {
  const [movieDetail, setMovieDetail] = useState([]);
  const { id } = useParams();

  const getMovieDetail = async () => {
    const res = await Api.get({
      url: `/movie/${id}`,
      params: {
        language: 'ko',
      },
    });
    return setMovieDetail(res.data);
  };
  console.log(movieDetail);

  useEffect(() => {
    getMovieDetail();
  }, []);

  return (
    <Wrapper>
      <HeadBox>
        <InfoPoster>
          <img
            src="https://img1.daumcdn.net/thumb/C408x596/?fname=https%3A%2F%2Ft1.daumcdn.net%2Fmovie%2F4eb261668eb43a125d0adc250a89adb48216c005"
            alt="포스터 이미지"
          />
        </InfoPoster>
        <InfoDetail>
          <DetailTitle>
            <h3>탑건:매버릭</h3>
          </DetailTitle>
          <DetailContents>
            <InnerDetail>
              <dl>
                <dt>개봉</dt>
                <dd>2022.06.22</dd>
              </dl>
              <dl>
                <dt>장르</dt>
                <dd>액션</dd>
              </dl>
              <dl>
                <dt>국가</dt>
                <dd>미국</dd>
              </dl>
              <dl>
                <dt>등급</dt>
                <dd>12세이상 관람가</dd>
              </dl>
              <dl>
                <dt>러닝타임</dt>
                <dd>130분</dd>
              </dl>
            </InnerDetail>
            <InnerDetail>
              <dl>
                <dt>평점</dt>
                <dd>
                  <StarIcon />
                  9.4
                </dd>
              </dl>
              <dl>
                <dt>누적관객</dt>
                <dd>8,078,606명</dd>
              </dl>
              <dl>
                <dt>박스오피스</dt>
                <dd>5위</dd>
              </dl>
            </InnerDetail>
          </DetailContents>
          <DetailButton>
            <button>버튼1</button>
            <button>버튼2</button>
            <button>버튼3</button>
          </DetailButton>
        </InfoDetail>
      </HeadBox>
    </Wrapper>
  );
}

const Wrapper = styled.div`
  width: 100%;
`;

const HeadBox = styled.div`
  position: relative;
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

const DetailTitle = styled.div``;

const DetailContents = styled.div`
  display: flex;
  align-items: flex-start;
`;

const InnerDetail = styled.div`
  display: table;
  max-width: 60%;
  dl {
    display: table-row;
  }
  dt {
    float: left;
    max-width: 100px;
  }
  dd {
    display: table-cell;
    text-indent: 20px;
  }
`;

const StarIcon = styled(IoMdStar)`
  color: red;
`;

const DetailButton = styled.div``;
