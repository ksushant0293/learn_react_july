import { useState, useCallback , useEffect, useRef } from 'react'
import './App.css'
import './index.css'

function App() {
  const [length, setLength] = useState(8)
  const [numAllowed, setNumAllowed] = useState(false)
  const [charAllowed,setCharAllowed] = useState(false)
  const [Password, setPassword] = useState("")

  const [isClicked, setIsClicked] = useState(false);

  const copyPasswordToClipboard = useCallback(()=>{
    passwordRef.current?.select()
    // passwordRef.current?.setSelectionRange(0,4)
    window.navigator.clipboard.writeText(Password)
  },[Password])

  const handleClick = () => {
    copyPasswordToClipboard();
    setIsClicked(true);
    // Remove the effect class after the animation ends
    setTimeout(() => {
      setIsClicked(false);
    }, 300); // Match the duration of your CSS animation
  };



  //useRef hook
  const passwordRef = useRef(null)

  const PasswordGen = useCallback(()=>{
    let pass = ""
    let str = "zxcvbnmasdfghjklqwertyuiopZXCVBNMASDFGHJKLQWERTYUIOP"

    if(numAllowed){
      str += "0987654321"
    }
    if(charAllowed){
      str += "!@#$%^&*_+{}[]<>()/"
    }

    for (let i = 1; i <= length; i++) {
      let char = Math.floor(Math.random() * str.length + 1);
      pass  += str.charAt(char)
      
    }
      setPassword(pass)
  }, [length, numAllowed, charAllowed, setPassword ])

  // const copyPasswordToClipboard = useCallback(()=>{
  //   passwordRef.current?.select()
  //   // passwordRef.current?.setSelectionRange(0,4)
  //   window.navigator.clipboard.writeText(Password)
  // },[Password])

  useEffect(()=>{
    PasswordGen()
  },  [length, numAllowed, charAllowed, PasswordGen ])
  return (
    <>
      <div className=' mainContainer w-full max-w-md mx-auto shadow-md rounded-lg px-4 py-3 my-8'>
        <h1 className='text-3xl text-center text-black font-bold my-3'>Password Generator</h1>
        <div className='flex shadow rounded-lg overflow-hidden mb-4'>
          <input type="text" value={Password} className='outline-none w-full py-1 px-3' placeholder='password' readOnly ref={passwordRef}/>
          <button onClick={handleClick} 
          className={`outline-none py-1 px-3 text-xs text-black font-bold bg-custom-blue shrink-0
          transition-transform duration-300 ${ isClicked ? 'bg-cyan-900' : ''}
          `}>COPY</button>
        </div>

        <div className='flex text-sm gap-x-2'>
          <div className="flex items-center gap-x-1">
            <input type="range" min={8} max={20} value={length} className='cursor-pointer'
              onChange={(e)=>{setLength(e.target.value)}} />
            <label htmlFor="" className='text-black' >Length: {length}</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={numAllowed} id='numInput'
              onChange={()=>{setNumAllowed((prev) => !prev)}} />
              <label htmlFor="numInput" className='text-black'>Numbers</label>
          </div>
          <div className="flex items-center gap-x-1">
            <input type="checkbox" defaultChecked={charAllowed} id='charInput'
              onChange={()=>{setCharAllowed((prev) => !prev)}} />
              <label htmlFor="charInput" className='text-black'>Charactors</label>
          </div>
        </div>
      </div>
    </>
  )
}

export default App
