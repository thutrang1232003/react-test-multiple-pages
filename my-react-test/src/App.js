import React, { useEffect } from "react";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "./pages/Page1";
import Page2 from "./pages/Page2";
import './App.css';
import { useState } from "react";

const App = () => {
    const [currentColor, setCurrentColor] = useState('black')

        useEffect (() => {
            setTimeout(() => {
                setCurrentColor('blue')
            }, 2000)
        }, [])

        useEffect (() => {
            setTimeout(() => {
                setCurrentColor('yellow')
            }, 4000)
        }, [])

        useEffect (() => {
            setTimeout(() => {
                setCurrentColor('green')
            }, 6000)
        }, [])

        useEffect (() => {
            setTimeout(() => {
                setCurrentColor('red')
            }, 8000)
        }, [])

        useEffect (() => {
            setTimeout(() => {
                setCurrentColor('gray')
            }, 10000)
        }, [])

        useEffect (() => {
            setTimeout(() => {
                setCurrentColor('black')
            }, 12000)
        }, [])

    return (
                <Router>
            <div className="App">
                <div style={{color: currentColor}}>
                    <h2 >How to play:</h2>
                    <ol>
                        <li>First guest what the word of action verb in finnish is.</li>
                        <li>Then click on each card to check and see the right answer.</li>
                    </ol>
                </div>
                
                <Routes>
                    <Route path="/" element={<Page1 />} />
                    <Route path="/page2" element={<Page2 />} />
                </Routes>
                <span><Link to="/">Page 1</Link></span>
                <span><Link to="/page2">Page 2</Link></span>
            </div>
        </Router>
        
    )
}

export default App;

