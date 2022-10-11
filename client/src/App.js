import React from "react";
import { useState } from "react";
import './App.css'
import { useDispatch } from "react-redux";
import { useEffect } from "react";
import Form from './components/Form/Form';
import Posts from './components/Posts/Posts.jsx';
import Banner from './components/Banner/Banner';
import Contact from "./pages/ContactUs/Contact";
import About from "./pages/About/About";
import Register from './pages/Register/Register';
import Navbar from './components/Navbar/Navbar';
import { getPosts } from './actions/posts';
import useStyles from './AppStyle';
import { AiOutlineArrowUp } from 'react-icons/ai';
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";

const App = () => {
    // style class
    const classes = useStyles();

    // dispatching actions 
    const dispatch = useDispatch();

    // id for post
    const [ currentId, setCurrentId] = useState(null);

     // mount and re-renders
     useEffect(() => {
        dispatch(getPosts()); // successful dispatch
    }, [currentId,dispatch]); 


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
        <BRouter>
            <div>
                <Routes>
                    <Route path="/" element={
                        <>
                        <Banner />
                        </>
                    }>
                    </Route>
                    <Route path="/register" element={
                        <>
                          <Register/>   
                        </>
                    }></Route>
                    <Route path="/checkPosts" element={
                         <>
                         <Navbar/>
                         {showScroll ?
                             <button
                                 className={classes.scrollBtn}
                                 onClick={() => scrollFunction()}>
                                 <AiOutlineArrowUp></AiOutlineArrowUp>
                             </button> : ""}
                         <Form  currentId={currentId} setCurrentId={setCurrentId}/>
                         <Posts setCurrentId={setCurrentId} />
                     </>
                    }>
                    </Route>
                </Routes>
            </div>
            <Routes>
                <Route path="/about" element={<About/>}></Route>
                <Route exact path="/contact" element={<Contact />}></Route>
            </Routes>
        </BRouter >
    )
}
export default App;