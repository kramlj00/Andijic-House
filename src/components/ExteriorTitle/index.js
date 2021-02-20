import React from 'react'
 
import styles from './style.module.css'

import { Bounce } from "react-awesome-reveal";


const RoomsTitle = () => (
    <nav>
        <Bounce triggerOnce={true}>
            <h2 className={styles.exteriorTitle}>Exterior</h2>
            <h3 className={styles.exteriorSubtitle}>Here you can see the exterior of the house.</h3>
        </Bounce>
    </nav>
)
 
export default RoomsTitle