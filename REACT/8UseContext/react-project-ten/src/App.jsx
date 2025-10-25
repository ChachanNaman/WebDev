
import { createContext, useState } from 'react'
import './App.css'
import Child1 from './components/Child1'
//step 1-> create context
// const UserContext = createContext()

const ThemeContext = createContext()

//step 2-> wrap all child inside the a provider

//step 3 -> pass value 
//step 4 -> consume the value passed inside consumer child
function App() {
  // const[name , useName] = useState({name : "naman"})
     const[theme , setTheme] = useState('light')
  return (
    <>
    <ThemeContext.Provider value={{theme, setTheme}}>
      <div id="container" style={{backgroundColor : theme==='light' ? "beige" : "black"}}>
         <Child1/>
      </div>
     
    </ThemeContext.Provider>



    {/* <UserContext.Provider value={name}>
      <Child1 />
    </UserContext.Provider>     */}
    </>
  )
}

export default App
// export {UserContext}
export {ThemeContext}