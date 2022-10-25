import React from "react";
import { useState } from "react";
import "./Card.css"
// import "./FlipTransiton.css"

const Card = (props) => {
    const [showFront, setShowFront] = useState(true);

    const handleClick = () => {
        setShowFront(!showFront);
    }

    return (
        <div className="card" onClick={handleClick}>
            {!showFront && 
            <div className="card-back">
                <p>{props.backInFinnish}</p>
                <p>{props.backInEnglish}</p>
            </div>
            }
            {showFront && 
            <div className="card-front">
                <p>{props.frontInFinnish}</p>
                <p>{props.frontInEnglish}</p>
                <img src={props.imgSrc} alt="" />
            </div>}
            
        </div>
    )
}

export default Card;