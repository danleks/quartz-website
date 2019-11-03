import React from 'react';
import PropTypes from 'prop-types';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import ProductsIntrotemplate from 'templates/ProductsIntroTemplate/ProductsIntroTemplate';
import ProductsListTemplate from 'templates/ProductsListTemplate/ProductsListTemplate';

const ProductsPage = ({ location: { pathname } }) => {
  return (
    <MainTemplate pathname={pathname}>
      <ProductsIntrotemplate />
      <ProductsListTemplate />
    </MainTemplate>
  );
};

(ProductsPage.propTypes = {
  location: PropTypes.objectOf(PropTypes.shape).isRequired,
  pathname: PropTypes.string,
}),
  (ProductsPage.defaultProps = {
    pathname: '/produkty/',
  });

export default ProductsPage;
