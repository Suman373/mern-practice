import React from "react";
import { BrowserRouter as BRouter, Route, Routes } from "react-router-dom";
import { useState } from "react";
import './App.css'
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import { AiOutlineArrowUp } from 'react-icons/ai';
import Home from "./pages/Home/Home";


const App = () => {
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