import React from "react"
import Footer from "../components/Footer"
import Exterior from "../components/Exterior"
import NavigationHeader from '../components/NavigationHeader'
import ExteriorTitle from "../components/ExteriorTitle"
 
const ExteriorPage = () => (
  <main>
    <NavigationHeader activeTab="Exterior"/>
    <ExteriorTitle/>
    <Exterior/>
    <Footer activeTab = "Exterior"/>
  </main>
)
 
export default ExteriorPage