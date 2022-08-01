import React from "react";
import './App.css'
import {Container, AppBar, Typography } from '@material-ui/core';
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts.jsx';
import useStyles from './AppStyle'; // makeStyles

const App = ()=>{
    // classes for styling objects
    const classes = useStyles();
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
                    {/* icon type image */}
                </AppBar>
                    <Container>
                         <Form/>
                    </Container>
                    <Container>
                        <Posts/>
                    </Container>
            </Container>
        </div>
    )
}
export default App;