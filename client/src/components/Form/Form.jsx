import React from "react";
import { useState, useEffect } from 'react';
import { TextareaAutosize, Container, Typography } from '@material-ui/core';
import Button from "../Buttons/Button";
import useStyles from "./FormStyle";
import {AiFillCloseCircle} from 'react-icons/ai';
import { useDispatch} from 'react-redux';
import {createPost} from '../../actions/posts'

const Form = () => {
    // class for the styling objects
    const classes = useStyles();

    // comp state for having post data
    const [postData, setPostData] = useState({
        creator: '',
        title: '',
        description: '',
        tag: '',
        selectedFiles: '',
    });
    
    // dispatcher
    const dispatch = useDispatch();
    

    // state for create post form
    const [ postForm , setPostForm] = useState(false);
    // state for showing cleared message
    const  [clearMessage , setClearMessage] = useState(false);

    // handling add button
    const handleSubmit = (e) => {
        e.preventDefault();
        dispatch(createPost(postData)); // send postData, to actions then reducer
    }

    // handling form clear
    const handleClear = (e)=>{
        setPostData({});
        console.log(postData);
        setPostForm(false);
    }



    return (
       <>
       <Container id={'create'} className={classes.wrapper}>
         { postForm ? //form open
          <Container
            className={classes.formContainer}>
                <button onClick={()=> setPostForm(!postForm)} className={classes.closeBtnStyle}><AiFillCloseCircle></AiFillCloseCircle></button>
            <Typography className={classes.createPostTitle}>
                Create a new post
            </Typography>

            <input
                type="text"
                className={classes.creator_title_tag_style}
                placeholder={'Name of creator'}
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}>
            </input>

            <input
                type="text"
                className={classes.creator_title_tag_style}
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                placeholder={'Enter the title'}>
            </input>

            <TextareaAutosize
                variant='filled'
                minRows={5}
                maxRows={5}
                className={classes.textFieldStyle}
                value={postData.description}
                onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                placeholder={'Write the description...'}>
            </TextareaAutosize>

            <input
                variant="filled"
                placeholder={'Enter tags'}
                className={classes.creator_title_tag_style}
                value={postData.tag}
                onChange={(e) => setPostData({ ...postData, tag: e.target.value })}>

            </input>

           <div style={{display:'flex', justifyContent:'center'}}>
           <Button children={'Post'} onClick={(e) => handleSubmit(e)} style={{ margin: '1rem' }} />
            <Button children={'Clear'} onClick={(e) => handleClear(e)} style={{ margin: '1rem' }} />
           </div>
        </Container> : 
        // when form is closed
        <>
        <Button
       onClick={()=>{
        setClearMessage(!clearMessage); // show form cleared
        setTimeout(()=> setClearMessage(false),4000); // dont'show
        setPostForm(!postForm);
       }}
       children={'Create post'}/>
      { clearMessage ?  <Typography className={classes.formClearedMessage}>Form has been cleared</Typography> : ''}
        </>
     }
       </Container>
        </>
    );
}

export default Form;