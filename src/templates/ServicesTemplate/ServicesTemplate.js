import React from 'react';
import styled from 'styled-components';

const services = [
  {
    title: 'Konglomeraty',
    description:
      'is simply dummy text of the printing and typesetting industry',
  },
  {
    title: 'Cięcie płyty',
    description:
      'is simply dummy text of the printing and typesetting industry',
  },
  {
    title: 'Dostawa',
    description:
      'is simply dummy text of the printing and typesetting industry',
  },
];

const StyledServiceWrapper = styled.div`
  padding: 4rem 0;
  background-color: ${({ theme }) => theme.color.primary};
`;

const StyledServiceList = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  list-style: none;

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    flex-direction: row;
    justify-content: center;
  }
`;

const StyledService = styled.li`
  width: 45%;
  text-align: center;
  color: ${({ theme }) => theme.color.white};

  :not(:last-child) {
    margin-bottom: 4rem;
  }

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 17rem;
    margin-right: 4rem;

    :not(:last-child) {
      margin-bottom: 0;
    }
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.bold};

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.fontSize.tablet.m};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.desktop.xs};
    }
  }

  p {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSize.mobile.xs};
    font-weight: ${({ theme }) => theme.fontWeight.light};
    color: ${({ theme }) => theme.color.lightWhite};

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.fontSize.tablet.xxs};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.desktop.xxs};
    }
  }
`;

const ServicesTemplate = () => (
  <StyledServiceWrapper id="uslugi">
    <StyledServiceList>
      {services.map(service => (
        <StyledService key={service.title}>
          <h2>{service.title}</h2>
          <p>{service.description}</p>
        </StyledService>
      ))}
    </StyledServiceList>
  </StyledServiceWrapper>
);

export default ServicesTemplate;
