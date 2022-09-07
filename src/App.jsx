import { BrowserRouter, Routes, Route } from 'react-router-dom';
import {
  HOME_PAGE,
  DETAIL_PAGE,
  NOWPLAYING_PAGE,
  UPCOMING_PAGE,
  SEARCH_PAGE,
  TOPRATED_PAGE,
} from './consts';
import {
  Home,
  Detail,
  NowPlaying,
  UpComing,
  Search,
  TopRated,
} from './pages';

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path={HOME_PAGE} element={<Home />} />
          <Route path={DETAIL_PAGE} element={<Detail />} />
          <Route path={NOWPLAYING_PAGE} element={<NowPlaying />} />
          <Route path={UPCOMING_PAGE} element={<UpComing />} />
          <Route path={SEARCH_PAGE} element={<Search />} />
          <Route path={TOPRATED_PAGE} element={<TopRated />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
