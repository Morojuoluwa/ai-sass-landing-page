import CallToAction from '@/components/CallToAction'
import Header from '@/components/Header'
import Hero from '@/components/Hero'
import LogoTicker from '@/components/LogoTicker'
import { Pricing } from '@/components/Pricing'
import ProductShowcase from '@/components/ProductShowcase'
import Testimonials from '@/components/Testimonials'

const  Home = () => {
  return (
    <>
      <Header/>
      <Hero/>
      <LogoTicker/>
      <ProductShowcase/>
      <Pricing/>
      <Testimonials/>
      <CallToAction/>
    </>
  )
}

export default Home 