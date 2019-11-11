import React from 'react';
import styled from 'styled-components';
import ColorIcon from 'assets/images/icons/color.svg';
import HammerIcon from 'assets/images/icons/hammer.svg';
import HandIcon from 'assets/images/icons/hand.svg';
import LeafIcon from 'assets/images/icons/leaf.svg';
import ManIcon from 'assets/images/icons/man.svg';
import RoseIcon from 'assets/images/icons/rose.svg';

import Icon from 'components/Icon/Icon';
import Button from 'components/Button/Button';

const whyOurProducts = [
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
  width: 22%;
  border: 1px solid ${({ theme }) => theme.color.midGrey};
  border-radius: 30%;
  padding: 14px;
`;

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 8rem 0rem;
  border-top: 1px solid ${({ theme }) => theme.color.midGrey};
  background-image: linear-gradient(
    90deg,
    white 0,
    ${({ theme }) => theme.color.lightGrey} 0
  );
  /* overflow-x: hidden; */

  ${({ theme }) => theme.mq.small} {
    padding: 12rem 0rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    padding: 12rem 4rem;
    background-image: linear-gradient(
      98deg,
      white 50%,
      ${({ theme }) => theme.color.lightGrey} 50%
    );
  }

  ${({ theme }) => theme.mq.desktop} {
    padding: 12rem 12rem 10rem;
    background-image: linear-gradient(
      115deg,
      white 50%,
      ${({ theme }) => theme.color.lightGrey} 50%
    );
  }
`;

const StyledHeading = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.mobile.m};
  text-align: center;
  color: ${({ theme }) => theme.color.black};
  line-height: 2;

  ${({ theme }) => theme.mq.tablet} {
    width: 70rem;
    font-size: ${({ theme }) => theme.fontSize.tablet.xxl};
    font-weight: ${({ theme }) => theme.fontWeight.bold};
    letter-spacing: 1px;
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 80rem;
    align-self: flex-start;
    text-align: left;
    font-size: ${({ theme }) => theme.fontSize.desktop.l};
  }
`;

const StyledButton = styled(Button)`
  margin-top: 4rem;
  ${({ theme }) => theme.mq.desktop} {
    align-self: flex-start;
  }
`;

const StyledList = styled.ul`
  max-width: 115rem;
  margin-top: 4rem;
  list-style: none;

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-wrap: wrap;
  }

  ${({ theme }) => theme.mq.desktop} {
    margin-top: 10rem;
  }
`;

const StyledListItem = styled.li`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 5rem 0;
  border-top: 1px solid ${({ theme }) => theme.color.midGrey};

  ${({ theme }) => theme.mq.tablet} {
    flex: 1;
    min-width: 50%;
  }

  ${({ theme }) => theme.mq.preDesktop} {
    min-width: 30%;
    padding: 10rem 0;
  }
`;

const StyledSubHeading = styled.h3`
  margin-top: 4rem;
  font-size: ${({ theme }) => theme.fontSize.mobile.m};
  font-weight: ${({ theme }) => theme.fontWeight.bold};
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.m};
  }

  ${({ theme }) => theme.mq.desktop} {
    font-size: ${({ theme }) => theme.fontSize.desktop.s};
  }
`;

const StyledParagraph = styled.span`
  width: 55%;
  margin-top: 1.5rem;
  text-align: center;
  font-size: ${({ theme }) => theme.fontSize.mobile.xs};
  color: ${({ theme }) => theme.color.darkGrey};

  ${({ theme }) => theme.mq.tablet} {
    font-size: ${({ theme }) => theme.fontSize.tablet.xxs};
  }

  ${({ theme }) => theme.mq.desktop} {
    width: 70%;
    font-size: ${({ theme }) => theme.fontSize.desktop.xxs};
  }
`;

const WhyOurProductsTemplate = () => {
  return (
    <StyledWrapper id="dlaczego-nasze-produkty">
      <StyledHeading data-sal="fade" data-sal-duration="1000">
        Dowiedź się dlaczego nasze konglomeraty są wyjątkowe
      </StyledHeading>
      <StyledButton>Poznaj ofertę</StyledButton>
      <StyledList>
        {whyOurProducts.map(productOverview => (
          <StyledListItem
            key={productOverview.title}
            data-sal="slide-up"
            data-sal-duration="1000"
          >
            <StyledIcon src={productOverview.icon} />
            <StyledSubHeading>{productOverview.title}</StyledSubHeading>
            <StyledParagraph>{productOverview.text}</StyledParagraph>
          </StyledListItem>
        ))}
      </StyledList>
    </StyledWrapper>
  );
};

export default WhyOurProductsTemplate;
