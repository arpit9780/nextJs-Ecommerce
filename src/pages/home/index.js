import React from 'react'
import Features from '../features'
import Products from './AllProducts'
import Carousel from './Carousel'
import Vendor from './Vendor'

const Home = () => {

  return (
    <>
      <Carousel />
      <Products />
      <Features />
      <Vendor />
    </>
  )
}

export default Home