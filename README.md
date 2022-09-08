# - Assginment #3

## 📕 프로젝트 목표

#### Movie Trailer 제작

<br/>

## 👨‍👩‍👧‍👧 팀원 소개 및 역할

| 이름   |                                   역할                                    |
| ------ | :-----------------------------------------------------------------------: |
| 김재민 |              영화 검색 페이지, 전체 리뷰 및 피드백, 리팩토링              |
| 이지우 | react-query hooks, popular 페이지, intersecting을 활용한 인피니티스크롤링 |
| 장현성 |             top-rated 페이지, 이미지 없을때 대체 이미지 적용              |
| 신승준 |       now-playing 페이지, 카드 디자인 및 효과, scroll top버튼 생성        |
| 김기범 |         영화 상세 페이지, 상세 페이지에 맞는 디자인 구성 및 적용          |
| 배범수 |                  초기 환경 세팅, GNB 제작, axios 추상화                   |
| 최재혁 |                    upcoming 페이지, 로딩 스켈레톤 처리                    |

</br>

## ✋ 프로젝트 링크

<h3><a href='http://pre-onboarding-wanted-deploy-test-metamong.s3-website.ap-northeast-2.amazonaws.com/'>데모 사이트 보러가기</a></h3>

</br>

## ✋ 프로젝트 실행 방법

```
> npm i
> npm run start
```

</br>

## ✨ 프로젝트 구현 기능

- 공통

  - Loading 상태 표기
  - Infinite scroll
  - 스크롤 감지하여 ScrollUp button 표시되도록, 누를 시 최상단으로 스크롤 이동
  - API Response 데이터 캐쉬 (라이브러리 사용) - 캐싱에 대한 간단한 개념을 글로 작성해서 README에 포함 or 링크형태로 연결해주세요
    </br>

- movies / 리스트 페이지

  - 한번에 가져올 데이터 최대 20
  - 제목, 포스터, 별점 표시
  - 포스터 없는 경우, 대체 이미지 사용
    </br>
    </br>

  [Popular]  
  <img src="https://user-images.githubusercontent.com/54323527/189018675-6b9c05e9-b435-4368-9b60-b5aba17d037f.png">
  </br>
  </br>

  [Upcoming]  
  <img src="https://user-images.githubusercontent.com/54323527/189018688-63c5cacf-9409-492e-9e0d-6c5ea1d9cfe8.png">
  </br>
  </br>

  [NowPlaying]  
  <img src="https://user-images.githubusercontent.com/54323527/189019419-dcf51de0-bb14-4c79-8b2f-a4c0d5de65d5.png">
  </br>
  </br>

  [Ranking]  
  <img src="https://user-images.githubusercontent.com/54323527/189018700-33bb6e57-c612-419a-bbc7-1273764d6d40.png">
  </br>
  </br>

- movie / 상세 페이지

  - 비디오 있는 경우, 페이지 진입 시 자동으로 비디오 플레이
  - 제목, 포스터, 별점, 제작 연도, 장르 데이터 활용해서 UI 표기
  - 그 외의 데이터 추가 활용 여부는 자유
    </br>
    </br>

  [상세페이지]  
  <img src="https://user-images.githubusercontent.com/54323527/189020997-e1d50fb3-db0e-4840-97d0-196933b80184.png">

  <img src="https://user-images.githubusercontent.com/54323527/189021537-53d32c64-9674-422d-bbca-da1c721ebea7.png">

- search - 제목, 포스터, 별점 - 포스터 없는 경우, 대체 이미지 사용

  </br>
  </br>

## ✨ 사용 스택

- react
- styled-components (style)
- react-router-dom (route)
- axios (api)
- react-icons (icon)
- react-query (server-state)

### 🚀 react-query를 사용한 이유

서버 데이터를 캐싱처리 해주는 라이브러리에 대해 RTK와 react-query를 비교 한 결과, 비교적 낮은 러닝커브와 인피니트 스크롤링 훅을 자체로 지원 해주는 react-query가 더 사용하기에 적합하다고 생각하여 프로젝트에 적용 하였습니다.

</br>

## ✨ 프로젝트 구조

```
src
 ┣ apis
 ┃ ┣ base.js
 ┃ ┣ index.js
 ┃ ┗ movie.js
 ┣ components
 ┃ ┣ Detail
 ┃ ┃ ┣ Detail.jsx
 ┃ ┃ ┣ DetailTab.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ Home
 ┃ ┃ ┣ PopularList.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ NowPlaying
 ┃ ┃ ┣ NowPlayingList.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ TopRated
 ┃ ┃ ┣ TopRatedList.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ UpComing
 ┃ ┃ ┣ UpComingItem.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ common
 ┃ ┃ ┣ Card.jsx
 ┃ ┃ ┣ CardSkeleton.jsx
 ┃ ┃ ┣ Header.jsx
 ┃ ┃ ┣ Layout.jsx
 ┃ ┃ ┣ ScrollToTopButton.jsx
 ┃ ┃ ┗ index.js
 ┃ ┣ SearchForm.jsx
 ┃ ┗ index.js
 ┣ consts
 ┃ ┣ image.js
 ┃ ┣ index.js
 ┃ ┣ net.js
 ┃ ┣ queryKey.js
 ┃ ┗ route.js
 ┣ hooks
 ┃ ┣ queries
 ┃ ┃ ┣ index.js
 ┃ ┃ ┣ useNowPlayingMoviesQuery.js
 ┃ ┃ ┣ usePopularMoviesQuery.js
 ┃ ┃ ┣ useTopRatedMoviesQuery.js
 ┃ ┃ ┗ useUpcomingMoviesQuery.js
 ┃ ┣ index.js
 ┃ ┗ useIntersection.js
 ┣ pages
 ┃ ┣ Detail.jsx
 ┃ ┣ Home.jsx
 ┃ ┣ NowPlaying.jsx
 ┃ ┣ Search.jsx
 ┃ ┣ TopRated.jsx
 ┃ ┣ UpComing.jsx
 ┃ ┗ index.js
 ┣ style
 ┃ ┣ GlobalStyle.jsx
 ┃ ┣ colors.js
 ┃ ┣ index.js
 ┃ ┣ media.js
 ┃ ┗ reset.js
 ┣ utils
 ┃ ┗ index.js
 ┣ App.jsx
 ┗ index.js
```

</br>

## 📖 8팀 컨벤션 및 회의록

- [Convention](https://www.notion.so/6a7522b6be6348d3b9e8e522c0c76053)
- [회의록](https://www.notion.so/2022-09-06-27035c5750a7490e84528f46212548af)
- [캐싱이란?](https://www.notion.so/a968ca21c15246f7babd04b3f2592e2c)
