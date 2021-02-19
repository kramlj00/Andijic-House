import React from 'react'

import styles from './style.module.css'

const NavigationBar = () => (
  <nav className={styles.navigationBar}>
      <li className={styles.active}>Home</li>
      <li>Rooms</li>
      <li>Exterior</li>
      <li>Contact</li>
  </nav>
)

export default NavigationBar