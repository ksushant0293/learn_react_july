import { useState } from 'react'
import Abc from "./Abc"
import './App.css'
import Fruit from "./Fruits"
function App() {

  let [counter, setCounter] =useState(15)

  const addValue = () => {
    if(counter < 30){
      setCounter(prevcounter =>prevcounter + 1)
      setCounter(prevcounter =>prevcounter + 1)
      setCounter(prevcounter =>prevcounter + 1)
      setCounter(prevcounter =>prevcounter + 1)
      setCounter(prevcounter =>prevcounter + 1)
      // setCounter(counter = counter + 1 )
      // setCounter(counter = counter + 1 )
      // setCounter(counter = counter + 1 )
      // setCounter(counter = counter + 1 )lss
      console.log("value added", counter);
    }else{
      alert("can't count above 30")
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
      <Abc name= "sushant" counter = {counter}  />
      <Fruit />
    </>
  )
}

export default App
