import React from "react";
import { useState } from "react";
import './App.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { getPosts } from './actions/posts';
import useStyles from './AppStyle';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";

const App = () => {
    // style class
    const classes = useStyles();

    // dispatching actions 
    const dispatch = useDispatch();

    // id for post
    const [currentId, setCurrentId] = useState(null);

    // mount and re-renders
    useEffect(() => {
        dispatch(getPosts()); // successful dispatch
    }, [currentId, dispatch]);


    let position;
    window.addEventListener('scroll', () => {
        position = window.pageYOffset;
        position > 200 ? setShowScroll(true) : setShowScroll(false);
    })

    const [showScroll, setShowScroll] = useState(true);

    //scroll
    const scrollFunction = () => {
        window.scrollTo(0, 0);
    }
    return (
        <>
            <div className="App">
                <BRouter>
                    <Navbar />
                    <Routes>
                        <Route path="/" element={
                            <Home />
                        }></Route>
                    </Routes>
                    <Footer />
                </BRouter >
            </div>
        </>
    )
}
export default App;