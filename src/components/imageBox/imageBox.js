import React from 'react'
import './imageBox.css'

export default function ImageBox(props) {
    return (
      <div>
          <div className="image_box">
              <img src={props.src} alt={props.alt} />
          </div>
      </div>
    )
  }