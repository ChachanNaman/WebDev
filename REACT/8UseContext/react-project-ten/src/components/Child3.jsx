import React, { useContext } from 'react'
// import { UserContext } from '../App'
import { ThemeContext } from '../App'

const Child3 = () => {
    // const user = useContext(UserContext)
    const {theme, setTheme} = useContext(ThemeContext)
    function handleclick(){
        if(theme === 'light'){
            setTheme('dark')
        }
        else{
            setTheme('light')
        }
    }
  return (
    <div>
      {/* {data :  {user.name}} */}
      <button onClick={handleclick}>
        Change theme
      </button>
    </div>
  )
}

export default Child3
