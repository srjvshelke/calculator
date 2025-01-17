import React, { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

const App:React.FC  =()=>{
  const [count, setCount] = useState(0);
  const incrementcount= ()=>{
    setCount((count)=> count + 1) ;
  }
  const Decrementcount=()=>{
    setCount((count)=> count - 1) ;
  }
  return (
    <>
      <div className="card flex justify-center items-center flex-row">
        <button onClick={incrementcount}>
          Increment
        </button>
        <text className='text-8xl'>{count}</text>
        <button onClick={Decrementcount}>
          Decrement
        </button>
      </div>

    </>
  )
}

export default App
