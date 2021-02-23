import React, { useState } from "react"
import Footer from "../components/Footer"
import Exterior from "../components/Exterior"
import NavigationHeader from '../components/NavigationHeader'
import ExteriorTitle from "../components/ExteriorTitle"
import Modal from "../components/Modal" 

function ExteriorPage () {
  const [selectedImage, setSelectedImage] = useState(null);

  return (
    <main>
      <NavigationHeader activeTab="Exterior"/>
      <ExteriorTitle/>
      <Exterior setSelectedImage={setSelectedImage}/>
      {selectedImage && <Modal selectedImage={selectedImage} setSelectedImage={setSelectedImage}/>}
      <Footer activeTab = "Exterior"/>
    </main>
  )
}
 
export default ExteriorPage