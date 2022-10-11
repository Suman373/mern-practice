import React, {useState} from "react";
import useStyles from './NavbarStyle'; // makeStyles
import { Typography } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Button from '../Buttons/Button';
import {RiMenu5Fill} from 'react-icons/ri';
import './Navbar.css';

const Navbar=()=>{
    // classes for style objs
    const classes = useStyles();

    const [hamburgerOpen , setHamburgerOpen] = useState(false);

    const handleToggle=(e)=>{
        e.preventDefault();
        setHamburgerOpen(!hamburgerOpen);
    }
    // resize event
    let width;
    window.addEventListener("resize",()=>{
        // to prevent the menu collapse due to media query 
        width = window.innerWidth;
        width < 600 ? setHamburgerOpen(false) : setHamburgerOpen(true);
    })

    return(
        <nav 
        className="navBarStyle">
            <Typography 
            className={classes.title}
            variant='h2'
            align="left">
                Plogify
            </Typography>

            <div  className={!hamburgerOpen ? "menuContainer" : "menuContainer open"}>
         
                <Link to={'/checkPosts'}>Posts</Link>
                <Link to={'/about'}>About</Link>
                <Link to={'/contact'}>Contact Us</Link>
                
                {/* sign in / login*/}
                <Link to={'/register'}>
                    <Button
                     text={'Sign in'}/>
                </Link>
            </div>
            <button 
               className="toggleButton"
               onClick={(e)=> {
                   handleToggle(e)
               }}>
                <RiMenu5Fill/>
            </button> 
        </nav>
    );
}

export default Navbar;