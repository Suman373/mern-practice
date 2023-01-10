import React from "react";
import {AiOutlineDelete,AiFillHeart} from 'react-icons/ai';
import {BiComment,BiEdit} from 'react-icons/bi';
import {FaShare} from 'react-icons/fa';
import moment from 'moment';
import {useDispatch} from 'react-redux';
import {deletePost, likePost} from '../../../actions/posts';

const Post=({post, setCurrentId})=>{

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
        <div className="post-wrapper">

        </div>
    )
}

export default Post;