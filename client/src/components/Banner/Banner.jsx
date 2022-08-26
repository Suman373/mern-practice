import React from "react";
import {Container,Typography} from '@material-ui/core';
import useStyles from './BannerStyle';
import Button from '../Buttons/Button';
import  {useNavigate} from 'react-router-dom';
import happypic from './assets/happypic.png';

const Banner = () =>{
    // class for style objs
    const classes =  useStyles();

    // navigation
    const navigate = useNavigate();

    const checkPosts=(e)=>{
        e.preventDefault();
        navigate('/checkPosts');
    }
    return(
        <div id="home" className={classes.imageContainer}>
            <Container>
            <div className={classes.bannerTitle}
             id="banner-text-clip">
                Say yes to Plogify
             </div>
            <Typography className={classes.caption}>
                The easiest way to get started with plogs and let everyone see your passion for plogs
            </Typography>
            <Button
            onClick={(e)=>checkPosts(e)}
            text={'Explore'}
          />
            </Container>
        </div>
    )
}


export default Banner;