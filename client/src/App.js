import React from "react";
import { useState } from "react";
import './App.css'

import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts.jsx';
import Navbar from "./components/Navbar/Navbar";
import Banner from './components/Banner/Banner';
import Contact from "./pages/Contact";
import { getPosts } from './actions/posts';
import useStyles from './AppStyle';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";

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
        // console.log(position);
        position > 200 ? setShowScroll(true) : setShowScroll(false);
    })

    const [showScroll, setShowScroll] = useState(true);

    //scroll
    const scrollFunction = () => {
        window.scrollTo(0, 0);
    }
    return (
        <BRouter>
            <div>
                <Navbar />
                <Routes>
                    <Route path="/" element={
                        <Banner />
                    }>
                    </Route>
                    <Route path="/checkPosts" element={
                        <>
                            {showScroll ?
                                <button
                                    className={classes.scrollBtn}
                                    onClick={() => scrollFunction()}>
                                    <AiOutlineArrowUp></AiOutlineArrowUp>
                                </button> : ""}
                            <Form />
                            <Posts />
                        </>
                    }>
                    </Route>
                </Routes>
            </div>
            <Routes>
                <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
        </BRouter >
    )
}
export default App;