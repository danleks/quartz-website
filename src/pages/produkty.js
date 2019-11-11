import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import ProductsIntrotemplate from 'templates/ProductsIntroTemplate/ProductsIntroTemplate';
import ProductsListTemplate from 'templates/ProductsListTemplate/ProductsListTemplate';

import { graphql } from 'gatsby';

const ProductsPage = ({ data }) => {
  const {
    allMarkdownRemark: { edges },
  } = data;

  return (
    <MainTemplate>
      <ProductsIntrotemplate />
      <ProductsListTemplate dataList={edges} />
    </MainTemplate>
  );
};

ProductsPage.propTypes = {
  data: PropTypes.objectOf(PropTypes.shape).isRequired,
};

export const query = graphql`
  query productsQuery {
    allMarkdownRemark {
      edges {
        node {
          html
          excerpt
          frontmatter {
            title
            featuredImage {
              id
              childImageSharp {
                fluid {
                  aspectRatio
                  src
                  srcSet
                  srcWebp
                  srcSetWebp
                  sizes
                  originalImg
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
  }
`;

export default ProductsPage;
