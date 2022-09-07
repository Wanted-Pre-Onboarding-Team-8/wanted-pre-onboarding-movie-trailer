import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  HOME_PAGE,
  UPCOMING_PAGE,
  TOPRATED_PAGE,
  NOWPLAYING_PAGE,
  SEARCH_PAGE,
} from '../../consts';

const wrappingNavData = [
  {
    id: 1,
    element: <Link to={HOME_PAGE}>Home</Link>,
  },
  {
    id: 2,
    element: <Link to={UPCOMING_PAGE}>Up Coming</Link>,
  },
  {
    id: 3,
    element: <Link to={TOPRATED_PAGE}>Top Ranking</Link>,
  },
  {
    id: 4,
    element: <Link to={NOWPLAYING_PAGE}>Now</Link>,
  },
  {
    id: 5,
    element: <Link to={SEARCH_PAGE}>Search</Link>,
  },
];

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <span class="title">Baebumsoo</span>
      </Logo>
      <NavItems>
        {wrappingNavData.map((item) => (
          <NavItem key={item.id}>{item.element}</NavItem>
        ))}
      </NavItems>
    </Wrapper>
  );
}

const Wrapper = styled.nav``;

const Logo = styled.div``;
const NavItems = styled.ul``;
const NavItem = styled.li``;
