import React from 'react';
import styled from 'styled-components';
import MainTemplate from 'templates/MainTemplate/MainTemplate';

const StyledHeading = styled.h1`
  font-size: ${({ theme }) => theme.l};
`;

const StyledParagraph = styled.p`
  font-size: ${({ theme }) => theme.s};
`;

const IndexPage = () => (
  <div>
    <MainTemplate>
      <StyledHeading>hello world</StyledHeading>
      <StyledParagraph>
        Lorem Ipsum is simply dummy of the printing and typesetting industry.
        Lorem Ipsum has been the industry standard dummy text ever since the
        1500s, when an unknown printer took a galley of type and scrambled it to
        make a type specimen book. It has survived not only five centuries, but
        also the leap into electronic typesetting, remaining essentially
        unchanged.
      </StyledParagraph>
    </MainTemplate>
  </div>
);

export default IndexPage;
