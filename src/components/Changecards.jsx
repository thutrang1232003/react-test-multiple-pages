import React from 'react';
import { useState } from 'react';
import { languageList } from './languageList';
import './Changecards.css';

export default function ChangeCards(props) {
  const [index, setIndex] = useState(0);
  let data = languageList[props.index];
  function handleClick() {
    
    if(index + 1 > data.pronoun.length-1){
        setIndex (0)
    }else{
        setIndex (index + 1)
    }
  }
 
  return (
    <div className = "Changecards"> 
      <button onClick={handleClick}>
          {data.pronoun[index]} 
      </button>
      <h1 style={{color: data.color[index]}}>
          {data.verb[index]}
      </h1>
      <img src={data.url[index]} style={{width:"100px", height:"100px"}} alt= "" />
      <h5>{data.translate[index]}</h5>
    </div>);
}
