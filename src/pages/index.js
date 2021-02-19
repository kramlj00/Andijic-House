import React from "react"

import NavigationHeader from '../components/NavigationHeader'
import Carousel from '../components/Carousel'
import Footer from '../components/Footer'

const IndexPage = () => (
  <main>
    <NavigationHeader activeTab = "Home"/>
    <Carousel/>
    <Footer/>
  </main>
)

export default IndexPage