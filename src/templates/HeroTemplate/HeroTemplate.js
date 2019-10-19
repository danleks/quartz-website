import React from 'react';
import styled from 'styled-components';
import HeroImg from 'assets/images/gala-black.jpg';
import Button from 'components/Button/Button';
import ScrollDown from 'components/ScrollDown/ScrollDown';

const StyledHeroWrapper = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  margin-top: 6rem;
  clip-path: polygon(0 0, 100% 0%, 100% 100%, 0 98%);
  background-image: url(${HeroImg});
  background-position: 50%;
  background-repeat: no-repeat;
  background-size: cover;
  filter: contrast(200%);
`;

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.fontSize.mobile.l};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  color: ${({ theme }) => theme.color.white};

  @media (max-height: 640px) {
    font-size: 3.5rem;
  }
`;

const StyledSubHeading = styled.p`
  margin-top: 2rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  font-weight: ${({ theme }) => theme.fontWeight.light};
  line-height: 1;
  color: ${({ theme }) => theme.color.white};

  @media (max-height: 640px) {
    margin-top: 1rem;
    font-weight: 1.5rem;
  }
`;

const StyledServiceWrapper = styled.div`
  width: 80%;
  margin-top: 4.5rem;
  text-align: center;
  color: ${({ theme }) => theme.color.white};

  h2 {
    font-size: ${({ theme }) => theme.fontSize.mobile.m};
    font-weight: ${({ theme }) => theme.fontWeight.light};

    @media (max-height: 640px) {
      font-size: 1.6rem;
    }
  }

  p {
    margin-top: 2rem;
    font-size: ${({ theme }) => theme.fontSize.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.light};

    @media (max-height: 640px) {
      margin-top: 1rem;
      font-size: 1.6rem;
    }
  }

  @media (max-height: 640px) {
    margin-top: 2.5rem;
  }
`;

const StyledButton = styled(Button)`
  margin-top: 3rem;
`;

const Hero = () => (
  <>
    <StyledHeroWrapper src={HeroImg}>
      <StyledHeading>Belenco</StyledHeading>
      <StyledSubHeading>
        Profesjonalne podejście, wysoka jakość
      </StyledSubHeading>
      <StyledButton>Poznaj ofertę</StyledButton>
      <StyledServiceWrapper>
        <h2>Konglomeraty kwarcowe</h2>
        <p>is simply dummy text of the printing and typesetting industry</p>
      </StyledServiceWrapper>
      <StyledServiceWrapper>
        <h2>Cięcie płyty</h2>
        <p>is simply dummy text of the printing and typesetting industry</p>
      </StyledServiceWrapper>
      <StyledServiceWrapper>
        <h2>Dostawa</h2>
        <p>is simply dummy text of the printing and typesetting industry</p>
      </StyledServiceWrapper>
      <ScrollDown />
    </StyledHeroWrapper>
  </>
);

export default Hero;
