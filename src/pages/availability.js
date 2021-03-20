import React from "react"
import Footer from "../components/Footer"
import NavigationHeader from '../components/NavigationHeader'
import Calendar from "../components/Calendar"
import Availability from "../components/Availability"
 
const AvailabilityPage = () => (
  <main>
    <NavigationHeader activeTab="Availability"/>
    <Availability/>
    <Calendar/>
    <Footer activeTab = "Availability"/>
  </main>
)
 
export default AvailabilityPage