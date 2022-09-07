import React, { useState, useCallback } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  HOME_PAGE,
  TOPRATED_PAGE,
  UPCOMING_PAGE,
  NOWPLAYING_PAGE,
} from '../../consts';
import { colors } from '../../style/colors';
import { media } from '../../style/media';
import { GiTomato, GiHamburgerMenu } from 'react-icons/gi';
import { AiOutlineClose } from 'react-icons/ai';

export default function Header() {
  const [isOpenMenu, setIsOpenMenu] = useState(false);

  const handleOpenMenu = useCallback(() => {
    setIsOpenMenu(true);
  }, []);

  const handleClose = useCallback(() => {
    setIsOpenMenu(false);
  }, []);

  return (
    <Wrapper>
      <Logo>
        <GiTomato />
        <span className="title">Fresh Tomato</span>
      </Logo>
      <NavItems isOpenMenu={isOpenMenu}>
        <NavItem>
          <Link to={HOME_PAGE}>
            <span>Home</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={UPCOMING_PAGE}>
            <span>Coming</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={NOWPLAYING_PAGE}>
            <span>Now</span>
          </Link>
        </NavItem>
        <NavItem>
          <Link to={TOPRATED_PAGE}>
            <span>Ranking</span>
          </Link>
        </NavItem>
      </NavItems>
      <IconWrapper>
        {!isOpenMenu ? (
          <GiHamburgerMenu size={30} onClick={handleOpenMenu} />
        ) : (
          <AiOutlineClose size={30} color="#fff" onClick={handleClose} />
        )}
      </IconWrapper>
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

  ${media.small} {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    padding: 0px 0px 30px 0px;
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

  ${media.small} {
    margin-top: 15px;
    margin-left: 15px;
  }
`;

const NavItems = styled.ul`
  display: flex;

  ${media.small} {
    display: ${(props) => (props.isOpenMenu ? 'flex' : 'none')};
    flex-direction: column;
    align-items: center;
    width: 100%;
    margin-top: 15px;
    padding-bottom: 15px;
  }
`;

const NavItem = styled.li`
  display: flex;
  align-items: center;
  padding: 8px 12px;
  width: 100%;
  text-align: center;
  border-radius: 10px;

  ${media.small} {
    display: flex;
    justify-content: center;
    width: 50%;
  }

  span {
    color: ${colors.white};
  }

  &:hover {
    background-color: ${colors.gray1};
  }
`;

const IconWrapper = styled.div`
  display: none;
  position: absolute;
  right: 0;
  top: 15px;
  right: 10px;
  cursor: pointer;

  ${media.small} {
    display: block;
  }
`;
