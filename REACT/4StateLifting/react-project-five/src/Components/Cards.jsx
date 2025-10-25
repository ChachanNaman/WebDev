import React from 'react'

const Cards = (props) => {
  return (
    <div>
      <input type="text" onClick={(event) => props.setName(event.target.value)}/>
      {/* setName is changing variable in parent of App.jsx changing its value from parent Cards.jsx */}
      <p>Name state variable ki value inside card : {props.name}</p>
      <p>{props.title} : {props.name}</p>
    </div>
  )
}

export default Cards
