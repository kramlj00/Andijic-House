import React from "react"
import Footer from "../components/Footer"
import NavigationHeader from '../components/NavigationHeader'
import Contact from "../components/Contact"
 
const ContactPage = () => (
  <main>
    <NavigationHeader activeTab="Contact"/>
    <Contact/>
    <Footer activeTab = "Contact"/>
  </main>
)
 
export default ContactPage