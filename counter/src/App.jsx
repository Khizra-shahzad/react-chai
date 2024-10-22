import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
//let counter=15;

  let [counter,setCounter]= useState(15)
  const addValue=()=>{
    
    //counter=counter+1;
    setCounter(counter+1)
    

  }
  const removeValue=()=>{
    setCounter(counter-1)
  }

  return (
    <>
    <h1>chai or react</h1>
    <h3>Counter:{counter}</h3>
    <button
    onClick={addValue}
    >Add value{counter}</button>
    <br />
    <button
    onClick={removeValue}
    >Remove value{counter}</button>
    
    </>
  )
}
export default App
