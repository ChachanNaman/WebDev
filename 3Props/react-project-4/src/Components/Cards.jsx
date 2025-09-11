import React from 'react'

const Cards = (props) => {
  return (
    <div>
        {props.name}
        {props.children}
    </div>
  )
}

export default Cards
