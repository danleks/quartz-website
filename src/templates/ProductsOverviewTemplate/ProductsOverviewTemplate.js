import React from 'react';
import styled from 'styled-components';
import ColorIcon from 'assets/images/color.svg';
import HammerIcon from 'assets/images/hammer.svg';
import HandIcon from 'assets/images/hand.svg';
import LeafIcon from 'assets/images/leaf.svg';
import ManIcon from 'assets/images/man.svg';
import RoseIcon from 'assets/images/rose.svg';
import HeroImg from 'assets/images/products.svg';

import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';

const productsOverview = [
  {
    icon: HammerIcon,
    title: 'Trwałe',
    text:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
  {
    icon: RoseIcon,
    title: 'Naturalnie piękne',
    text:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
  {
    icon: ColorIcon,
    title: 'Odporne na chemikalia',
    text:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
  {
    icon: HandIcon,
    title: 'Odporne na plamy',
    text:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
  {
    icon: ManIcon,
    title: 'Bezpieczne dla zdrowia',
    text:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
  {
    icon: LeafIcon,
    title: 'Przyjazne dla środowiska',
    text:
      'is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industrys standard dummy text ever since the 1500s,',
  },
];

const StyledIcon = styled(Icon)`
  width: 30%;
  border: 1px solid #e6e6e6;
  border-radius: 30%;
  padding: 14px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 7rem 0rem 4rem;
  background-image: url(${HeroImg});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: -1rem -1rem;

  ${({ theme }) => theme.mq.small} {
    padding: 4rem 0rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 7rem 4rem 7rem;
  }
`;

const StyledHeading = styled.h2`
  text-align: center;

  ${({ theme }) => theme.mq.tablet} {
    font-size: 4rem;
    letter-spacing: 1px;
  }
`;

const StyledList = styled.ul`
  max-width: 115rem;
  padding-bottom: 20rem;
  margin-top: 4rem;
  list-style: none;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 7rem;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  margin-top: 6rem;

  ${({ theme }) => theme.mq.tablet} {
    flex: 1;
    min-width: 50%;
  }

  ${({ theme }) => theme.mq.preDesktop} {
    min-width: 30%;
  }

  ${({ theme }) => theme.mq.preDesktop} {
    margin-top: 9rem;
  }
`;

const StyledSubHeading = styled.h3`
  font-size: ${({ theme }) => theme.fontSize.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  margin-top: 4rem;

  ${({ theme }) => theme.mq.desktop} {
    font-size: 2.5rem;
  }
`;

const StyledParagraph = styled.p`
  width: 70%;
  margin-top: 1.5rem;
  font-size: ${({ theme }) => theme.fontSize.mobile.s};
  text-align: center;
  color: #676767;

  ${({ theme }) => theme.mq.desktop} {
    font-size: 1.8rem;
  }
`;

const StyledButtonWrapper = styled.li`
  display: flex;
  justify-content: center;
  margin: 4rem auto;

  ${({ theme }) => theme.mq.tablet} {
    margin: 9rem auto;
  }
`;

const ProductsOverviewTemplate = () => (
  <StyledWrapper>
    <StyledHeading>
      Dowiedź się dlaczego nasze konglomeraty są wyjątkowe
    </StyledHeading>
    <StyledList>
      {productsOverview.map(productOverview => (
        <StyledListItem key={productOverview.title}>
          <StyledIcon src={productOverview.icon} />
          <StyledSubHeading>{productOverview.title}</StyledSubHeading>
          <StyledParagraph>{productOverview.text}</StyledParagraph>
        </StyledListItem>
      ))}
      <StyledButtonWrapper>
        <Button product>Poznaj ofertę</Button>
      </StyledButtonWrapper>
    </StyledList>
  </StyledWrapper>
);

export default ProductsOverviewTemplate;
