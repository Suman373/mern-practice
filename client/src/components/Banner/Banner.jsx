import React from "react";
import './Banner.css';
import heroImg from './assets/hero-img.png';

const Banner = () => {

    return (
        <div className="banner-wrapper">
        <div className="banner-text">
                <h1>Ignite the inner artist in you</h1>
                <p>Get started with showcasing your digital arts in this platform with a click of a button. Inspire thousands with your talent</p>
                <div className="btn-container">
                    <button>Get started</button>
                    <button>Sign up</button>
                </div>
        </div>
        <div className="banner-img">
            <img src={heroImg} alt="Hero illustration" />
        </div>
        </div>
    )
}


export default Banner;