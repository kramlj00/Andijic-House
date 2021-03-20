import React, { useState } from "react"
import Footer from "../components/Footer"
import Rooms from "../components/Rooms"
import NavigationHeader from '../components/NavigationHeader'
import RoomsTitle from "../components/RoomsTitle"
import Modal from "../components/Modal"
 
function RoomsPage() {
  const [selectedImage, setSelectedImage] = useState(null);

  return(
    <main>
      <NavigationHeader activeTab="Interior"/>
      <RoomsTitle/>
      <Rooms setSelectedImage={setSelectedImage}/>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
      <Footer activeTab = "Interior"/>
    </main>
  )
}
 
export default RoomsPage