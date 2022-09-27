import React from "react";
import { useState, useEffect } from "react";
import useStyles from './ContactStyle';
import './Contact.css';
import Image from '../assets/formimage.png';
import Footer from "../components/Footer/Footer";

const Contact = ()=>{
    // style objs
    const classes = useStyles();

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');
    
    const handleSubmit=(e)=>{
        e.preventDefault();
        console.log('submit');
    }
    
    return(
        <>
            <div className={classes.wrapper}>
            <div className={classes.imgContainer}>
                <img className={classes.formImage} src={Image} alt="cartoon picture of form"/>
            </div>
          <section className={classes.formWrapper}>
            <h1 className={classes.formTitle}>Help us become better</h1>
          <form className="contact-form" onSubmit={handleSubmit}>
                <label htmlFor="name">
                    Name
                </label>
                <input type="text" required />

                <label htmlFor="email">
                    Email
                </label>
                <input type="email"  required/>

                <label htmlFor="textarea">
                    Text
                </label>
                <textarea id="textarea"  required></textarea>

                <button
                    className="submit-btn"
                    type="submit"
                    >
                    Submit
                </button>
            </form>
          </section>
        </div>
        <Footer/>
        </>
    )
}

export default Contact;