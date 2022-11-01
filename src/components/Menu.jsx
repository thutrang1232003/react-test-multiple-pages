import React from "react";
import { Link } from "react-router-dom";
import './Menu.css';


function Menu (props){
    return (
        <ul className="Menu">
            <li><Link to="/">Home</Link></li>
            <li><Link to="/lesson">Lesson</Link></li>
            <li><Link to="/game">Game</Link></li>
            <li><Link to="/account">Account</Link></li>
        </ul>
            

    );
}
export default Menu;