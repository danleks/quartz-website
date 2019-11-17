import React, { useState, useEffect } from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';
// import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import DesktopMenu from 'components/DesktopMenu/DesktopMenu';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  display: flex;
  justify-content: flex-start;
  align-items: center;
  width: 100vw;
  height: 6rem;
  padding-left: 2rem;
  background-color: ${({ menuStyles }) =>
    menuStyles ? 'white' : 'transparent'};
  box-shadow: ${({ menuStyles }) =>
    menuStyles ? 'hsla(0, 0%, 5%, .2) 0px 1px 3px' : 'none'};
  z-index: 100;
  overflow: hidden;
  transition: background-color 0.5s ease 0s;

  & > :nth-child(1) {
    z-index: 100;
  }

  ${({ theme }) => theme.mq.desktop} {
    justify-content: center;
    height: 8rem;
  }
`;

const Header = ({ pathname }) => {
  useEffect(() => {
    window.addEventListener('scroll', showMenuHandler);
  });

  const [menuIsOpen, setMenuState] = useState(false);
  // const [lastScrollTop, setLastScroll] = useState(0);
  // const [showMenu, setMenu] = useState(true);
  const [menuStyles, setStyles] = useState(false);
  // const [translateY, setTranslateY] = useState(0);

  const showMenuHandler = () => {
    let currentScrollTop = window.pageYOffset;

    if (currentScrollTop > 50) {
      setStyles(true);
    } else {
      setStyles(false);
    }

    //setLastScroll(currentScrollTop);
  };

  const hamburgerHandler = () => {
    !menuIsOpen
      ? (document.querySelector('body').style.overflow = 'hidden')
      : (document.querySelector('body').style.overflow = 'auto');
    setMenuState(!menuIsOpen);
  };

  return (
    <StyledNav
      // showMenu={showMenu}
      menuStyles={menuStyles}
      menuIsOpen={menuIsOpen}
    >
      <Hamburger
        onClick={hamburgerHandler}
        menuIsOpen={menuIsOpen}
        menuStyles={menuStyles}
        pathname={pathname}
      />
      {/* <Logo /> */}
      <MobileMenu menuIsOpen={menuIsOpen} menuHandler={hamburgerHandler} />
      <DesktopMenu menuStyles={menuStyles} pathname={pathname} />
    </StyledNav>
  );
};

Header.propTypes = {
  pathname: PropTypes.string,
};

Header.defaultProps = {
  pathname: '/',
};

export default Header;
