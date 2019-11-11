import React, { useState } from 'react';
import styled from 'styled-components';
import PropTypes from 'prop-types';
import { Link } from 'gatsby';
import Img from 'gatsby-image';
import SearchProducts from 'components/SearchProducts/SearchProducts';

const StyledWrapper = styled.div`
  max-width: 130rem;
  padding: 5rem 6rem;
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

const StyledImg = styled(Img)`
  width: 100%;
  height: 35rem;
  cursor: pointer;
  transition: transform 0.3s ease-in-out;

  ${({ theme }) => theme.mq.preDesktop} {
    height: 50rem;
  }

  :hover {
    transform: scale(1.05);
  }
`;

const StyledListItem = styled.li`
  width: 100%;
  border-bottom: 1px solid ${({ theme }) => theme.color.midGrey};
  margin-bottom: 5rem;

  ${({ theme }) => theme.mq.preDesktop} {
    max-width: calc(33% - 8rem);
    margin: 0 4rem 5rem;
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

const StyledLink = styled(Link)`
  text-decoration: none;
`;

const ProductsListTemplate = ({ dataList }) => {
  const [inputValue, setInputValue] = useState('');

  const handleInputChange = e => setInputValue(e.target.value.toLowerCase());

  const filterItems = (inputValue, item) => {
    return item.includes(inputValue);
  };

  return (
    <StyledWrapper>
      <StyledSearchProductsWrapper>
        <SearchProducts onChange={handleInputChange} value={inputValue} />
      </StyledSearchProductsWrapper>
      <StyledListWrapper data-sal="fade" data-sal-duration="1000">
        {dataList
          .filter(item =>
            filterItems(inputValue, item.node.frontmatter.title.toLowerCase())
          )
          .map(image => (
            <StyledListItem key={image.node.frontmatter.featuredImage.id}>
              <StyledLink to={image.node.fields.slug}>
                <StyledImg
                  fluid={
                    image.node.frontmatter.featuredImage.childImageSharp.fluid
                  }
                />
                <StyledTitle>{image.node.frontmatter.title}</StyledTitle>
              </StyledLink>
            </StyledListItem>
          ))}
      </StyledListWrapper>
    </StyledWrapper>
  );
};

ProductsListTemplate.propTypes = {
  dataList: PropTypes.arrayOf(PropTypes.shape).isRequired,
};

export default ProductsListTemplate;
