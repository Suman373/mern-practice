import React from "react";
import Flowers from './postAssets/Flowers.jpeg';
import {Typography , Container} from '@material-ui/core';
import useStyles from './PostStyle';

const Post=()=>{
    // class for fetching styling objects
    const classes = useStyles();
    return(
        <Container className={classes.postContainer}>

            <Typography className={classes.username}>
                Random name
            </Typography>

            <Typography className={classes.description}>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsum atque quibusdam ad magni quod veniam. 
            </Typography>

            <img 
            className={classes.postImage} 
            src={Flowers} 
            alt="flower pic" />
            
        </Container>
    )
}

export default Post;