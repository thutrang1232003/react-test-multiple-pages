import React, { useState } from "react";
import cardsDetails from '../cardsDetails';

const Card = (props) => {
    const [showFront, setShowFront] = useState(true);

    const handleClick = () => {
        setShowFront(!showFront);
    }

     return (
        <div className="card" onClick={handleClick}>
            {!showFront && 
            <div className="card-back">
                <h2>{cardsDetails[props.index].backInFinnish}</h2>
                <h3>{cardsDetails[props.index].backInEnglish}</h3>
            </div>
            }
            {showFront && 
            <div className="card-front">
                <h2>{cardsDetails[props.index].frontInFinnish}</h2>
                <h3>{cardsDetails[props.index].frontInEnglish}</h3>
                <img src={cardsDetails[props.index].imgSrc} alt="" />
            </div>}
            
        </div>
    )
}

export default Card;