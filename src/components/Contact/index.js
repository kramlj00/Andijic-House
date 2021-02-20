import React from 'react'
 
import styles from './style.module.css'
import contactImg from '../../images/contactImg.jpg'

import { Bounce } from "react-awesome-reveal";
import { Fade } from "react-awesome-reveal";

import i1 from '../../images/faceLogo.png'
import i2 from '../../images/emailLogo1.png'

const Contact = () => (
    <nav>
        <img src={contactImg} alt="contact_img" className={styles.contactImg}></img>
        <Bounce triggerOnce={true}>
            <h2 className={styles.contactTitle}>Contact</h2>
            <h3 className={styles.contactSubtitle}>Sve informacije o nama možete dobiti putem maila, broja telefona i naših društvenih mreža.</h3>
        </Bounce>

        <Fade triggerOnce={true} delay={300}>
            <section className={styles.contactInfo}>
                <h3>ADDRESS</h3>
                <p></p>
                <p>Zaglav 27 20271 Blato Croatia</p>
                <br></br>
                <p></p>
                <h3>PHONE NUMBER (Tonči Andrijić)</h3>
                <p></p>
                <p>+385 098 181 6135</p>
                <br></br>
                <p></p>
                <h3>PHONE NUMBER (Ivana Ramljak Andrijić)</h3>
                <p></p>
                <p>+385 095 913 8285</p>
                <br></br>
                <h3>EMAIL</h3>
                <p></p>
                <p>tonci.andrijic@gmail.com</p>
            </section>
            <section className={styles.socialNetw} >
                <a href="https://www.facebook.com/ApartmanAndrijic/">
                    <img src={i1} alt="faceLogo" className={styles.faceLogo}></img>
                </a>
                <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                    <img src={i2} alt="emailLogo" className={styles.emailLogo}></img>
                </a>
            </section>
        </Fade>
    </nav>
)
 
export default Contact