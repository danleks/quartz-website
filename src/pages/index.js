import React from 'react';
import MainTemplate from 'templates/MainTemplate/MainTemplate';
import HeroTemplate from 'templates/HeroTemplate/HeroTemplate';
import AboutTemplate from 'templates/AboutTemplate/AboutTemplate';
import WhyOurProductsTemplate from 'templates/WhyOurProductsTemplate/WhyOurProductsTemplate';
import ServicesTemplate from 'templates/ServicesTemplate/ServicesTemplate';
// import Header from 'components/Header/Header';

const IndexPage = () => (
  <div>
    <MainTemplate>
      {/* <Header /> */}
      <HeroTemplate />
      <ServicesTemplate />
      <AboutTemplate />
      <WhyOurProductsTemplate />
    </MainTemplate>
  </div>
);

export default IndexPage;
