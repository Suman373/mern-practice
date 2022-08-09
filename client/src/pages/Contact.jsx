import React from "react";
import { useState, useEffect } from "react";
import useStyles from './ContactStyle';

const Contact = ()=>{
    // style objs
    const classes = useStyles();

    const [name , setName] = useState('');
    const [email , setEmail] = useState('');

    
    return(
        <div className={classes.wrapper}>
           <form>
            <label>
                Name
            </label>
            </form>
        </div>
    )
}

export default Contact;