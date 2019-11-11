import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

const StyledFooter = styled.footer`
  position: relative;
  padding: 2rem 10%;
  border: 1px solid ${({ theme }) => theme.color.midGrey};
  background-color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 2rem 0 2rem 10%;
  }
`;

const StyledButton = styled(Button)`
  position: absolute;
  top: -3.8rem;
  left: 10%;
`;

const StyledContactWrapper = styled.ul`
  width: 100%;

  ${({ theme }) => theme.mq.desktop} {
    display: flex;
    flex-wrap: wrap;
    max-width: 150rem;
    list-style: none;
  }

  ${({ theme }) => theme.mq.huge} {
    width: 80%;
  }
`;

const StyledInnerWrapper = styled.li`
  display: flex;
  flex-direction: column;
  margin: 5rem 0;
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.mq.tablet} {
    flex: 1;
  }

  h3 {
    line-height: 3;
    font-size: ${({ theme }) => theme.fontSize.mobile.xxs};
    text-transform: uppercase;
    color: ${({ theme }) => theme.color.darkGrey};

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.fontSize.tablet.xxxs};
    }
  }

  span {
    line-height: 2;
    font-size: ${({ theme }) => theme.fontSize.mobile.xs};
    color: ${({ theme }) => theme.color.black};

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.fontSize.tablet.xs};
    }
  }

  :last-child {
    padding-top: 2rem;
    border-top: 1px solid ${({ theme }) => theme.color.midGrey};
    margin-bottom: 0;

    ${({ theme }) => theme.mq.tablet} {
      display: flex;
      flex-direction: row;
      align-items: center;
      justify-content: flex-start;
      flex: unset;
      width: 100%;
      height: 8rem;
      margin: 4rem auto 0;
    }

    ${({ theme }) => theme.mq.desktop} {
      margin: 0 auto;
    }

    span {
      font-size: ${({ theme }) => theme.fontSize.mobile.xs};
      font-weight: ${({ theme }) => theme.fontWeight.light};
      text-align: center;
      color: ${({ theme }) => theme.color.darkGrey};

      ${({ theme }) => theme.mq.tablet} {
        font-size: ${({ theme }) => theme.fontSize.tablet.xxs};
      }
    }
  }
`;

const StyledMailTo = styled.a`
  cursor: pointer;
  text-decoration: none;
  color: inherit;
  transition: color 0.3s ease-in-out;

  :hover {
    color: ${({ theme }) => theme.color.darkBlue};
  }
`;

const ContactTemplate = () => (
  <StyledFooter id="kontakt" data-sal="slide-up" data-sal-duration="1000">
    <StyledButton contact href="mailto:kwarctex@gmail.com">
      Kontakt
    </StyledButton>
    <StyledContactWrapper>
      <StyledInnerWrapper
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="300"
      >
        <h3>Adres</h3>
        <span>Belenco</span>
        <span>ul. Lotnicza 1</span>
        <span>
          05-800 Nowy Dwór <br /> Mazowiecki
        </span>
      </StyledInnerWrapper>
      <StyledInnerWrapper
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="400"
      >
        <h3>Dane firmowe</h3>
        <span>VAT: PL12345567789</span>
        <span>REGON: 1234324</span>
        <span>KRS: 34343423</span>
      </StyledInnerWrapper>
      <StyledInnerWrapper
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="500"
      >
        <h3>Numer telefonu</h3>
        <span>+48 123 456 789</span>
      </StyledInnerWrapper>
      <StyledInnerWrapper
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="600"
      >
        <h3>E-mail</h3>
        <span>
          <StyledMailTo href="mailto:kwarctex@gmail.com">
            kwarctex@gmail.com
          </StyledMailTo>
        </span>
      </StyledInnerWrapper>
      <StyledInnerWrapper
        data-sal="slide-up"
        data-sal-duration="1000"
        data-sal-delay="600"
      >
        <span>&copy; Copyright 2019 Belenco. All Rights Reserved.</span>
      </StyledInnerWrapper>
    </StyledContactWrapper>
  </StyledFooter>
);

export default ContactTemplate;
