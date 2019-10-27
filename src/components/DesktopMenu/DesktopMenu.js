import React from 'react';
import styled from 'styled-components';

const MenuItems = ['O nas', 'Usługi', 'Produkty', 'Kontakt'];

const StyledMenuWrapper = styled.ul`
  display: none;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    justify-content: space-between;
    width: 38rem;
    list-style: none;
  }
`;

const StyledMenuItem = styled.li`
  position: relative;
  font-size: 1.7rem;
  font-weight: 600;
  cursor: pointer;

  ::before {
    content: '';
    position: absolute;
    bottom: -6px;
    width: 100%;
    height: 2px;
    background-color: #ef5b52;
    transform: scaleX(0);
    transform-origin: left center;
    transition: transform 0.3s ease-in-out;
  }

  &:hover::before {
    transform: scaleX(1);
  }
`;

const DesktopMenu = () => (
  <StyledMenuWrapper>
    {MenuItems.map(item => (
      <StyledMenuItem key={item}>{item}</StyledMenuItem>
    ))}
  </StyledMenuWrapper>
);

export default DesktopMenu;
