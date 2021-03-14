import React from "react"

import styles from './style.module.css'

import { Bounce } from "react-awesome-reveal";
import { Slide } from "react-awesome-reveal";

const Location = () => (
    <nav>
        <Bounce  triggerOnce={true} delay={600}>
            <h2 className={styles.locationTitle}>Location</h2>
        </Bounce> 
        <div className={styles.mapResponsive}>
        <iframe className={styles.map} src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d11686.976429150827!2d16.715967!3d42.9204375!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x134a720c5f6330cf%3A0x810796f65a20ec98!2sAndriji%C4%87%20House!5e0!3m2!1shr!2shr!4v1613756560386!5m2!1shr!2shr" frameborder="0" allowfullscreen="" aria-hidden="false" tabindex="0" ></iframe>
        </div>
        <div className={styles.location}>
        <Slide triggerOnce={true} delay={200}>
        <a href="https://www.google.com/maps/dir//Andriji%C4%87+House/data=!4m8!4m7!1m0!1m5!1m1!1s0x134a720c5f6330cf:0x810796f65a20ec98!2m2!1d16.715859899999998!2d42.920234199999996" target = "_blank" rel = "noopener noreferrer">
            <button className={styles.getDirectionsBtn}>GET DIRECTIONS</button>
        </a>
        </Slide>
        </div>
    </nav>
)
 
export default Location