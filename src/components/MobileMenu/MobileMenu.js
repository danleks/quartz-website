import React from 'react';
import PropTypes from 'prop-types';
import window from 'global';
// import { Link } from 'gatsby';
import styled from 'styled-components';
import Button from 'components/Button/Button';

const StyledMenuWrapper = styled.div`
  position: absolute;
  left: 0;
  top: 0;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-around;
  height: ${window.innerHeight}px;
  min-height: 100vh;
  width: 100%;
  transform: translateY(${({ menuIsOpen }) => (menuIsOpen ? '0px' : '-200%')});
  background-color: ${({ theme }) => theme.color.white};
  z-index: 90;
  transition: transform 0.4s ease-in-out;

  ${({ theme }) => theme.mq.desktop} {
    display: none;
  }
`;

const StyledInnerWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  align-items: center;
  width: 100%;
  height: 70%;
  list-style: none;
`;

const StyledLinkWrapper = styled.li`
  position: relative;
  width: 100%;
  padding: 1rem 0;
  transform: translateY(${({ menuIsOpen }) => (menuIsOpen ? '0' : '-1rem')});
  text-align: center;
  opacity: ${({ menuIsOpen }) => (menuIsOpen ? '1' : '0')};
  cursor: pointer;
  transition: opacity 0.35s ease-in-out 0.4s, background-color 0.35s ease-in-out .6s, transform .45s ease-in-out 0.6s;

  /* &:hover {
    background-color: ${({ theme }) => theme.color.lightBlue};
  } */
`;

const StyledLink = styled.a`
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  text-decoration: none;
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.m};
  }
`;

// const GetCurrentOfferWrapper = styled.div`
//   position: absolute;
//   bottom: 0;
//   display: flex;
//   align-items: center;
//   justify-content: center;
//   width: 100%;
//   height: 8rem;
//   background-color: ${({ theme }) => theme.color.primaryLight};
//   transform: translateY(${({ menuIsOpen }) => (menuIsOpen ? '0' : '100%')});
//   transition: transform 1s ease-in-out 0.4s;
// `;

const MenuItems = [
  {
    title: 'Usługi',
    linkTo: '#uslugi',
  },
  {
    title: 'O nas',
    linkTo: '#o-nas',
  },
  {
    title: 'Produkty',
    linkTo: '#dlaczego-nasze-produkty',
  },
  {
    title: 'Kontakt',
    linkTo: '#kontakt',
  },
];

const MobileMenu = ({ menuIsOpen, menuHandler }) => {
  return (
    <StyledMenuWrapper menuIsOpen={menuIsOpen}>
      <StyledInnerWrapper>
        {MenuItems.map(item => (
          <StyledLinkWrapper
            key={item.title}
            menuIsOpen={menuIsOpen}
            onClick={menuHandler}
          >
            <StyledLink href={item.linkTo}>{item.title}</StyledLink>
          </StyledLinkWrapper>
        ))}
        <StyledLinkWrapper menuIsOpen={menuIsOpen}>
          <Button menu>Pobierz cennik</Button>
        </StyledLinkWrapper>
      </StyledInnerWrapper>
    </StyledMenuWrapper>
  );
};

MobileMenu.propTypes = {
  menuIsOpen: PropTypes.bool.isRequired,
  menuHandler: PropTypes.func.isRequired,
};

export default MobileMenu;
