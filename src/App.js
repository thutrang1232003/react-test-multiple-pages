import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";
import Lesson from "./components/Lesson";
import Game from "./components/Game";
import Account from "./components/Account";
import Menu from "./components/Menu";

const App = () => {
    return (
        <div className="App">
            <Router>
                <Menu />
                <Routes>
                    <Route path="/" element={<Home />}></Route>
                    <Route path="/lesson" element={<Lesson />}></Route>
                    <Route path="/game" element={<Game />}></Route>
                    <Route path="/account" element={<Account />}></Route>
                </Routes>
            </Router>
        </div>
    )
}

export default App;

