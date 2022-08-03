import React from "react";
import { useSelector} from 'react-redux';
import {Container , Typography} from '@material-ui/core';
import Post from './Post/Post.jsx';
import useStyles from  './PostsStyle';

const Posts = ()=>{
    // class for styling objects
    const classes = useStyles();

    // init hook for fetching data from global redux store
    const posts = useSelector((state)=> state.posts);

    console.log(posts);
    
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