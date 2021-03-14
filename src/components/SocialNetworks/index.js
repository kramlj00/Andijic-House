import React from "react"

import styles from './style.module.css'

import i1 from '../../images/faceLogo.png'
import i2 from '../../images/emailLogo1.png'

const SocialNetworks = () => (
    <section className={styles.socialNetw} >
        <a href="https://www.facebook.com/ApartmanAndrijic/" target = "_blank" rel = "noopener noreferrer">
            <img src={i1} alt="faceLogo" className={styles.faceLogo} height="50px"></img>
        </a>
        <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin" target = "_blank" rel = "noopener noreferrer">
            <img src={i2} alt="emailLogo" className={styles.emailLogo} height="52px"></img>
        </a>
    </section>
)
 
export default SocialNetworks