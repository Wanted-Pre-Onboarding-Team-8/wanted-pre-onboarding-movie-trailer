import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {HOME_PAGE, DETAIL_PAGE, NOWPLAYING_PAGE, UPCOMING_PAGE, SEARCH_PAGE, TOPRATED_PAGE} from './consts/route';
import {HomePage, DetailMovie, NowPlayingMovies, UpComingMovies, SearchMovies, TopRatedMovies} from './pages'

function App() {
  return (
    <div>
    <BrowserRouter>
        <Routes>
          <Route path={HOME_PAGE} element={<HomePage />}/>
          <Route path={DETAIL_PAGE} element={<DetailMovie />}/>
          <Route path={NOWPLAYING_PAGE} element={<NowPlayingMovies />}/>
          <Route path={UPCOMING_PAGE} element={<UpComingMovies />}/>
          <Route path={SEARCH_PAGE} element={<SearchMovies />}/>
          <Route path={TOPRATED_PAGE} element={<TopRatedMovies />}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;
