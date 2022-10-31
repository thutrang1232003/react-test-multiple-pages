import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import Card from "./components/Card";
import './index.css';

const App = (props) => {
    const color = ['purple', 'indigo', 'blue', 'green', 'orange', 'pink'];
    const [ i, setI ] = useState(0);

    useEffect(() => {
        setTimeout(() => {
            setI(i + 1)
        }, 500)
    }, [i])
    
    if (i + 1 > color.length - 1) {
        setI(0)
    }

    return (
        <div className="App">
            <div className="card-guide" style={{ color: color[i] }}>
                <h1>How to play:</h1>
                <ol>
                    <li>First guest what the word of action verb in finnish is.</li>
                    <li>Then click on each card to check and see the right answer.</li>
                </ol>
            </div>
            <div className="flip-card">
                <Card className='card' index={0} />
                <Card className='card' index={1} />
                <Card className='card' index={2} />
                <Card className='card' index={3} />
                <Card className='card' index={4} />
                <Card className='card' index={5} /> 
                <Card className='card' index={6} /> 
                <Card className='card' index={7} /> 
                <Card className='card' index={8} /> 
                <Card className='card' index={9} /> 
                <Card className='card' index={10} /> 
                <Card className='card' index={11} /> 
                {/* <Card className='card' index={12} />
                <Card className='card' index={13} />
                <Card className='card' index={14} />
                <Card className='card' index={15} />
                <Card className='card' index={16} />
                <Card className='card' index={17} /> 
                <Card className='card' index={18} /> 
                <Card className='card' index={19} /> 
                <Card className='card' index={20} /> 
                <Card className='card' index={21} /> 
                <Card className='card' index={22} /> 
                <Card className='card' index={23} />  */}
            </div>
            {/* <button>MORE</button> */}
        </div>
    )
}

export default App;

