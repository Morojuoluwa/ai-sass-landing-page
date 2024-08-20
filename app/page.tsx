import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import { Pricing } from '@/components/Pricing'
import ProductShowcase from '@/components/ProductShowcase'
import React from 'react'

const  Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <ProductShowcase/>
      <Pricing/>
    </>
  )
}

export default Home 