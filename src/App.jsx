import { useState } from 'react'
import heroImg from './assets/hero.png'
import reactLogo from './assets/react.svg'
import viteLogo from './assets/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0);

  // increase
  const increase = () => {
    setCount (count + 1);
  }

   // decrease
  const decrease = () => {
    if(count > 0) {
      setCount (count - 1);
    }
  }

   // reset
  const reset = () => {
    setCount (0);
  }

  return (
    <>
      <div className="bg-gray-200 w-72 p-4 rounded-2xl border">
        <h1 className='text-center font-bold text-3xl'>React Count </h1>
        <h2 className='font-bold text-center text-2xl'>{count} </h2>
       <div className='text-center flex items-center justify-around mt-5'>
         <button onClick={increase} className='bg-green-500 text-white p-1.5 rounded-xl '>
            Increase
          </button>
          <button onClick={decrease} className='bg-red-500 p-1.5 text-white rounded-xl '>
            Decrease
          </button>
          
       </div>
       <button onClick={reset} className='bg-gray-500 p-1.5 text-white rounded-xl ml-25 mt-5'>
            Reset
        </button>
      </div>
    </>
  )
}

export default App
