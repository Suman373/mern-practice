import React from "react";
import { useSelector} from 'react-redux';
import {Container , Typography} from '@material-ui/core';
import Post from './Post/Post.jsx';
import {LinearProgress} from '@material-ui/core';


const Posts = ({setCurrentId})=>{
    // init hook for fetching data from global redux store
    const posts = useSelector((state)=> state.posts);

    return(
        <div className="posts-container-wrapper">
            <h1>Trending arts from awesome artists</h1>
        </div>
    )
}

export default Posts;