import { useCallback, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [length, setLength] = useState(8);
  const [numAllowed,setNumAllowed] = useState(false);
  const [charAllowed,setCharAllowed] = useState(false);
  const [password,setPassword] = useState("");

  const passwordGenerator = useCallback(()=>{
    let pass = "";
    let str = "ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz";
    if(numAllowed)
    str += "0123456789";
    if(charAllowed)
    str += "~!@#$%^&*(){}_+-=`"
    
    for(let i=0;i<Array.length;i++)
    {
        const char = Math.floor(Math.random() * str.length + 1);
        pass += str.charAt(char);
    }
    setPassword(pass);
  },[length,numAllowed,charAllowed,setPassword]);

  return (
    <>
      <div className="w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8 bg-gray-800 text-orange-500">
        <h1 className="text-white text-3xl text-center my-2">password generator</h1>
        <div className="flex shadow rounded-lg overflow-hidden mb-4"> 
          <input 
          type="text" 
          value={password}
          className="outline-none w-full py-1 px-3"
          placeholder="password"
          readOnly
          />
          <button className="bg-blue-700 text-white px-3 py-0.5 shrink-0">Copy</button>
        </div>
        <div className="flex text-sm gap-x-2">
          <div className="flex item-center gap-x-1">
            <input 
            type="range" 
            min={6}
            max={100}
            value={length}
            className='cursor-pointer'
            onChange={(e) => setLength(e.target.value)}
            />
            <label htmlFor="">Length: {length}</label>
          </div>
          <div>
            <input 
            type="checkbox" 
            defaultChecked = {numAllowed}
            id='numInput'
            onChange={() => setNumAllowed((prev) => !prev)}
            />
            <label htmlFor="numInput">Numbers</label>
          </div>
          <div>
            <input 
            type="checkbox" 
            defaultChecked = {charAllowed}
            id='charInput'
            onChange={() => setCharAllowed((prev) => !prev)}
            />
            <label htmlFor="charInput">Characters</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
