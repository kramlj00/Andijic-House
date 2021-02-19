import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Carousel from '../components/Carousel'
import AboutUs from '../components/AboutUs'
import Footer from '../components/Footer'

const IndexPage = () => (
  <main>
    <NavigationHeader activeTab = "Home"/>
    <Carousel/>
    <AboutUs/>
    <Footer/>
  </main>
)

export default IndexPage