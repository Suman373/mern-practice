import React from "react";
import './App.css'
import {Container, AppBar, Typography } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts.jsx';
import { getPosts } from './actions/posts';
import useStyles from './AppStyle'; // makeStyles

const App = ()=>{
    // classes for styling objects
    const classes = useStyles();

    // dispatching actions 
    const dispatch = useDispatch();

    // mount and re-renders
    useEffect(()=>{
        dispatch(getPosts()); // successful dispatch
    },[dispatch]) ; // dispatch as dep arr,  

    return(
        <div>
            <Container >
                <AppBar 
                className={classes.appBar}
                position="static">
                    <Typography 
                    className={classes.title}
                    variant='h2'
                    align="center">
                        Souvenir
                    </Typography>
                </AppBar>
                    <Container>
                        {/* form for create */}
                         <Form/>
                    </Container>
                    <Container>
                        {/* container for showing posts */}
                        <Posts/>
                    </Container>
            </Container>
        </div>
    )
}
export default App;