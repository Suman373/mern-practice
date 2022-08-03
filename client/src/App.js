import React from "react";
import { useState } from "react";
import './App.css'
import { Container, AppBar, Typography } from '@material-ui/core';
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts.jsx';
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner';
import { getPosts } from './actions/posts';
import useStyles from './AppStyle';
import { AiOutlineArrowUp } from 'react-icons/ai';


const App = () => {
    // style class
    const classes = useStyles();

    // dispatching actions 
    const dispatch = useDispatch();

    // mount and re-renders
    useEffect(() => {
        dispatch(getPosts()); // successful dispatch
    }, [dispatch]); // dispatch as dep arr,



    let position;
    window.addEventListener('scroll', () => {
        position = window.pageYOffset;
    })

    const [showScroll, setShowScroll] = useState(false);
    useEffect(() => {
        position > 500 ? setShowScroll(true) : setShowScroll(false);
    }, [position])

    //scroll
    const scrollFunction = () => {
        window.scrollTo(0, 0);
    }
    return (
        <div>
            <Navbar />
            {showScroll ?
                <button
                    className={classes.scrollBtn}
                    onClick={() => scrollFunction()}>
                    <AiOutlineArrowUp></AiOutlineArrowUp>
                </button> : ""}
            <Banner />
            <Container className={classes.appContainer}>
                <Container>
                    {/* form for create */}
                    <Form />
                </Container>
                <Container>
                    {/* container for showing posts */}
                    <Posts />
                </Container>
            </Container>
        </div>
    )
}
export default App;