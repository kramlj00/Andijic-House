import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Carousel from '../components/Carousel'
import AboutUs from '../components/AboutUs'
import Location from '../components/Location'
import Footer from '../components/Footer'

const IndexPage = () => (
  <main>
    <NavigationHeader activeTab = "Home"/>
    <Carousel/>
    <AboutUs/>
    <Location/>
    <Footer/>
  </main>
)

export default IndexPage