import React from 'react'
 
import NavigationBar from '../NavigationBar'
import styles from './style.module.css'

import { useMediaQuery } from 'react-responsive'
import MobileNavBar from '../MobileNavBar'
 
const Navigation = ({ activeTab }) => {
    const isMobile = useMediaQuery({query: '(max-device-width: 800px)'})

    return (
        <section className={styles.navigation}>
            {isMobile
                ? <MobileNavBar activeTab={activeTab}/>
                : <NavigationBar activeTab={activeTab} />
            }
        </section>
    )
}
 
export default Navigation