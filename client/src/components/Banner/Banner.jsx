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
            <section id="home" className={classes.imageContainer}>
                <Container>
                    <div className={classes.bannerTitle}
                        id="banner-text-clip">
                        Life is short. Capture every moment
                    </div>
                    <Typography className={classes.caption}>
                        Join us to showcase your photography skills and share with the world.
                    </Typography>
                    <Button
                        style={{
                            color:'var(--pink)',
                            background:'white',
                            border:'1px solid var(--pink)'
                        }}
                        onClick={(e) => checkPosts(e)}
                        text={'Explore'}
                    />
                    <Button
                        style={{
                            color:'white',
                            background:'transparent',
                            border:'1px solid white'
                        }}
                        onClick={(e) => redirectContact(e)}
                        text={'Create account'}
                    />
                </Container>
                
            </section>
        </>
    )
}


export default Banner;