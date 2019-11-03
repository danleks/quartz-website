import React from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';

const StyledWrapper = styled.div`
  width: 100%;
`;

const StyledMainImgWrapper = styled(BackgroundImage)`
  display: flex;
  align-items: center;
  justify-content: center;
  min-height: 80vh;
  max-height: 80vh;
  width: 100%;
  padding: 0 6.5rem;
  background-repeat: no-repeat;
  background-size: cover;
  background-position: 20% 0;
`;

const StyledParagraph = styled.p`
  max-width: 60rem;
  color: ${({ theme }) => theme.color.white};
  font-size: ${({ theme }) => theme.fontSize.mobile.xl};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  line-height: 1.5;
  text-align: center;
  z-index: 10;

  ${({ theme }) => theme.mq.small} {
    font-size: ${({ theme }) => theme.fontSize.mobile.l};
  }

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.xxl};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.desktop.xl};
  }
`;

const StyledInnerText = styled.span`
  color: ${({ theme }) => theme.color.white};
`;

const StyledOverlay = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  bottom: 0;
  left: 0;
  max-height: 80vh;
  opacity: 0.7;
  background-color: ${({ theme }) => theme.color.dark};
`;

const ProductsIntrotemplate = () => {
  const data = useStaticQuery(graphql`
    query ProductsIntroQuery {
      file(relativePath: { eq: "productsBg.jpg" }) {
        id
        childImageSharp {
          fluid {
            ...GatsbyImageSharpFluid_withWebp
          }
        }
      }
    }
  `);

  const ImagePath = data.file.childImageSharp.fluid;

  return (
    <StyledWrapper>
      <StyledMainImgWrapper fluid={ImagePath}>
        <StyledParagraph>
          Powierzchni z naturalnego kwarcu, które zaspokoją{' '}
          <StyledInnerText>różne gusta i potrzeby</StyledInnerText>.
        </StyledParagraph>
        <StyledOverlay />
      </StyledMainImgWrapper>
    </StyledWrapper>
  );
};

export default ProductsIntrotemplate;
