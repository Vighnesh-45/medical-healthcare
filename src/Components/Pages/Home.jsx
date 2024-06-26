import React, { useEffect } from 'react';
import TopContainer from '../TopContainer';
import Category from '../Category';
import Spotlight from '../Spotlight';
import Trending from '../Trending';
import Footer from '../Layout/Footer';

const Home = ({ addToCart }) => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <>
      <TopContainer />
      <Category />
      <Spotlight />
      <Trending />
      <Footer />
    </>
  );
};

export default Home;
