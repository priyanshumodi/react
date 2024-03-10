import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let [counter,setCounter] = useState(15);

  // let counter = 15

  const addValue = () => {
    if(counter<20)
    {
      console.log(`value added ${counter}`)
      setCounter(counter+1)
    }
  }
  const removeValue = () => {
    if(counter>0)
    {
      console.log(`value remove ${counter}`)
      setCounter(counter-1)
    }
  }
  return (
    <>
      <h1>Jai Shree Krishna</h1>
      <h2>counter value : {counter}</h2>
      <button onClick={addValue}>Add value {counter}</button>
      <br />
      <button onClick={removeValue}>Remove value {counter}</button>
      <p>footer {counter}</p>
    </>
  )
}

export default App
