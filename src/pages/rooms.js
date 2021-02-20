import React from "react"
import Footer from "../components/Footer"
import Rooms from "../components/Rooms"
import NavigationHeader from '../components/NavigationHeader'
import RoomsTitle from "../components/RoomsTitle"
 
const RoomsPage = () => (
  <main>
    <NavigationHeader activeTab="Rooms"/>
    <RoomsTitle/>
    <Rooms/>
    <Footer activeTab = "Rooms"/>
  </main>
)
 
export default RoomsPage