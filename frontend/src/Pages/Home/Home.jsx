import React from 'react'
import Hero from '../../Component/Hero/Hero'
import AboutForHome from '../../Component/About/AboutForHome'
import WhyChooseUs from '../../Component/Why_Choose_Us/WhyChooseUs'
import Testimonials from '../../Component/Testimonials/Testiminols'
import FarePricing from '../../Component/FarePricing/FarePricing'
import BookingTariff from '../../Component/Booking_Turiff/BookingTariff'
import FloatingIcons from './FloatingIcons'

const Home = () => {
  return (
    <>
    <FloatingIcons/>
      <Hero/>
      <AboutForHome/>
      <WhyChooseUs/>
      <FarePricing/>
      <Testimonials/>
      <BookingTariff/>
    </>
  )
}

export default Home
