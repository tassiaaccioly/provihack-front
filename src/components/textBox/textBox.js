import React from 'react';
import './textBox.css';

export default function TextBox(props){
    return(
        <div className='text_box'>
            <h1>{props.title}</h1>
            <p>{props.children}</p>
        </div>
    )
}