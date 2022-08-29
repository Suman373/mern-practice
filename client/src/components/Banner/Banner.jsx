import React from "react";
import { Container, Typography } from '@material-ui/core';
import useStyles from './BannerStyle';
import './Banner.css';
import Button from '../Buttons/Button';
import { useNavigate } from 'react-router-dom';

const Banner = () => {
    // class for style objs
    const classes = useStyles();

    // navigation
    const navigate = useNavigate();

    const checkPosts = (e) => {
        e.preventDefault();
        navigate('/checkPosts');
    }

    const redirectContact=(e)=>{
        e.preventDefault();
        navigate('/contact');
    }

    return (
        <>
            <div id="home" className={classes.imageContainer}>
                <div className={classes.leftAbstract}></div>
                <div className={classes.rightAbstract}></div>
                <Container>
                    <div className={classes.bannerTitle}
                        id="banner-text-clip">
                        Share the good things in life
                    </div>
                    <Typography className={classes.caption}>
                        The easiest way to get started with plogs and let everyone see your passion for plogs
                    </Typography>
                    <Button
                        onClick={(e) => checkPosts(e)}
                        text={'Explore'}
                    />
                    <Button
                        style={{
                            color:'blue',
                            background:'transparent',
                            border:'1px solid blue'
                        }}
                        onClick={(e) => redirectContact(e)}
                        text={'Get in touch'}
                    />
                </Container>
            </div>
        </>
    )
}


export default Banner;