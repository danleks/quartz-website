import React from 'react';
import styled from 'styled-components';
import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 100vh;
  max-width: 180rem;
  padding: 0 4rem;
  background-image: linear-gradient(
    to right,
    hsla(40, 12%, 91%, 1),
    hsla(40, 12%, 91%, 1) 35%,
    ${({ theme }) => theme.color.white} 35%
  );

  ${({ theme }) => theme.mq.small} {
    padding: 0 2rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 13rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 0 8rem 0 20rem;
  }

  ${({ theme }) => theme.mq.huge} {
    padding: 0 6rem 0 30rem;
  }
`;

// const StyledHeading = styled.h2`
//     font-size: ${({ theme }) => theme.fontSize.mobile.l};
//     font-weight: ${({ theme }) => theme.fontWeight.regular};
//     text-align: center;
// `;

const StyledParagraph = styled.p`
  margin-top: 2rem;
  word-spacing: 4px;
  font-size: ${({ theme }) => theme.fontSize.mobile.m};
  text-align: left;
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.6;

  ${({ theme }) => theme.mq.tablet} {
    font-size: 2.5rem;
    letter-spacing: 1px;
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: 3rem;
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: 4rem;
  }
`;

const StyledButton = styled(Button)`
  align-self: flex-start;
  border-color: ${({ theme }) => theme.color.black};
  margin-top: 3rem;
  color: ${({ theme }) => theme.color.black};
`;

const AboutTemplate = () => (
  <StyledWrapper>
    {/* <StyledHeading>O nas</StyledHeading> */}
    <StyledParagraph>
      Kwarctex jest dystrybutorem konglameratów kwarcowych. Posiadamy wyłączne
      prawo na sprzedaż produktów Belenco, co zapewnia wysoką jakość w
      konkurencyjnej cenie.{' '}
    </StyledParagraph>
    <StyledButton>Poznaj ofertę</StyledButton>
  </StyledWrapper>
);

export default AboutTemplate;
