import React from "react";
import Button from "./Button";
import logo from "../logo.svg";
import './Home.css';
import { useState } from "react";
import { useEffect } from "react";

const Home = () => {
    return (
        <div className="Home">
            <img src={logo} className="logo" alt="logo" />
            <p>This is a place where you feel more comfortable to study Finnish!</p>
            <Button className="button" />
        </div>
    )
}

export default Home;