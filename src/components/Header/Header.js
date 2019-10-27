import React, { useState, useEffect } from 'react';
import styled from 'styled-components';
// import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from 'components/MobileMenu/MobileMenu';
import DesktopMenu from 'components/DesktopMenu/DesktopMenu';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  right: 0;
  display: flex;
  justify-content: flex-end;
  align-items: center;
  width: 100%;
  padding: 3rem 2.5rem;
  background-color: ${({ theme, menuStyles }) =>
    menuStyles ? theme.color.white : 'transparent'};
  box-shadow: ${({ menuStyles }) =>
    menuStyles ? 'hsla(0, 0%, 5%, .2) 0px 1px 3px' : 'none'};
  z-index: 100;
  transform: translateY(
    ${({ showMenu, menuIsOpen }) => (showMenu || menuIsOpen ? '0' : '-100%')}
  );
  transition: all 0.5s ease;

  & > :nth-child(1) {
    z-index: 100;
  }

  ${({ theme }) => theme.mq.desktop} {
    justify-content: center;
    padding: ${({ menuStyles }) => (menuStyles ? '3rem 7rem' : '6rem 7rem')};
  }
`;

const Header = () => {
  useEffect(() => {
    window.addEventListener('scroll', showMenuHandler);
  });

  const [menuIsOpen, setMenuState] = useState(false);
  const [lastScrollTop, setLastScroll] = useState(0);
  const [showMenu, setMenu] = useState(true);
  const [menuStyles, setStyles] = useState(false);

  const showMenuHandler = () => {
    let scrollTop = window.pageYOffset || document.documentElement.scrollTop;

    scrollTop > 200 ? setStyles(true) : setStyles(false);
    scrollTop > lastScrollTop ? setMenu(false) : setMenu(true);
    setLastScroll(scrollTop);
  };

  const hamburgerHandler = () => setMenuState(!menuIsOpen);

  return (
    <StyledNav
      showMenu={showMenu}
      menuStyles={menuStyles}
      menuIsOpen={menuIsOpen}
    >
      {/* <Logo /> */}
      <Hamburger onClick={hamburgerHandler} menuIsOpen={menuIsOpen} />
      <MobileMenu menuIsOpen={menuIsOpen} />
      <DesktopMenu />
    </StyledNav>
  );
};

export default Header;
