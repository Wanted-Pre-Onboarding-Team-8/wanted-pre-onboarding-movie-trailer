# - Assginment #3

## ๐ ํ๋ก์ ํธ ๋ชฉํ

#### Movie Trailer ์ ์

<br/>

## ๐จโ๐ฉโ๐งโ๐ง ํ์ ์๊ฐ ๋ฐ ์ญํ 

| ์ด๋ฆ   |                                   ์ญํ                                     |
| ------ | :-----------------------------------------------------------------------: |
| ๊น์ฌ๋ฏผ |              ์ํ ๊ฒ์ ํ์ด์ง, ์ ์ฒด ๋ฆฌ๋ทฐ ๋ฐ ํผ๋๋ฐฑ, ๋ฆฌํฉํ ๋ง              |
| ์ด์ง์ฐ | react-query hooks, popular ํ์ด์ง, intersecting์ ํ์ฉํ ์ธํผ๋ํฐ์คํฌ๋กค๋ง |
| ์ฅํ์ฑ |             top-rated ํ์ด์ง, ์ด๋ฏธ์ง ์์๋ ๋์ฒด ์ด๋ฏธ์ง ์ ์ฉ              |
| ์ ์น์ค |       now-playing ํ์ด์ง, ์นด๋ ๋์์ธ ๋ฐ ํจ๊ณผ, scroll top๋ฒํผ ์์ฑ        |
| ๊น๊ธฐ๋ฒ |         ์ํ ์์ธ ํ์ด์ง, ์์ธ ํ์ด์ง์ ๋ง๋ ๋์์ธ ๊ตฌ์ฑ ๋ฐ ์ ์ฉ          |
| ๋ฐฐ๋ฒ์ |                  ์ด๊ธฐ ํ๊ฒฝ ์ธํ, GNB ์ ์, axios ์ถ์ํ                   |
| ์ต์ฌํ |                    upcoming ํ์ด์ง, ๋ก๋ฉ ์ค์ผ๋ ํค ์ฒ๋ฆฌ                    |

</br>

## โ ํ๋ก์ ํธ ๋งํฌ

<h3><a href='http://pre-onboarding-wanted-deploy-test-metamong.s3-website.ap-northeast-2.amazonaws.com/'>๋ฐ๋ชจ ์ฌ์ดํธ ๋ณด๋ฌ๊ฐ๊ธฐ</a></h3>

</br>

## โ ํ๋ก์ ํธ ์คํ ๋ฐฉ๋ฒ

```
> npm i
> npm run start
```

</br>

## โจ ํ๋ก์ ํธ ๊ตฌํ ๊ธฐ๋ฅ

- ๊ณตํต

  - Loading ์ํ ํ๊ธฐ
  - Infinite scroll
  - ์คํฌ๋กค ๊ฐ์งํ์ฌ ScrollUp button ํ์๋๋๋ก, ๋๋ฅผ ์ ์ต์๋จ์ผ๋ก ์คํฌ๋กค ์ด๋
  - API Response ๋ฐ์ดํฐ ์บ์ฌ (๋ผ์ด๋ธ๋ฌ๋ฆฌ ์ฌ์ฉ) - ์บ์ฑ์ ๋ํ ๊ฐ๋จํ ๊ฐ๋์ ๊ธ๋ก ์์ฑํด์ README์ ํฌํจ or ๋งํฌํํ๋ก ์ฐ๊ฒฐํด์ฃผ์ธ์
    </br>

- movies / ๋ฆฌ์คํธ ํ์ด์ง

  - ํ๋ฒ์ ๊ฐ์ ธ์ฌ ๋ฐ์ดํฐ ์ต๋ 20
  - ์ ๋ชฉ, ํฌ์คํฐ, ๋ณ์  ํ์
  - ํฌ์คํฐ ์๋ ๊ฒฝ์ฐ, ๋์ฒด ์ด๋ฏธ์ง ์ฌ์ฉ
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

- movie / ์์ธ ํ์ด์ง

  - ๋น๋์ค ์๋ ๊ฒฝ์ฐ, ํ์ด์ง ์ง์ ์ ์๋์ผ๋ก ๋น๋์ค ํ๋ ์ด
  - ์ ๋ชฉ, ํฌ์คํฐ, ๋ณ์ , ์ ์ ์ฐ๋, ์ฅ๋ฅด ๋ฐ์ดํฐ ํ์ฉํด์ UI ํ๊ธฐ
  - ๊ทธ ์ธ์ ๋ฐ์ดํฐ ์ถ๊ฐ ํ์ฉ ์ฌ๋ถ๋ ์์ 
    </br>
    </br>

  [์์ธํ์ด์ง]  
  <img src="https://user-images.githubusercontent.com/54323527/189020997-e1d50fb3-db0e-4840-97d0-196933b80184.png">

  <img src="https://user-images.githubusercontent.com/54323527/189021537-53d32c64-9674-422d-bbca-da1c721ebea7.png">

- search - ์ ๋ชฉ, ํฌ์คํฐ, ๋ณ์  - ํฌ์คํฐ ์๋ ๊ฒฝ์ฐ, ๋์ฒด ์ด๋ฏธ์ง ์ฌ์ฉ

  </br>
  </br>

## โจ ์ฌ์ฉ ์คํ

- react
- styled-components (style)
- react-router-dom (route)
- axios (api)
- react-icons (icon)
- react-query (server-state)

### ๐ react-query๋ฅผ ์ฌ์ฉํ ์ด์ 

์๋ฒ ๋ฐ์ดํฐ๋ฅผ ์บ์ฑ์ฒ๋ฆฌ ํด์ฃผ๋ ๋ผ์ด๋ธ๋ฌ๋ฆฌ์ ๋ํด RTK์ react-query๋ฅผ ๋น๊ต ํ ๊ฒฐ๊ณผ, ๋น๊ต์  ๋ฎ์ ๋ฌ๋์ปค๋ธ์ ์ธํผ๋ํธ ์คํฌ๋กค๋ง ํ์ ์์ฒด๋ก ์ง์ ํด์ฃผ๋ react-query๊ฐ ๋ ์ฌ์ฉํ๊ธฐ์ ์ ํฉํ๋ค๊ณ  ์๊ฐํ์ฌ ํ๋ก์ ํธ์ ์ ์ฉ ํ์์ต๋๋ค.

</br>

## โจ ํ๋ก์ ํธ ๊ตฌ์กฐ

```
src
 โฃ apis
 โ โฃ base.js
 โ โฃ index.js
 โ โ movie.js
 โฃ components
 โ โฃ Detail
 โ โ โฃ Detail.jsx
 โ โ โฃ DetailTab.jsx
 โ โ โ index.js
 โ โฃ Home
 โ โ โฃ PopularList.jsx
 โ โ โ index.js
 โ โฃ NowPlaying
 โ โ โฃ NowPlayingList.jsx
 โ โ โ index.js
 โ โฃ TopRated
 โ โ โฃ TopRatedList.jsx
 โ โ โ index.js
 โ โฃ UpComing
 โ โ โฃ UpComingItem.jsx
 โ โ โ index.js
 โ โฃ common
 โ โ โฃ Card.jsx
 โ โ โฃ CardSkeleton.jsx
 โ โ โฃ Header.jsx
 โ โ โฃ Layout.jsx
 โ โ โฃ ScrollToTopButton.jsx
 โ โ โ index.js
 โ โฃ SearchForm.jsx
 โ โ index.js
 โฃ consts
 โ โฃ image.js
 โ โฃ index.js
 โ โฃ net.js
 โ โฃ queryKey.js
 โ โ route.js
 โฃ hooks
 โ โฃ queries
 โ โ โฃ index.js
 โ โ โฃ useNowPlayingMoviesQuery.js
 โ โ โฃ usePopularMoviesQuery.js
 โ โ โฃ useTopRatedMoviesQuery.js
 โ โ โ useUpcomingMoviesQuery.js
 โ โฃ index.js
 โ โ useIntersection.js
 โฃ pages
 โ โฃ Detail.jsx
 โ โฃ Home.jsx
 โ โฃ NowPlaying.jsx
 โ โฃ Search.jsx
 โ โฃ TopRated.jsx
 โ โฃ UpComing.jsx
 โ โ index.js
 โฃ style
 โ โฃ GlobalStyle.jsx
 โ โฃ colors.js
 โ โฃ index.js
 โ โฃ media.js
 โ โ reset.js
 โฃ utils
 โ โ index.js
 โฃ App.jsx
 โ index.js
```

</br>

## ๐ 8ํ ์ปจ๋ฒค์ ๋ฐ ํ์๋ก

- [Convention](https://www.notion.so/6a7522b6be6348d3b9e8e522c0c76053)
- [ํ์๋ก](https://www.notion.so/2022-09-06-27035c5750a7490e84528f46212548af)
- [์บ์ฑ์ด๋?](https://www.notion.so/a968ca21c15246f7babd04b3f2592e2c)
