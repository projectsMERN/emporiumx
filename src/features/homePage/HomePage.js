
import React from 'react'
import NavbarHome from './NavbarHome'
import HeroSection from './HeroSection'
import FeatureSection from './FeatureSection'
import Workflow from './Workflow'
import Testimonials from './Testimonials'
import FooterHomePage from './FooterHomePage'

const HomePage = () => {
  return (
    <>
    {/* backgroundColor:"#220043" */}
    <div style={{ backgroundColor:"#220043" }}>
      <NavbarHome />
      <div className="max-w-7xl mx-auto pt-20 px-6">
        <HeroSection />
        <Workflow />
        <FeatureSection />
        {/* <Testimonials />   */}
        <FooterHomePage />
      </div>
    </div>
    </>
  )
}

export default HomePage
