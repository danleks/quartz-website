import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate';
import AboutTemplate from 'templates/AboutTemplate/AboutTemplate';
import ScrollDown from 'components/ScrollDown/ScrollDown';
import ProductsOverviewTemplate from 'templates/ProductsOverviewTemplate/ProductsOverviewTemplate';
import ContactTemplate from 'templates/ContactTemplate/ContactTemplate';
import ServicesTemplate from 'templates/ServicesTemplate/ServicesTemplate';

const IndexPage = () => (
  <div>
    <MainTemplate>
      <HeroTemplate />
      <ScrollDown />
      <ServicesTemplate />
      <AboutTemplate />
      <ProductsOverviewTemplate />
      <ContactTemplate />
    </MainTemplate>
  </div>
);

export default IndexPage;
