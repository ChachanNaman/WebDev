
import './App.css'
import { useState } from 'react'
import Cards from './Components/Cards'
import Button from './Components/Button'
function App() {
  const[count, setCount] = useState(0)

  function handleClick(){ //func to increase count
    setCount(count+1)
  }


  return (
    <>
  
      <div>
        <Button inccount = {handleClick} text = "Click me">
          <h1>{count}</h1>
        </Button>

        {/* <Cards name="Naman ji">
          <h1>Welcome to course</h1>
          <p>This course is beneficial for you !</p>
          <p>Chalo bye bye</p>
        </Cards>
        <Cards children = "mein ek children hu">
          {/* <p>mein bacha hu </p> */}
        {/* </Cards> */} 
      </div>
    </>
  )
}

export default App
