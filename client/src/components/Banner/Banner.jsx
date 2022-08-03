import React from "react";
import {Container,Typography} from '@material-ui/core';
import useStyles from './BannerStyle';


const Banner = () =>{
    // class for style objs
    const classes =  useStyles();


    return(
        <div className={classes.imageContainer}>
            <Container>
            <h1 className={classes.bannerTitle}>Where thoughts meet, Souvenir retreats!</h1>
            <Typography className={classes.caption}>Lorem ipsum dolor sit amet consectetur adipisicing elit. Ipsam nobis itaque consequatur eius tempore expedita? </Typography>
            </Container>
        </div>
    )
}


export default Banner;