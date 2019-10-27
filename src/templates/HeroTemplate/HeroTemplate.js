import React from 'react';
import styled from 'styled-components';
import HeroImg from 'assets/images/hero.svg';
import Button from 'components/Button/Button';

const StyledHeroWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  background-image: url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 0 0;

  ${({ theme }) => theme.mq.tablet} {
    height: 90vh;
  }

  ${({ theme }) => theme.mq.desktop} {
    background-position: 0 -1px;
  }
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.l};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.desktop.l};
  }
`;

const StyledHeroText = styled.p`
  width: 70%;
  margin: 1rem 0 4rem;
  font-size: 1.6rem;
  text-align: center;

  ${({ theme }) => theme.mq.small} {
    width: 80%;
  }

  ${({ theme }) => theme.mq.tablet} {
    width: 40rem;
  }
`;

const Hero = () => (
  <>
    <StyledHeroWrapper src={HeroImg}>
      <StyledHeading>Belenco</StyledHeading>
      <StyledHeroText>
        Nasze piekne konglomeraty, tekst nic nie zawiera i nic nie znaczy. Tekst
        nic nie zawiera i nic nie znaczy.
      </StyledHeroText>
      <Button>Poznaj ofertę</Button>
    </StyledHeroWrapper>
  </>
);

export default Hero;
