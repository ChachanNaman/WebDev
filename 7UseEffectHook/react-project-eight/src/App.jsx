
import { useEffect } from 'react'
import './App.css'
import { useState } from 'react'

function App() {
  const[count, setCount] = useState(0)
  const[total, setTotal] = useState(1)

  //first -> side-effect function -> what action i want to perform as a side effect
  //second -> clean-up function -> to do something when my side-effect or something gets failed 
  //thirs -> comma separated dependance dependency list -> means it contains like 'count' and all , if they gets updated then 'first also updated
  
  //Variation 1 -> runs on every render
  // useEffect(() => {
  //  alert("i will run on every render")
  // })
  //whenever i click on click me -> it renders again and update the count 

  //Variation 2 -> runs after a single render 
  // useEffect(() => {
  //  alert("i will run after first render")
  // }, [])

  //Variation 3 -> 
  // useEffect(() => {
  //  alert("i will run after every count updation")
  // }, [count])
  // useEffect(() => {
  //   first

  //   return () => {
  //     second
  //   }
  // }, [third])
  
  //Variation 4 -> multiple dependencies 
  // useEffect(() => {
  //  alert("i will run after every count updation")
  // }, [count, total])

  //Variation 5 -> Clean up component - > runs when my prev value get updated to new value
  useEffect(() => {
    alert("i will run after every count updation")

    return () => {
      alert("UI got relaoded coz of updation")
    }
  }, [count])
  function handleclick(){
    setCount(count+1)
  }
  function handletotal(){
    setTotal(total+1)
  }

  return (
    <div>
      <button onClick={handleclick}>
        Update Count
      </button>
      <br />
      Count : {count}

      <br />
      <button onClick={handletotal}>
        Update Total
      </button>
      <br />
      Count : {total}
    </div>
  )
}

export default App
