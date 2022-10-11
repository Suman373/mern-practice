import React from "react";
import { useState } from "react";
import useStyles from './ContactStyle';
import './Contact.css';
import Image from '../../assets/formimage.png';
import Footer from '../../components/Footer/Footer';
import Navbar from "../../components/Navbar/Navbar";

const Contact = () => {
    // style objs
    const classes = useStyles();

    const [name, setName] = useState('');
    const [email, setEmail] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('submit');
    }

    return (
        <>
            <Navbar />
            <div className={classes.wrapper}>
                <div className={classes.imgContainer}>
                    <img className={classes.formImage} src={Image} alt="cartoon picture of form" />
                </div>
                <section className={classes.formWrapper}>
                        <h1 className={classes.formTitle}>Help us become better</h1>
                        <p className={classes.formPara}>Share your valuable feedback so that we can improve</p>
                    <form className="contact-form" onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            Name
                        </label>
                        <input type="text" required />

                        <label htmlFor="email">
                            Email
                        </label>
                        <input type="email" required />

                        <label htmlFor="textarea">
                            Text
                        </label>
                        <textarea id="textarea" required></textarea>

                        <button
                            className="submit-btn"
                            type="submit"
                        >
                            Submit
                        </button>
                    </form>
                </section>
            </div>
            <Footer />
        </>
    )
}

export default Contact;