import { useState } from 'react'

import './App.css'

function App() {

  let [counter, setCounter] =useState(5)

  const addValue = () => {
    if(counter < 10){
      setCounter(counter = counter + 1 )
      console.log("value added", counter);
    }else{
      alert("can't count above 10")
    }
  }

  const removeValue = () => {
    if(counter > 0 ){
      setCounter(counter = counter - 1)
      console.log("value removed", counter);
    }else{
      alert("can't remove below zero")
    }
  }

  return (
    <>
      <h1>Learning hooks</h1>
      <h2>counter value: {counter}</h2>
      <button onClick={addValue}>Add value{counter}</button>
      <br/>
      <button onClick={removeValue}>Remove value{counter}</button>
      <p>Footer{counter}</p>

    </>
  )
}

export default App
