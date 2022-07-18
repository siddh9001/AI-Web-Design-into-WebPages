import React from 'react'
import Footer from './HomePageComponents/Footer'
import Header from './HomePageComponents/Header'
import HowItWorks from './HomePageComponents/HowItWorks'
import KeepMeUpdated from './HomePageComponents/KeepMeUpdated'
import Landing from './HomePageComponents/Landing'
import ProductServiceDisplay from './HomePageComponents/ProductServiceDisplay'
import ProductValues from './HomePageComponents/ProductValues'


const Home = () => {
  return (
    <>
      {/* <Header/> */}
      <Landing/>
      <ProductValues/>
      <ProductServiceDisplay/>
      <HowItWorks/>
      <KeepMeUpdated/>
      <Footer/>  
    </>
  )
}

export default Home
