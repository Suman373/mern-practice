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
            <h1 className={classes.bannerTitle}><span style={{color:'blue'}}>Welcome to </span> Souvenir </h1>
            <Typography className={classes.caption}>The best place to share <span style={{color:'blue'}}>happy moments</span></Typography>
            <Button
            onClick={(e)=>checkPosts(e)}
            text={'Explore'}
          />
            </Container>
            <img className={classes.image} src={happypic} alt="banner-picture"/>
        </div>
    )
}


export default Banner;