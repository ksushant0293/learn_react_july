import { useState } from 'react'

import './App.css'

function App() {
  const [color, setColor] = useState("orange")

  return (
    <>
      <div className='w-full h-screen' style={{backgroundColor : color}}>
      <div className='fixed flex flex-wrap justify-center bottom-9 inset-x-0 px-2'>
        <div className='flex flex-wrap justify-center gap-3 shadow-lg px-3 py-2 rounded-xl bg-white'>
        <button onClick={()=>{setColor("red")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style={{backgroundColor: "red"}}>red</button>
        <button onClick={()=>{setColor("blue")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style =
        {{backgroundColor:"blue"}}>blue</button>
        <button onClick={()=>{setColor("yellow")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = 
        {{backgroundColor: 'yellow'}}>yellow</button>
        <button onClick={()=>{setColor("green")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style =
        {{backgroundColor: "green"}}>green</button>
        <button onClick={()=>{setColor("purple")}} className='outline-none px-4 py-1 rounded-full text-white shadow-lg' style = 
         {{backgroundColor: "purple"}}>purple</button>
        </div>
      </div>
      </div>
    </>
  )
}

export default App
