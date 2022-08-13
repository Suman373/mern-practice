import React from "react";
import { useSelector} from 'react-redux';
import {Container , Typography} from '@material-ui/core';
import Post from './Post/Post.jsx';
import useStyles from  './PostsStyle';
import {LinearProgress} from '@material-ui/core';


const Posts = ({setCurrentId})=>{
    // class for styling objects
    const classes = useStyles();


    // init hook for fetching data from global redux store
    const posts = useSelector((state)=> state.posts);

    // console.log(posts);
    
    return(
        <>
        <Typography
        className={classes.titleStyle}>
           <h3 id="posts">See the latest posts</h3>
        </Typography>
        {!posts.length ? <LinearProgress/>
        :
        <Container className={classes.postsContainer}>
        {
            posts.map((post)=> (
                <div key={post._id}>
                    <Post setCurrentId={setCurrentId} post={post}/>
                </div>
            ))
        }
        </Container>
        }
       </>
    )
}

export default Posts;