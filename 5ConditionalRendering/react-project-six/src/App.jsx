
import { useState } from 'react'
import './App.css'
import Loggedin from './Components/loggedin'
import Loggedout from './Components/loggedout'
import loggedout from './Components/loggedout'

function App() {
  const [isloggedIn, setLoggedIn] = useState(false)

  //if-else condition
  // if(isloggedIn){
  //   return (
  //     <Loggedout/>

  //   )
  // }
  // else{
  //   return(
  //     <Loggedin />
  //   )
  // }

  //Ternery operator
  // return(
  //   <div>
  //     {isloggedIn ? <Loggedout/> : <Loggedout/> }
  //   </div>
  // )

  //Logical Operator
  // return (
  //   <div>
  //     <h1>Hello how yall</h1>
  //   <div>
  //     {isloggedIn && <Loggedout/>}
  //   </div>
  //   </div>
  // )

  //Early Return 

  //Early return statement 
  if(!isloggedIn){
    return(
      <Loggedin/>
    )
  }
  return(
  <div>
    {isloggedIn && <Loggedout/>}
  </div>
  )
}

export default App
