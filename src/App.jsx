import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  

  let [counter, setCounter] = useState(12)
  // let counter = 5

  const addValue = () => {
    console.log(counter);

    if(counter < 20)
    setCounter(counter + 1)
     
  }

  const removeValue = () => {
    console.log(counter);

    if(counter > 0)
    setCounter(counter - 1);
   
  }

  return (
    <>
      <h1>Counter App </h1>
      <h2>Counter Value : {counter} </h2>
      <button onClick={addValue}  className='buttons' >Add value {counter} </button>
      <button onClick={removeValue} className='buttons' >Remove Value {counter} </button>
      <p>You can set the counter value between 0 to 20</p>

      
    </>
  )
}

export default App
