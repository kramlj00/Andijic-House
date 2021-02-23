import React from 'react'
  import styles from './style.module.css'
  import {Link} from "gatsby";
  import { navs as navTabs } from '../../constants/const'
 
  const Footer = ({activeTab}) => (
    <footer className={styles.footer}>
        <ul className={styles.address}>
            <li className={styles.title}>
                Andrijić House
            </li>
                <li className={styles.houseAddress}>Zaglav 27</li>
                <li className={styles.houseAddress}>20271 Blato </li>
            <li className={styles.phone}>
                +385 098 181 6135
            </li>
        </ul>
        <ul className={styles.navigation}>
      {navTabs.map(({tab, to}) => (
          <Link to={to} >
              <li className={tab === activeTab ? styles.active : ''}>{tab}</li>
          </Link>)
        )}
      </ul>
    </footer>
  )
 
  export default Footer