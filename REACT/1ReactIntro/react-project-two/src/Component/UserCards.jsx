import React from 'react'
import naman from '../assets/love.jpg'
import "./UserCards.css"
const Usercards = (props) => {
  return (
    <div className='user-container' style={props.style}>
        <p id='user-name'>{props.name}</p>
        <img id='user-img' src={props.image} alt={props.image} />
        <p id='user-desc'>{props.desc}</p>
        <a href={props.link} target="_blank" rel="noopener noreferrer">
          LinkedIn
        </a>
    </div>
  )
}

export default Usercards

