import React, { useState } from 'react';
import styled from 'styled-components';
import BackgroundImage from 'gatsby-background-image';
import { useStaticQuery, graphql } from 'gatsby';
import SearchProducts from 'components/SearchProducts/SearchProducts';

const StyledWrapper = styled.div`
  max-width: 130rem;
  padding: 5rem 2rem;
  margin: auto;
`;

const StyledListWrapper = styled.ul`
  display: flex;
  flex-direction: column;
  align-items: center;
  width: 100%;
  list-style: none;

  ${({ theme }) => theme.mq.preDesktop} {
    display: flex;
    flex-wrap: wrap;
    flex-direction: row;
  }
`;

const StyledImg = styled(BackgroundImage)`
  width: 100%;
  height: 30rem;
  background-size: cover;
  background-repeat: no-repeat;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  :hover {
    transform: scale(1.05);
  }
`;

const StyledListItem = styled.li`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.midGrey};
  margin-bottom: 5rem;

  ${({ theme }) => theme.mq.preDesktop} {
    max-width: calc(50% - 3rem);

    :not(:nth-child(1), :nth-child(2)) {
      margin: 3rem 0;
    }

    :nth-child(odd) {
      margin-right: 6rem;
    }
  }
`;

const StyledTitle = styled.h3`
  margin: 3rem 0 2rem;
  color: ${({ theme }) => theme.color.black};
  text-transform: capitalize;
`;

const StyledSearchProductsWrapper = styled.div`
  width: 100%;
  margin-bottom: 5rem;
`;

const ProductsListTemplate = () => {
  const data = useStaticQuery(graphql`
    query ProductsListQuery {
      allFile(filter: { relativeDirectory: { eq: "surfaces" } }) {
        edges {
          node {
            id
            childImageSharp {
              fluid {
                sizes
                src
                srcSet
                srcSetWebp
                srcWebp
                originalName
                aspectRatio
              }
            }
          }
        }
      }
    }
  `);

  const imageList = data.allFile.edges;
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => setInputValue(e.target.value);

  const filterItems = (inputValue, item) => {
    return item.includes(inputValue);
  };

  return (
    <StyledWrapper>
      <StyledSearchProductsWrapper>
        <SearchProducts onChange={handleInputChange} value={inputValue} />
      </StyledSearchProductsWrapper>
      <StyledListWrapper>
        {imageList
          .filter(item =>
            filterItems(
              inputValue,
              item.node.childImageSharp.fluid.originalName.split('.')[0]
            )
          )
          .map(image => (
            <StyledListItem key={image.node.id}>
              <StyledImg fluid={image.node.childImageSharp.fluid} />
              <StyledTitle>
                {image.node.childImageSharp.fluid.originalName.split('.')[0]}
              </StyledTitle>
            </StyledListItem>
          ))}
      </StyledListWrapper>
    </StyledWrapper>
  );
};

export default ProductsListTemplate;
