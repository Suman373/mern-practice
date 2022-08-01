import React from "react";
import {Container , Typography} from '@material-ui/core';
import Post from './Post/Post.jsx';
import useStyles from  './styles/PostsStyle';

const Posts = ()=>{
    // class for styling objects
    const classes = useStyles();
    return(
       <>
        <Typography
        className={classes.titleStyle}>
            See the latest posts
        </Typography>
        <Container className={classes.postsContainer}>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
            <Post/>
        </Container>
        </>
    )
}

export default Posts;