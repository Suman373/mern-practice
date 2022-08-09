import React from "react";
import { useState} from 'react';
import { TextareaAutosize, Container, Typography } from '@material-ui/core';
import Button from "../Buttons/Button";
import FileBase from 'react-file-base64';
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
        tags: '',
        selectedFile: '',
    });
    
    // dispatcher
    const dispatch = useDispatch();
    

    // state for create post form
    const [ postForm , setPostForm] = useState(false);
    // state for showing cleared message
    const  [clearMessage , setClearMessage] = useState(false);
    let neededMessage = "";

    // handling form clear
    const handleClear = (e)=>{
        e.preventDefault();
        setPostData({});
        setPostForm(false);
    }

    // handling add button
    const handleSubmit = (e) => {
        // e.preventDefault();
        dispatch(createPost(postData)); // send postData, to actions then reducer
        setPostData({});
        setPostForm(!postForm);
    }


    return (
       <>
       <Container className={classes.wrapper}>
        <h2 className={classes.headingStyle}>Share your moments, let others know </h2>
         { postForm ? //form open
          <Container
            className={classes.formContainer}>
                <button 
                onClick={()=> setPostForm(!postForm)}
                 className={classes.closeBtnStyle}>
                    <AiFillCloseCircle></AiFillCloseCircle>
                </button>
            <Typography className={classes.createPostTitle}>
                Create a new post
            </Typography>

            <form autoComplete="off"  className={classes.formControl}>
            <input
                required
                type="text"
                className={classes.creator_title_tag_style}
                placeholder={'Name of creator'}
                value={postData.creator}
                onChange={(e) => setPostData({ ...postData, creator: e.target.value })}>
            </input>

            <input
                required
                type="text"
                className={classes.creator_title_tag_style}
                value={postData.title}
                onChange={(e) => setPostData({ ...postData, title: e.target.value })}
                placeholder={'Enter the title'}>
            </input>

            <TextareaAutosize
                variant='filled'
                required
                minRows={5}
                maxRows={5}
                className={classes.textFieldStyle}
                value={postData.description}
                onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                placeholder={'Write the description...'}>
            </TextareaAutosize>

            <input
                placeholder={'Enter tags, comma separated'}
                className={classes.creator_title_tag_style}
                value={postData.tags}
                onChange={(e) => setPostData({ ...postData, tags: e.target.value })}>

            </input>
        

            <div className={classes.fileUpload}>
                <FileBase
                style={{textAlign:'center'}}
                type="file"
                multiple={false}
                onDone={({base64}) => setPostData({...postData, selectedFile: base64})}
                />
            </div>

            </form>

           <div style={{display:'flex', justifyContent:'center'}}>
           <Button text={'Post'} onClick={(e)=>handleSubmit(e)} style={{ margin: '1rem' }} />
            <Button text={'Clear'} onClick={(e) => handleClear(e)} style={{ margin: '1rem' }} />
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
       text={'Create new'}/>
      { clearMessage ?  <Typography className={classes.formClearedMessage}>{neededMessage}</Typography> : ''}
        </>
     }
       </Container>
        </>
    );
}

export default Form;