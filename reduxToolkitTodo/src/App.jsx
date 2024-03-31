import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import AddTodo from './components/AddTodo'
import Todos from './components/Todos'
import EditTodo from './components/EditTodo'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <AddTodo/>
      <EditTodo/>
      <Todos/>
    </>
  )
}

export default App
