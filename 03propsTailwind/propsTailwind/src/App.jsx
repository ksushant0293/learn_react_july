import './App.css'
import Card from "./components/Card"
import zasdx from "./assets/zasdx.jpg"

function App() {


  return (
    <>
      <div className='flex flex-col items-center justify-center'>
        <h1 className=' w-96 mt-2 mb-2 bg-slate-500 text-white text-center'>Tailwind test</h1>
        <div className='w-80  bg-blue-400 rounded-xl'>
          <img src= {zasdx} alt="" className='h-36 w-40'/>
          <h2 className='text-lg font-extrabold text-center'>card</h2>
          <p className='text-center text-sm'>Lorem ipsum dolor sit amet consectetur</p>
        </div>
      </div> 
        <div className='flex  justify-center '>
          <Card username= "alma"  btnText = "click me"/>  
          <Card username = "casey" btnText = "know me"/> 
        </div>
        <
    </>
  )
}

export default App
