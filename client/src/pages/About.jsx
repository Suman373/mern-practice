import React from "react";
import useStyles from './AboutStyle';
import Footer from "../components/Footer/Footer";

const About=()=>{
    // style objs
    const classes = useStyles();
    return(
        <>
        <main className={classes.aboutWrapper}>
            <div className={classes.aboutInfo}>
                <h1 className={classes.heading}>About Plogify</h1>
                <p className={classes.para}>
                    Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ea enim officia animi! Quidem voluptas asperiores tempora explicabo autem. Perferendis, est quia! Sapiente facilis eos dolor delectus, excepturi dolore quis.
                </p>
            </div>
            <div className={classes.feedbackContainer}>
                <div></div>
                <div></div>
                <div></div>
                <div></div>
            </div>
            <Footer/>
        </main>
        </>
    );
}

export default About;