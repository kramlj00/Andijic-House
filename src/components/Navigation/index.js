import React from 'react'
import ComboBox from '../ComboBox'
 
import NavigationBar from '../NavigationBar'
import styles from './style.module.css'
 
const Navigation = ({ activeTab }) => (
    <section className={styles.navigation}>
        <NavigationBar activeTab={activeTab} />
         <ComboBox/>
    </section>
)
 
export default Navigation