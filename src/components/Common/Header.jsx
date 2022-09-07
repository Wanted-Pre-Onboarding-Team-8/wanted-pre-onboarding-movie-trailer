import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  HOME_PAGE,
  UPCOMING_PAGE,
  TOPRATED_PAGE,
  NOWPLAYING_PAGE,
} from '../../consts';
import { colors } from '../../style/colors';
import { GiTomato, GiHamburgerMenu } from 'react-icons/gi';

const wrappingNavData = [
  {
    id: 1,
    element: (
      <Link to={HOME_PAGE} style={{ textDecoration: 'none' }}>
        <span>Home</span>
      </Link>
    ),
  },
  {
    id: 2,
    element: (
      <Link to={UPCOMING_PAGE} style={{ textDecoration: 'none' }}>
        <span>Comming</span>
      </Link>
    ),
  },
  {
    id: 3,
    element: (
      <Link to={TOPRATED_PAGE} style={{ textDecoration: 'none' }}>
        <span>Ranking</span>
      </Link>
    ),
  },
  {
    id: 4,
    element: (
      <Link to={NOWPLAYING_PAGE} style={{ textDecoration: 'none' }}>
        <span>Now</span>
      </Link>
    ),
  },
];

export default function Header() {
  return (
    <Wrapper>
      <Logo>
        <GiTomato />
        <span class="title">Fresh Tomatto</span>
      </Logo>
      <NavItems>
        {wrappingNavData.map((item) => (
          <NavItem key={item.id}>{item.element}</NavItem>
        ))}
      </NavItems>
      <GiHamburgerMenu size={30} />
    </Wrapper>
  );
}

const Wrapper = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #263343;
  color: white;
  padding: 20px 90px 20px 90px;

  svg {
    display: none;
  }
`;

const Logo = styled.div`
  font-size: 24px;
  cursor: pointer;
  display: flex;
  align-items: center;

  svg {
    display: inline;
    margin-right: 8px;
  }
`;
const NavItems = styled.ul`
  display: flex;
`;
const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  width: 100%;
  text-align: center;
  border-radius: 10px;

  span {
    color: white;
  }

  &:hover {
    background-color: ${colors.gray1};
  }
`;
