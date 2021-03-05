import React from "react"
import Footer from "../components/Footer"
import NavigationHeader from '../components/NavigationHeader'
import Contact from "../components/Contact"
import ContactTitle from "../components/ContactTitle"
 
const ContactPage = () => (
  <main>
    <NavigationHeader activeTab="Contact"/>
    <ContactTitle/>
    <Contact/>
    <Footer activeTab = "Contact"/>
  </main>
)
 
export default ContactPage