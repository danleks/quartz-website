import React from 'react';
import GlobalStyle from 'assets/styles/GlobalStyle';
import theme from 'assets/styles/theme';
import styled, { ThemeProvider } from 'styled-components';
import PropTypes from 'prop-types';
import { Link, graphql } from 'gatsby';
import Img from 'gatsby-image';
import Button from 'components/Button/Button';

const StyledWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  height: 100vh;

  ${({ theme }) => theme.mq.desktop} {
    flex-direction: row;
  }
`;

const StyledTitle = styled.h2`
  position: absolute;
  top: ${({ next }) => (next ? '-12%' : 'unset')};
  bottom: ${({ next }) => (next ? 'unset' : '2.5rem')};
  left: 2.5rem;
  padding: 8px 1rem;
  text-transform: capitalize;
  font-size: ${({ theme }) => theme.fontSize.mobile.l};
  z-index: 1;
  color: ${({ theme }) => theme.color.white};
  background: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.mq.small} {
    font-size: ${({ theme }) => theme.fontSize.mobile.m};
  }

  ${({ theme }) => theme.mq.tablet} {
    top: ${({ next }) => (next ? '-23%' : 'unset')};
    left: 5rem;
    font-size: ${({ theme }) => theme.fontSize.tablet.l};
  }
`;

const StyledImg = styled(Img)`
  height: 100%;
`;

const StyledProductIndex = styled.span`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10rem;
  height: 5rem;
  border: 1px solid ${({ theme }) => theme.color.midGrey};
  margin-top: 2rem;
`;

const StyledDescription = styled.p`
  padding-right: 2rem;
  margin: 5rem 0;
  font-size: ${({ theme }) => theme.fontSize.mobile.xs};
  line-height: 1.5;
  color: ${({ theme }) => theme.color.black};

  ${({ theme }) => theme.mq.tablet} {
    padding-right: 3rem;
    font-size: ${({ theme }) => theme.fontSize.tablet.m};
  }
`;

const StyledButton = styled(Button)`
  margin-bottom: 2rem;
`;

const StyledInnerWrapper = styled.div`
  position: relative;
  flex: 1;

  :first-child {
    min-height: 50%;

    ${({ theme }) => theme.mq.desktop} {
      width: 50%;
      min-height: 100%;
    }

    ${({ theme }) => theme.mq.desktop} {
      order: 2;
      flex: 2;
      max-width: 50%;
    }
  }

  :nth-child(2) {
    border-bottom: 1px solid ${({ theme }) => theme.color.lightGrey};
    margin-left: 2.5rem;
    margin-bottom: 5rem;

    ${({ theme }) => theme.mq.tablet} {
      margin-left: 5rem;
    }

    ${({ theme }) => theme.mq.desktop} {
      order: 1;
    }
  }

  :last-child {
    max-height: 25%;
    cursor: pointer;

    ${({ theme }) => theme.mq.tablet} {
      max-height: 10%;
      padding: 0 3rem;
    }

    ${({ theme }) => theme.mq.desktop} {
      order: 3;

      & > * {
        display: none;
      }
    }
  }
`;

const ProductTemplate = ({ data }) => {
  const img =
    data.markdownRemark.frontmatter.featuredImage.childImageSharp.fluid;
  const title = data.markdownRemark.frontmatter.title.split(' ')[0];
  const productIndex = data.markdownRemark.frontmatter.title.split(' ')[1];
  const description = data.markdownRemark.frontmatter.description;

  return (
    <>
      <GlobalStyle />
      <ThemeProvider theme={theme}>
        <StyledWrapper>
          <StyledInnerWrapper>
            <StyledTitle>{title}</StyledTitle>
            <StyledImg fluid={img} alt={title} />
          </StyledInnerWrapper>
          <StyledInnerWrapper>
            <StyledProductIndex>{productIndex}</StyledProductIndex>
            <StyledDescription>{description}</StyledDescription>
            <StyledButton>Pobierz cennik</StyledButton>
          </StyledInnerWrapper>
          <StyledInnerWrapper>
            {data.allMarkdownRemark.edges.map((edge, i) => {
              const setHTML = (loopIndex, increment) => {
                return (
                  <Link
                    to={
                      data.allMarkdownRemark.edges[loopIndex + increment].node
                        .fields.slug
                    }
                  >
                    <StyledTitle next>
                      {
                        data.allMarkdownRemark.edges[
                          loopIndex + increment
                        ].node.frontmatter.title.split(' ')[0]
                      }
                    </StyledTitle>
                    <StyledImg
                      key={
                        data.allMarkdownRemark.edges[loopIndex + increment].node
                          .frontmatter.featuredImage.childImageSharp.id
                      }
                      fluid={
                        data.allMarkdownRemark.edges[loopIndex + increment].node
                          .frontmatter.featuredImage.childImageSharp.fluid
                      }
                    />
                  </Link>
                );
              };
              if (
                edge.node.frontmatter.featuredImage.childImageSharp.id ==
                data.markdownRemark.frontmatter.featuredImage.childImageSharp.id
              ) {
                if (i + 1 < data.allMarkdownRemark.edges.length) {
                  return setHTML(i, 1);
                } else {
                  return setHTML(0, 0);
                }
              }
            })}
          </StyledInnerWrapper>
        </StyledWrapper>
      </ThemeProvider>
    </>
  );
};

export const query = graphql`
  query productQuery($slug: String!) {
    allMarkdownRemark {
      edges {
        node {
          frontmatter {
            description
            title
            featuredImage {
              childImageSharp {
                id
                fluid {
                  aspectRatio
                  originalImg
                  sizes
                  src
                  srcSet
                  srcSetWebp
                  srcWebp
                }
              }
            }
          }
          fields {
            slug
          }
        }
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      frontmatter {
        description
        title
        featuredImage {
          childImageSharp {
            id
            fluid {
              aspectRatio
              originalImg
              sizes
              src
              srcSet
              srcSetWebp
              srcWebp
            }
          }
        }
      }
    }
  }
`;

ProductTemplate.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export default ProductTemplate;
