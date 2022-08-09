import React from "react";
import {Typography , Container, CardMedia} from '@material-ui/core';
import {BsHeart,BsBookmark} from 'react-icons/bs';
import {BiComment} from 'react-icons/bi';
import {FaShare} from 'react-icons/fa';
import moment from 'moment';
import useStyles from './PostStyle';

const Post=({post})=>{
    // class for fetching styling objects
    const classes = useStyles();
    return(
        <Container className={classes.postContainer}>
           
            <CardMedia
             className={classes.mediaCard} 
             image={post.selectedFile}
             title={post.title} />
            
           <div className={classes.infoContainer}>
           <Typography className={classes.username}>
                {post.creator}
            </Typography>

            <Typography className={classes.postTitle}>
                {post.title}
            </Typography>
               
            <Typography>
                 {moment(post.createdAt).fromNow()}
            </Typography>

            <Typography className={classes.description}>
               {post.description} 
            </Typography>
           </div>
           <div className={classes.actionsContainer}>
                <BsHeart />
                <BiComment/>
                <BsBookmark/>
                <FaShare/>
            </div>
        </Container>
    )
}

export default Post;