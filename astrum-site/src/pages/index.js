import React from 'react';
import { client } from '@/lib/client';
import { Product, FooterBanner, HeroBanner } from '@/components';

const Home = () => {
  return (
    <div>
      <HeroBanner />


      <div className="products-heading">
        <h2>Best Selling Crystals</h2>
        <p>Beauties of many variations</p>
      </div>

      <div className="products-container">
        {['Product 1', 'Product 2', 'Product 3'].map((product) => product)}
      </div>

      <FooterBanner />

    </div>
  );
}

export const getServerSideProps = async () => {
  const products = await client.fetch('*[_type == "product"]');
  return {
    props: {
      products,
    },
  };
};

export default Home;