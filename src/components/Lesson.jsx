import React from "react";
import ChangeCards from "./Changecards";
import './Lesson.css';

const Lesson = () => {
    return (
        <div className="Lesson">
            <div className="right-container">
                <ChangeCards index={0} />
                <ChangeCards index={1} />
                <ChangeCards index={2} />
                <ChangeCards index={3} />
                <ChangeCards index={4} />
                <ChangeCards index={5} />
            </div>
        </div>
    )
}

export default Lesson;