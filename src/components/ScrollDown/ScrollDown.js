import React from 'react';
import styled from 'styled-components';
import Icon from 'components/Icon/Icon';
import ArrowDown from 'assets/images/arrow-down.svg';

const StyledWrapper = styled.div`
  position: absolute;
  left: 50%;
  bottom: -2rem;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 4rem;
  height: 4rem;
  border-radius: 50%;
  transform: translate(-50%);
  background-color: ${({ theme }) => theme.color.lightGrey};

  ${({ theme }) => theme.mq.tablet} {
    bottom: 8rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    bottom: 7.5rem;
  }
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
