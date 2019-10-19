import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import ArrowDown from 'assets/images/arrow-down.svg';

const StyledWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: -1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  transform: translate(-50%);
  background-color: ${({ theme }) => theme.color.white};
`;

const StyledIcon = styled(Icon)`
  width: 3rem;
  height: 3rem;
`;

const ScrollDown = () => (
  <StyledWrapper>
    <StyledIcon src={ArrowDown} />
  </StyledWrapper>
);

export default ScrollDown;
