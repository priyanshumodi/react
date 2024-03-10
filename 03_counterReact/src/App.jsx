import { useState } from 'react'

import viteLogo from '/vite.svg'
import './App.css'


function App() {

  let counter = 15
  return (
    <>
      <h1>Jai Shree Krishna</h1>
      <h2>counter value : {counter}</h2>
      <button>Add value {counter}</button>
      <br />
      <button>Remove value {counter}</button>
      <footer>footer {counter}</footer>
    </>
  )
}

export default App
