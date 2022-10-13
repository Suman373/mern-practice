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
                        <h2>Help us become better</h2>
                        <p >Share your valuable feedback so that we can improve</p>
                    <form onSubmit={handleSubmit}>
                        <label htmlFor="name">
                            Name
                            <input type="text" required />
                        </label>

                        <label htmlFor="email">
                            Email
                            <input type="email" required />
                        </label>

                        <label htmlFor="textarea">
                            Text
                            <textarea id="textarea" required></textarea>
                        </label>
                    
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