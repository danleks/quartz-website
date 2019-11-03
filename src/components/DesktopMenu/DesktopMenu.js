import React from 'react';
import PropTypes from 'prop-types';
// import { Link } from 'gatsby';
import styled from 'styled-components';

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

const StyledMenuWrapper = styled.ul`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 50rem;
    height: 100%;
    list-style: none;
  }
`;

const StyledLinkWrapper = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  transition: transform 0.2s ease-in-out;

  &:hover {
    transform: translateY(-3px);
  }
`;

const StyledLink = styled.a`
  &,
  &:link,
  &:visited,
  &:active {
    display: flex;
    align-items: center;
    height: 100%;
    font-size: ${({ theme }) => theme.fontSize.desktop.xxs};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    color: ${({ theme, pathname, menuStyles }) =>
      pathname.includes('/produkty') && !menuStyles
        ? theme.color.white
        : theme.color.black};
    text-decoration: none;
  }

  ::before {
    content: '';
    position: absolute;
    bottom: 2rem;
    width: 100%;
    height: 2px;
    background-color: ${({ theme, pathname, menuStyles }) =>
      pathname.includes('/produkty') && !menuStyles
        ? theme.color.white
        : theme.color.primary};
    transform: scaleX(0);
    transform-origin: center center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const DesktopMenu = ({ pathname, menuStyles }) => (
  <StyledMenuWrapper>
    {MenuItems.map(item => (
      <StyledLinkWrapper key={item.title}>
        <StyledLink
          to={item.linkTo}
          pathname={pathname}
          menuStyles={menuStyles}
        >
          {item.title}
        </StyledLink>
      </StyledLinkWrapper>
    ))}
  </StyledMenuWrapper>
);

DesktopMenu.propTypes = {
  menuStyles: PropTypes.bool.isRequired,
  pathname: PropTypes.string,
};

DesktopMenu.defaultProps = {
  pathname: '/',
};

export default DesktopMenu;
