import React from 'react'
import Navbar from '../Layout/Navbar'
import TopContainer from '../TopContainer'
import Spotlight from '../Spotlight'
import Trending from '../Trending'
import Footer from '../Layout/Footer'

const Home = () => {
  return (
   <>
   <Navbar/>
   <TopContainer/>
   <Spotlight/>
   <Trending/>
   <Footer/>
   </>
  )
}

export default Home