import { Link } from 'react-router-dom';
import {
  HOME_PAGE,
  UPCOMING_PAGE,
  TOPRATED_PAGE,
  NOWPLAYING_PAGE,
} from '../../consts';

export const navMenuData = [
  {
    id: 1,
    element: (
      <Link to={HOME_PAGE}>
        <span>Home</span>
      </Link>
    ),
  },
  {
    id: 2,
    element: (
      <Link to={UPCOMING_PAGE}>
        <span>Comming</span>
      </Link>
    ),
  },
  {
    id: 3,
    element: (
      <Link to={TOPRATED_PAGE}>
        <span>Ranking</span>
      </Link>
    ),
  },
  {
    id: 4,
    element: (
      <Link to={NOWPLAYING_PAGE}>
        <span>Now</span>
      </Link>
    ),
  },
];
