import React from 'react';
import styled from 'styled-components';

const StyledFooter = styled.footer`
  position: relative;
  padding: 4rem 4rem 2rem 4rem;
  margin-top: -13rem;
  background-color: hsl(195, 3%, 28%);

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-wrap: wrap;
  }
`;

const StyledHeading = styled.h2`
  width: 100%;
  font-size: 3rem;
  text-align: center;
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    font-size: 4.5rem;
  }
`;

const StyledInnerWrapper = styled.div`
  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    width: 80%;
    margin: auto;
  }

  ${({ theme }) => theme.mq.huge} {
    width: 50%;
  }
`;

const StyledContactWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 4rem;
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    flex: 1;
  }

  h3 {
    line-height: 3;
    font-size: ${({ theme }) => theme.fontSize.mobile.xs};
    text-transform: uppercase;
    color: hsl(0, 0%, 52%);
  }

  span {
    line-height: 2;
    font-size: ${({ theme }) => theme.fontSize.mobile.s};
  }
`;

const StyledCopyrightWrapper = styled(StyledContactWrapper)`
  padding: 2rem 0 0 0;
  border-top: 1px solid hsl(0, 0%, 52%);

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: center;
    flex: unset;
    width: 100%;
    height: 8rem;
    margin: 4rem auto 0;
  }

  span {
    text-align: center;
    color: ${({ theme }) => theme.color.white};
  }
`;

const ContactTemplate = () => (
  <StyledFooter>
    <StyledHeading>Kontakt</StyledHeading>
    <StyledInnerWrapper>
      <StyledContactWrapper>
        <h3>Adres</h3>
        <span>Belenco</span>
        <span>ul. Lotnicza 1</span>
        <span>
          05-800 Nowy Dwór <br /> Mazowiecki
        </span>
      </StyledContactWrapper>
      <StyledContactWrapper>
        <h3>Dane firmowe</h3>
        <span>VAT: PL12345567789</span>
        <span>REGON: 1234324</span>
        <span>KRS: 34343423</span>
      </StyledContactWrapper>
      <StyledContactWrapper>
        <h3>Numer telefonu</h3>
        <span>+48 123 456 789</span>
      </StyledContactWrapper>
      <StyledContactWrapper>
        <h3>E-mail</h3>
        <span>kwarctex@gmail.com</span>
      </StyledContactWrapper>
    </StyledInnerWrapper>
    <StyledCopyrightWrapper>
      <span>&copy; Copyright 2019 Belenco. All Rights Reserved.</span>
    </StyledCopyrightWrapper>
  </StyledFooter>
);

export default ContactTemplate;
