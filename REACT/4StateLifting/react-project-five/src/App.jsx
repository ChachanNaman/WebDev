
import Cards from './Components/Cards'
import './App.css'
import { useState } from 'react'

function App() {
  //create state
  //manage state
  //change state
  //sabhi child mein state ko sync karana

  //this is a parent state now transfering it to child cards
  const [name , setName] = useState('');

  return (
    <>
      <div>
        hello
          <Cards title ="Card1" name = {name} setName = {setName} />  
          <Cards title ="Card2" name = {name} setName = {setName} />  
          {/* transfered to child , name and setName , not i can access these in cards.jsx */}
          {/* now what i will change in child component ->Cards.jsx will reflect in parent too */}
          {/* <p>I am inside the parent component {title} : {name}</p> */}
          {/* here {name} is of parent class const one  */}
      </div>
    </>
  )
}
//Here App component is my parent and cards is my child

export default App
