import React from 'react'
 
import styles from './style.module.css'

import { Fade } from "react-awesome-reveal";

import i1 from '../../images/faceLogo.png'
import i2 from '../../images/emailLogo1.png'

import * as emailjs from "emailjs-com"
import { Component } from 'react';

export class Contact extends Component {
   constructor(props){
       super(props);
       this.state = {
           name: "",
           email: "",
           phone: "",
           message: "",
       };
       this.handleChange = this.handleChange.bind(this);
       this.handleSubmit = this.handleSubmit.bind(this);
   } 

   handleChange = (e) => {
       this.setState({ [e.target.name]: e.target.value });
   }

   handleSubmit = (e) => {
       e.preventDefault();
       alert(`Your message has been sent.`);
       emailjs
            .sendForm(
                "gmail",
                "andrijic_template",
                ".contact_form_class",
                "user_WyUsL4LATHKR4cXzNR4BM"
            )
            .then()
            .catch();
        this.setState({
            name: "",
            email: "",
            phone: "",
            message: "",
        });
   };

   render(){
       return(
            <Fade triggerOnce={true} delay={300}>
                <main className={styles.contactForm}>
                    <section className={styles.contactInfo}>
                        <h2>CONTACT</h2>
                        <p></p>
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

                        <section className={styles.socialNetw} >
                            <a href="https://www.facebook.com/ApartmanAndrijic/">
                                <img src={i1} alt="faceLogo" className={styles.faceLogo}></img>
                            </a>
                            <a href="https://accounts.google.com/ServiceLogin/signinchooser?service=mail&passive=true&rm=false&continue=https%3A%2F%2Fmail.google.com%2Fmail%2F&ss=1&scc=1&ltmpl=default&ltmplcache=2&emr=1&osid=1&flowName=GlifWebSignIn&flowEntry=ServiceLogin">
                                <img src={i2} alt="emailLogo" className={styles.emailLogo}></img>
                            </a>
                        </section>
                    </section>
                    
                    <section className={styles.form}>
                        <h2 className={styles.title}>CONTACT FORM</h2>
                        <form onSubmit={this.handleSubmit.bind(this)} className="contact_form_class">
                            <div>
                                <label htmlFor="name">Name</label>
                                <input 
                                    name="name" 
                                    type="text" 
                                    id="name"
                                    placeholder="Enter Name"
                                    required
                                    value = {this.state.name}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div>
                                <label htmlFor="email">Email</label>
                                <input 
                                    name="email" 
                                    type="email"
                                    id="email"
                                    placeholder="Enter Email"
                                    required
                                    value = {this.state.email}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div>
                                <label htmlFor="phone">Phone Number</label>
                                <input 
                                    name="phone" 
                                    type="phone"
                                    id="phone"
                                    placeholder="Enter Phone Number"
                                    value = {this.state.phone}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <div className={styles.message}>
                                <label className={styles.message_label} htmlFor="message">Message</label>
                                <textarea 
                                    name="message" 
                                    type="text" 
                                    id="message"
                                    placeholder="Enter Your Message Here"
                                    required
                                    value = {this.state.message}
                                    onChange={this.handleChange.bind(this)}
                                />
                            </div>
                            <input type="submit" className={styles.submitBtn}></input>
                        </form>
                    </section>
                </main>
            </Fade>
       );
   }
}

export default Contact;