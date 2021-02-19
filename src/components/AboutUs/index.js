import React from "react"

import styles from './style.module.css'

import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const AboutUs = () => (
    <nav>
        <Bounce  triggerOnce={true}>
            <h2 className={styles.aboutUsTitle}>About us</h2>
        </Bounce> 
        <Slide  triggerOnce={true} delay={700}>
            <p className={styles.aboutUsText}>
                Vacation House  for 4 persons in place Zaglav/Karbuni Blato
                House has fully equipped kitchen, living room, bathroom, two bedrooms and big covered terrace.
                <br></br>Guests can use private barbecue, canoe and rent a boat.
                <br></br>House is in the first row near sea and has private beach with beach umbrella, deck chairs and outdoor shower.
                <br></br>Gravel public beach is 150 m from house.
                <br></br>Private parking for 3 cars and free WiFi are available for our guests.    
            </p>
        </Slide>
    </nav>
)
 
export default AboutUs