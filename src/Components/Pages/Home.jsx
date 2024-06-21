import React from 'react'
import Navbar from '../Layout/Navbar'
import TopContainer from '../TopContainer'
import Category from '../Category'
import Spotlight from '../Spotlight'
import Trending from '../Trending'
import Footer from '../Layout/Footer'

const Home = ({addToCart}) => {
  console.log(addToCart)
  return (
    <>
      {/* <Navbar addToCart={addToCart}/> */}
      <TopContainer />
      <Category />
      <Spotlight />
      <Trending/>
      <Footer />
    </>
  )
}

export default Home