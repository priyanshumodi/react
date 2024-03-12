import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import Card from './components/Card'

function App() {
  const [count, setCount] = useState(0)
  let myObj = {
    username: "krishna",
    age: 27
  }
  let myArray = [10,20,30]
  // <Card channel="jai shree krishna" someObj={myObj} someArray={myArray}/>
  return (
    <>
      <h1 className="text-black bg-green-400 p-4 rounded-xl font-normal mb-4">Tailwind Test</h1>
      <Card username="krishna" buttonText="click me"/>
      {/* card me props ka name bhi same rakhna */}
      <Card buttonText="visit Me" />
    </>
  )
}

export default App
