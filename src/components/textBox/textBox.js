import React from 'react';
import './textBox.css';

export default function textBox(props){
    return(
        <div className='text_box'>
            <h1>{props.title}</h1>
            <p>{props.text}</p>
            <button onClick={}>Saiba mais</button>
        </div>
    )
}