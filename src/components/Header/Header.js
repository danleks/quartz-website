import React, { useState } from 'react';
import styled from 'styled-components';
import Logo from 'components/Logo/Logo';
import Hamburger from 'components/Hamburger/Hamburger';
import MobileMenu from 'components/MobileMenu/MobileMenu';

const StyledNav = styled.nav`
  position: fixed;
  top: 0;
  left: 0;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  height: 6rem;
  padding: 0.5rem 1.5rem;
  background-color: ${({ theme }) => theme.color.white};
  z-index: 100;

  & > :not(:last-child) {
    z-index: 100;
  }
`;

const Header = () => {
  const [menuIsOpen, setMenuState] = useState(false);

  const hamburgerHandler = () => setMenuState(!menuIsOpen);

  return (
    <StyledNav>
      <Logo />
      <Hamburger onClick={hamburgerHandler} menuIsOpen={menuIsOpen} />
      <MobileMenu menuIsOpen={menuIsOpen} />
    </StyledNav>
  );
};

export default Header;
