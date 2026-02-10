import React from 'react';
import Hero from '../components/Hero';
import NewArrivals from '../components/NewArrivals';
import CategoryGrid from '../components/CategoryGrid';
import Newsletter from '../components/Newsletter';

const Home: React.FC = () => {
  return (
    <>
      <Hero />
      <NewArrivals />
      <CategoryGrid />
      <Newsletter />
    </>
  );
};

export default Home;