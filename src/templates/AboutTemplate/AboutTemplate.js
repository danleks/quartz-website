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
    ${({ theme }) => theme.color.lightGrey},
    ${({ theme }) => theme.color.lightGrey} 35%,
    ${({ theme }) => theme.color.white} 35%
  );
  overflow-x: hidden;

  ${({ theme }) => theme.mq.small} {
    padding: 0 2rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 0 10rem;
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 0 8rem 0 20rem;
  }

  ${({ theme }) => theme.mq.huge} {
    padding: 0 6rem 0 30rem;
  }
`;

const StyledParagraph = styled.p`
  margin-top: 2rem;
  word-spacing: 3px;
  font-size: ${({ theme }) => theme.fontSize.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.regular};
  text-align: left;
  line-height: 1.6;

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.l};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.desktop.m};
  }

  ${({ theme }) => theme.mq.huge} {
    font-size: ${({ theme }) => theme.fontSize.desktop.xl};
  }
`;

const StyledButton = styled(Button)`
  align-self: flex-start;
  margin-top: 3rem;
`;

const AboutTemplate = () => (
  <StyledWrapper id="o-nas">
    <StyledParagraph data-sal="slide-down" data-sal-duration="1000">
      Kwarctex jest dystrybutorem konglameratów kwarcowych. Posiadamy wyłączne
      prawo na sprzedaż produktów Belenco, co zapewnia wysoką jakość w
      konkurencyjnej cenie.
    </StyledParagraph>
    <StyledButton>Poznaj ofertę</StyledButton>
  </StyledWrapper>
);

export default AboutTemplate;
