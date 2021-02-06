import React from 'react'

export default function Button(props){
    return(
        <button className='button' type='button' onClick={props.onClick}>
            {props.children}
        </button>
    )
}