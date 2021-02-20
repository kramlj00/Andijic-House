import React from 'react'
 
import styles from './style.module.css'

import { Bounce } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";


const RoomsTitle = () => (
    <nav>
        <Bounce triggerOnce={true}>
            <h2 className={styles.roomsTitle}>Rooms</h2>
            <h3 className={styles.roomsSubtitle}>Here you can see the interior of the house.</h3>
        </Bounce>
    </nav>
)
 
export default RoomsTitle