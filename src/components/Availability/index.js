import React from 'react'
 
import styles from './style.module.css'

import calImg from '../../images/calImg.jpg'
import { Bounce } from "react-awesome-reveal";


const Availability = () => (
    <nav>
        <img src={calImg} alt="calImg" className={styles.calImg}></img>
    </nav>
)
 
export default Availability