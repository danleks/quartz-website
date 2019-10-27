import React from 'react';
import PropTypes from 'prop-types';
import styled from 'styled-components';

const StyledMenuWrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: 100vh;
  width: 100%;
  transform: translateX(${({ menuIsOpen }) => (menuIsOpen ? '0' : '100%')});
  background-color: ${({ theme }) => theme.color.white};
  z-index: 90;
  transition: transform 0.2s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const StyledInnerWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  height: 22rem;
  list-style: none;
`;

const StyledLink = styled.li`
  opacity: ${({ menuIsOpen }) => (menuIsOpen ? '1' : '0')};
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  cursor: pointer;
  transition: opacity 0.25s ease-in-out 0.3s;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.m};
  }
`;

const GetCurrentOffer = styled.button`
  position: absolute;
  bottom: 0;
  width: 100%;
  height: 8rem;
  border: none;
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};
  background-color: ${({ theme }) => theme.color.lightGrey};
  cursor: pointer;
  transform: translateY(${({ menuIsOpen }) => (menuIsOpen ? '0%' : '100%')});
  transition: transform 0.2s ease-in-out 0.4s;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.m};
  }
`;

const MenuItems = ['O nas', 'Usługi', 'Produkty', 'Kontakt'];

const MobileMenu = ({ menuIsOpen }) => (
  <StyledMenuWrapper menuIsOpen={menuIsOpen}>
    <StyledInnerWrapper>
      {MenuItems.map(item => (
        <StyledLink key={item} menuIsOpen={menuIsOpen}>
          {item}
        </StyledLink>
      ))}
    </StyledInnerWrapper>
    <GetCurrentOffer menuIsOpen={menuIsOpen}>Pobierz cennik</GetCurrentOffer>
  </StyledMenuWrapper>
);

MobileMenu.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
};

export default MobileMenu;
