import React from 'react';
import './button.css'

export default function Button(props){
    return(
        <button className='button' type='button' onClick={props.onClick}>
            {props.children}
        </button>
    )
}