import React from "react";
import {Typography , Container, CardMedia} from '@material-ui/core';
import {AiOutlineDelete,AiFillHeart} from 'react-icons/ai';
import {BiComment,BiEdit} from 'react-icons/bi';
import {FaShare} from 'react-icons/fa';
import moment from 'moment';
import useStyles from './PostStyle';
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../../actions/posts';

const Post=({post, setCurrentId})=>{
    // class for fetching styling objects
    const classes = useStyles();

    // dispatching actions
    const dispatch = useDispatch();

    //delete post
    const handleDelete=(e)=>{
        e.preventDefault();
        dispatch(deletePost(post._id));
        // console.log(post._id);
    }

    //like post
    const handleLike=(e)=>{
        e.preventDefault();
        dispatch(likePost(post._id));
    }

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

            <button
            onClick={()=> {
                window.scrollTo(0,0);
                setCurrentId(post._id)
            }}
            className={classes.edit}>
                <BiEdit/>
            </button>

            <Typography className={classes.postTitle}>
                {post.title}
            </Typography>
               
            <Typography className={classes.postTitle}>
                 {moment(post.createdAt).fromNow()}
            </Typography>

            <Typography className={classes.descriptionPara}>
               {post.description} 
            </Typography>

            <Typography className={classes.postTitle}>
                {post.tags.map((tag)=> `#${tag} `)}
            </Typography>
           </div>
           <div className={classes.actionsContainer}>
                <button 
                onClick={(e)=> handleLike(e)}>
                    <AiFillHeart style={post.likeCount>0 ? {color:'red'} : ''}/>
                    <p style={{fontSize:'1rem', margin:'4px'}}>{post.likeCount} likes</p>
                </button>
                <button>
                    <BiComment style={{color:'blue'}} />
                </button>
                <button>
                    <FaShare style={{color:'green'}}/>
               </button>
               <button 
                onClick={(e)=> handleDelete(e)}>
                    <AiOutlineDelete style={{color:'yellow'}}/>
                </button>
            </div>
        </Container>
    )
}

export default Post;