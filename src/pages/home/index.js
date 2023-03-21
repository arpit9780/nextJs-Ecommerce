import React from 'react'
import Features from '../features'
import Products from './AllProducts'
import CarouselFile from './CarouselFile'
import Vendor from './Vendor'

const Home = () => {

  return (
    <>
      <CarouselFile />
      <Products />
      <Features />
      <Vendor />
    </>
  )
}

export default Home