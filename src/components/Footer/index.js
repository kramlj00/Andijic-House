import React from 'react'
  import styles from './style.module.css'
 
  const navTabs = ['Home', 'Rooms', 'Exterior', 'Contact']
 
  const Footer = () => (
    <footer className={styles.footer}>
        <ul className={styles.address}>
            <li className={styles.title}>
                Andrijić House
            </li>
            <li>Zaglav 27</li>
            <li>20271 Blato </li>
            <li>Croatia</li>
            <li className={styles.phone}>
                +385 098 181 6135
            </li>
        </ul>
        <ul className={styles.navigation}>
            {navTabs.map(tab =>
              <li>{tab}</li>)
            }
        </ul>
    </footer>
  )
 
  export default Footer