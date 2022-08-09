import React, {useState, useEffect} from "react";
import useStyles from './NavbarStyle'; // makeStyles
import { Typography, Container } from '@material-ui/core';
import {Link} from 'react-router-dom';
import Button from '../Buttons/Button';
import './Navbar.css';

const Navbar=()=>{
    // classes for style objs
    const classes = useStyles();

    const [hamburgerOpen , setHamburgerOpen] = useState(false);
    // const [burgerButton, setBurgerButton] = useState(false);

    let screenWidth;
    window.addEventListener('resize',()=>{
        screenWidth = window.innerWidth ;
        // console.log(screenWidth);
        // screenWidth < 600 ? setHamburgerOpen(true) : setHamburgerOpen(false);
    })

    return(
        <nav 
        className="navBarStyle">
            <Typography 
            className={classes.title}
            variant='h2'
            align="left">
                Souvenir
            </Typography>

            <div  className={hamburgerOpen ? "menuContainer open" : "menuContainer"}>
         
                <Link to={'/#home'}>Home</Link>
                <Link to={'/checkPosts'}>Posts</Link>
                <Link to={'#'}>About</Link>
                <Link to={'/contact'}>Contact Us</Link>
                
                {/* sign in / login*/}
                <Link to={'/login'}>
                    <Button
                     style={{fontSize:'1.1rem',padding:'8px'}}
                     text={'Sign in'}/>
                </Link>
            </div>
            <button 
               className="toggleButton"
               onClick={()=> setHamburgerOpen(!hamburgerOpen)}>
                X
            </button> 
        </nav>
    );
}

export default Navbar;