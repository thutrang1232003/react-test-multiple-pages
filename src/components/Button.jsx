import React from "react";
import { Link } from "react-router-dom";
import './Button.css';

function Button(props){
    return (
            <button className="button"> 
                <Link to="/lesson">Let's get started!</Link> 
            </button>
        
    )
}
export default Button;