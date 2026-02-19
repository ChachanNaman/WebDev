//daily contri😭😭
//daily
//dailyy
import './App.css'

function App() {
  function handleclick (){
    alert("I am clicked !")
  }
  function hovermouse(){
    <style>
      background-color: aqua;
    </style>
    alert("Hovering over the para huhh !")
  }
  function countword(e){
    console.log("Word contains : ", e.target.value)
    //go in console and check at every step
  }
  function handlesubmit(e){
    //to prevent default submit behaviour i wrote this
    e.preventDefault();

    //making my own custom submit button 
    alert("Submit kardu kya ?")
  }
  return (
    <div>
      <form onSubmit={handlesubmit}>
        <input type="text" onChange={countword} />
        <button type='submit'>Submit</button>
      </form>
      <p onMouseOver={hovermouse} style={{border : "1px solid black"}}>
        I am para
      </p>
      <button onClick={handleclick}>
        Click Me
      </button>
      <br />

      {/* wrong way to write */}
      {/* <button onClick={alert("you clicked me")} >
        Click meee
      </button> */}

      {/* Correct way  */}
      <button onClick={() => alert("you clicked me")} >
      Click meee
      </button>
      
    </div>
  )
}

export default App
