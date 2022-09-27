import React from "react";
import { useState, useEffect } from 'react';
import { TextareaAutosize, Container, Typography } from '@material-ui/core';
import Button from "../Buttons/Button";
import FileBase from 'react-file-base64';
import useStyles from "./FormStyle";
import { AiFillCloseCircle } from 'react-icons/ai';
import { useDispatch } from 'react-redux';
import { createPost, updatePost } from '../../actions/posts';
import { useSelector } from 'react-redux';

const Form = ({ currentId, setCurrentId }) => {
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

    // fetch need to edit post from redux
    const post = useSelector((state) => currentId ? state.posts.find((ps) => ps._id === currentId) : null);


    // populate need to edit post
    useEffect(() => {
        // setPostForm(true);
        if (post) {
            setPostForm(true);
            setPostData(post);
        }
    }, [post])



    // dispatcher
    const dispatch = useDispatch();


    // state for create post form
    const [postForm, setPostForm] = useState(false);
    // state for showing success message
    const [postUploaded, setPostUploaded] = useState(false);

    // handling form clear
    const handleClear = (e) => {
        setPostData({
            creator: '',
            title: '',
            description: '',
            tags: '',
            selectedFile: '',
        });
        setPostForm(false);
        setCurrentId(null);
    }

    // handling add button
    const handleSubmit = (e) => {
        e.preventDefault();
        // handle no inputs
        if(!postData.creator || !postData.title || !postData.tags || !postData.description || !postData.selectedFile){
            setPostForm(!postForm);    
            return;
        }
        // id check if current id is valid
        if (currentId) {
            dispatch(updatePost(currentId, postData));
        }
        else {
            dispatch(createPost(postData)); // send postData, to actions then reducer
        }
        setPostUploaded(true);
        setTimeout(() => setPostUploaded(false), 4000);
        handleClear();
    }

    return (
        <>
            <main className={classes.wrapper}>
                <h2 className={classes.headingStyle}>Let others know about your posts </h2>
                {postForm ? //form open
                    <Container
                        className={classes.formContainer}>

                        <button
                            onClick={() => handleClear()}
                            className={classes.closeBtnStyle}>
                            <AiFillCloseCircle></AiFillCloseCircle>
                        </button>

                        <Typography className={classes.createPostTitle}>
                            Create a new post
                        </Typography>

                        <form className={classes.formControl}>
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
                                placeholder={'Title of post'}>
                            </input>

                            <TextareaAutosize
                                variant='filled'
                                required
                                minRows={4}
                                maxRows={4}
                                className={classes.textFieldStyle}
                                value={postData.description}
                                onChange={(e) => setPostData({ ...postData, description: e.target.value })}
                                placeholder={'Small caption'}>
                            </TextareaAutosize>

                            <input
                                placeholder={'Tags, comma separated'}
                                className={classes.creator_title_tag_style}
                                value={postData.tags}
                                onChange={(e) => setPostData({ ...postData, tags: e.target.value.split(",") })}>

                            </input>


                            <div className={classes.fileUpload}>
                                <FileBase
                                    style={{ textAlign: 'center' }}
                                    type="file"
                                    multiple={false}
                                    onDone={({ base64 }) => setPostData({ ...postData, selectedFile: base64 })}
                                />
                            </div>

                        </form>

                        <div style={{ display: 'flex', justifyContent: 'center' }}>
                            <Button 
                            text={'Post'} 
                            onClick={(e) => handleSubmit(e)} 
                            style={{ margin: '1rem', width:'8rem' }} />

                            <Button 
                            text={'Clear'} 
                            onClick={(e) => handleClear(e)} 
                            style={{ margin: '1rem', background:'transparent',border:"1px solid var(--blue)", color:'var(--blue)', width:'8rem'}} />
                        </div>


                    </Container> :
                    // when form is closed
                    <>
                        <Button
                            onClick={() => {
                                setPostForm(!postForm);
                            }}
                            text={'Create'} />

                        {postUploaded ? <Typography className={classes.formClearedMessage}>Successfully uploaded ✅</Typography> : ''}
                    </>
                }
            </main>
        </>
    );
}

export default Form;