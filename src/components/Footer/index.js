import React from 'react'
  import styles from './style.module.css'
 
  import NavigationBar from '../NavigationBar'
 
  const Footer = () => (
    <footer className={styles.footer}>
        <ul className={styles.address}>
            <li className={styles.title}>
                Andrijić House
            </li>
                <li className={styles.houseAddress}>Zaglav 27</li>
                <li className={styles.houseAddress}>20271 Blato </li>
                <li className={styles.houseAddress}>Croatia</li>
            <li className={styles.phone}>
                +385 098 181 6135
            </li>
        </ul>
        <NavigationBar useThisStyle = "footer"/>
    </footer>
  )
 
  export default Footer