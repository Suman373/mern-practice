import React from "react";
import useStyles from './NavbarStyle'; // makeStyles
import { Typography, Container } from '@material-ui/core';

const Navbar=()=>{
    // classes for style objs
    const classes = useStyles();

    return(
        <navbar 
        className={classes.navBarStyle}
        position="relative">
            <Typography 
            className={classes.title}
            variant='h2'
            align="left">
                Souvenir
            </Typography>
            <Container  className={classes.menuContainer}>
                <a href="">Home</a>
                <a href="#create">Create</a>
                <a href="">Contact</a>
            </Container>
        </navbar>
    );
}

export default Navbar;