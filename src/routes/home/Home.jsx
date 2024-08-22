import React from 'react';
import Hero from '../../components/hero/Hero';
import Navs from '../../components/Navs';
import Categories from '../categories/Categories';
import TrendingKicks from '../trending-kicks/TrendingKicks';
import Deals from '../deals/Deals';

const Home = () => {
  return (
    <div>
      <Navs />
      <Hero />
      <Categories />
      <TrendingKicks />
      <Deals />
    </div>
  );
}

export default Home;
