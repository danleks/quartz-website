import React from 'react';
import styled from 'styled-components';

// const StyledServiceBackground = styled.div`
//     display: flex;
//     flex-direction: column;
//     align-items: center;
//     width: 100%;
//     height: auto;
//     margin-top: -1px;
//     background-color: hsl(195, 3%, 28%);

//     ${({ theme }) => theme.mq.tablet} {
//         justify-content: center;
//         flex-direction: row;
//         height: 30rem;
//         clip-path: polygon(0% 0%,100% 14%,100% 100%,0 100%);
//     }

//     ${({ theme }) => theme.mq.desktop} {
//         flex-direction: row;
//         width: 100%;
//         height: 32rem;
//         margin-top: auto;
//         background-color: rgba(49, 48, 49, .8);
//         clip-path: polygon(0% 0%,100% 28%,100% 100%,0 100%);
//     }
// `;

const StyledServiceWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  height: 40rem;
  padding: 4rem 0;
  margin-top: -1px;
  list-style: none;
  background-color: hsl(195, 3%, 28%);

  ${({ theme }) => theme.mq.tablet} {
    width: 100%;
    flex-direction: row;
    justify-content: center;
    padding: 4rem 4rem;
  }
`;

const StyledService = styled.li`
  width: 61%;
  text-align: center;
  color: ${({ theme }) => theme.color.white};

  ${({ theme }) => theme.mq.tablet} {
    display: flex;
    flex-direction: column;
    align-items: center;
    width: 24rem;
    margin-top: 0;
    margin-right: 4rem;
  }

  h2 {
    font-size: ${({ theme }) => theme.fontSize.mobile.m};
    font-weight: ${({ theme }) => theme.fontWeight.regular};

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.fontSize.tablet.m};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.desktop.m};
    }
  }

  p {
    margin-top: 1rem;
    font-size: ${({ theme }) => theme.fontSize.mobile.s};
    font-weight: ${({ theme }) => theme.fontWeight.light};

    ${({ theme }) => theme.mq.tablet} {
      font-size: ${({ theme }) => theme.fontSize.tablet.s};
    }

    ${({ theme }) => theme.mq.desktop} {
      font-size: ${({ theme }) => theme.fontSize.desktop.s};
    }
  }
`;

const ServicesTemplate = () => (
  // <StyledServiceBackground>
  <StyledServiceWrapper>
    <StyledService>
      <h2>Konglomeraty</h2>
      <p>is simply dummy text of the printing and typesetting industry</p>
    </StyledService>
    <StyledService>
      <h2>Cięcie płyty</h2>
      <p>is simply dummy text of the printing and typesetting industry</p>
    </StyledService>
    <StyledService>
      <h2>Dostawa</h2>
      <p>is simply dummy text of the printing and typesetting industry</p>
    </StyledService>
  </StyledServiceWrapper>
  // </StyledServiceBackground>
);

export default ServicesTemplate;
